import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore, serverTimestamp } from "firebase/firestore";
// import { getStorage } from "firebase/storage";
// import { getFunctions } from "firebase/functions";

const firebaseConfig = {
  apiKey: "AIzaSyDm3AcLdIuH0YmdfZJRuv6hnWw4CcdCBQs",
  authDomain: "oncetold-company-sites.firebaseapp.com",
  projectId: "oncetold-company-sites",
  storageBucket: "oncetold-company-sites.appspot.com",
  messagingSenderId: "463285512681",
  appId: "1:463285512681:web:e8ebc7060d639c349c0378",
};

// init firebase
const app = initializeApp(firebaseConfig);

// init firebase auth
const auth = getAuth(app);

// init firebase functions
// const functions = getFunctions(app);

// init firestore service
const db = getFirestore(app);

// timestamp
const timestamp = serverTimestamp(app);

// init firestore storage
// const projectStorage = firebase.storage();
// const storage = getStorage(app);
// const otStorage = getStorage(app, "gs://storage.oncetold.net");
// const otFeeds = getStorage(app, "gs://feeds.oncetold.net");
// const otStats = getStorage(app, "gs://stats.oncetold.net");
// const otGate = getStorage(app, "gs://gatehouse.oncetold.net");

export {
  auth,
  // functions,
  db,
  // storage,
  // otStorage,
  // otFeeds,
  // otStats,
  // otGate,
  timestamp,
};
