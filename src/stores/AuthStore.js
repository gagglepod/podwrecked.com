import { defineStore } from "pinia";
import { auth } from "../firebase/config";
import {
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";

export const useAuthStore = defineStore("auth", {
  state: () => ({
    email: null,
    user: null,
    authIsReady: false,
    currentPercent: 0,
  }),
  getters: {
    getCurrentPercent: (state) => {
      console.log("getCurrentPercent:", state.currentPercent);
      return state.currentPercent;
    },
  },
  actions: {
    async setup() {
      // Run this code when the store is created
      try {
        const user = await new Promise((resolve) => {
          const unsubscribe = onAuthStateChanged(auth, (user) => {
            unsubscribe(); // Stop listening after the initial state is received
            resolve(user);
          });
        });

        this.setAuthIsReady(true);
        this.setUser(user);
      } catch (error) {
        console.error("Error setting up authentication:", error);
      }
    },
    setUser(payload) {
      this.user = payload;
    },
    setAuthIsReady(payload) {
      this.authIsReady = payload;
      // console.warn("authIsReady:", this.authIsReady);
    },
    setCurrentPercent(payload) {
      this.currentPercent = payload;
    },

    async signup({ displayName, email, password }) {
      console.log("##### Pinia: Signup Action");
      const res = await createUserWithEmailAndPassword(auth, email, password);
      if (res) {
        this.setUser(res.user);
        await updateProfile(res.user, {
          displayName: displayName,
        });
        console.log("##### Pinia: User profile updated");
      } else {
        throw new Error("##### Pinia: Could not complete signup");
      }
    },
    async verify({ email, password }) {
      console.log("##### Pinia: Verify Action");
      await createUserWithEmailAndPassword(auth, email, password);
    },

    async login({ email, password }) {
      console.log("##### Pinia: Login Action");
      const res = await signInWithEmailAndPassword(auth, email, password);
      if (res) {
        this.setUser(res.user);
      } else {
        throw new Error("##### Pinia: Could not complete login");
      }
    },

    async authNotReady() {
      console.log("##### Pinia: Auth Not Ready action");
      this.setAuthIsReady(false);
    },

    async continue() {
      console.log("##### Pinia: Continue Action");
      await signOut(auth);
      this.setAuthIsReady(true);
      this.setUser(null);
    },

    async logout() {
      signOut(auth);
      this.setUser(null);
      console.log("##### Pinia: Logout Action");
    },

    async setPercent(percentage) {
      this.setCurrentPercent(percentage);
      console.log("##### Pinia: Set Percentage");
    },
  },
});
