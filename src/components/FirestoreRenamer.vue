<template>
  <section class="splash-block splash-block--dark">
    <div class="container">
      <header class="splash-summary__header">
        <h2>Firesale: Firestore Episode ID Renamer</h2>
      </header>
      <div class="mt-4">
        <button
          @click="moveEpisodesToSubCollection(otSiteID)"
          class="px-4 py-2 bg-red-600 text-white rounded hover:bg-red-700"
        >
          Run Episode Renamer
        </button>
      </div>
    </div>
  </section>
</template>

<script>
import { db } from "../firebase/config";
import { collection, getDocs, doc, setDoc, deleteDoc } from "firebase/firestore";

export default {
  name: "TheFiresale",
  setup() {
    // Retrieve site ID from environment variable
    const otSiteID = import.meta.env.VITE_SITE_ID;
    console.log("otSiteID:", otSiteID);

    // Function to move episodes to a sub-collection under the specified site
    async function moveEpisodesToSubCollection(siteID) {
      try {
        // Step 1: Get all documents in the 'episodes' collection
        const episodesSnapshot = await getDocs(collection(db, "episodes"));
        const episodesData = episodesSnapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));

        // Step 2: Define the new sub-collection path within the specified site document
        const siteDocRef = doc(db, "sites", siteID);
        const episodesSubCollectionRef = collection(siteDocRef, "episodes");

        // Step 3: Copy each episode document to the new sub-collection
        for (const episode of episodesData) {
          const newDocRef = doc(episodesSubCollectionRef, episode.id);
          await setDoc(newDocRef, episode);
        }

        // Step 4: Delete each document in the original 'episodes' collection after copying
        for (const episode of episodesData) {
          const originalDocRef = doc(db, "episodes", episode.id);
          await deleteDoc(originalDocRef);
        }

        console.log("Episodes successfully moved to the sub-collection!");
      } catch (error) {
        console.error("Error moving episodes:", error);
      }
    }

    return {
      otSiteID,
      moveEpisodesToSubCollection, // expose for button click
    };
  },
};
</script>

<style>
.splash-block {
  padding: 2rem 0 1rem;
  /* border: 2px solid red; */
}

.splash-block--dark {
  background: var(--color-dino-ride);
  color: var(--color-headings);
}

.splash-block--dark h1,
.splash-block--dark h2,
.splash-block--dark h3 {
  color: var(--color-headings);
}

.splash-summary__image {
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 2rem;
}

.splash-summary__image > img {
  width: 300px;
  height: 300px;
  object-fit: cover;
  border-radius: 2rem;
}

.splash-summary__header {
  text-align: center;
  margin-bottom: 5rem;
}

.dashboard__brand {
  transform: translateY(5px);
}

.splash-logo-text {
  width: 600px;
  padding-bottom: 0.25rem;
}

.splash-logo--primary {
  fill: var(--color-headings);
}

.splash-summary__text {
  text-align: center;
  color: var(--color-headings);
  letter-spacing: 0.1rem;
  margin-top: 1rem 0 1rem;
  padding: 0 1rem 0 1rem;
}

@media screen and (min-width: 768px) {
  .splash-summary__image > img {
    width: 600px;
    height: 600px;
    padding: 0;
    margin-top: 2rem;
    border-radius: 2rem;
  }

  .splash-summary__text {
    font-size: 2.1rem;
    line-height: 3.2rem;
    margin-top: 1rem 0 1rem;
    padding: 0 8rem 0 8rem;
  }
}
</style>
