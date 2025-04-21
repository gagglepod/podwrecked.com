<template>
  <section class="splash-block splash-block--dark">
    <div class="container">
      <header class="splash-summary__header">
        <h2>Chain Gun Spinning!</h2>
      </header>
    </div>
  </section>
</template>

<script>
import { db } from "../firebase/config";
import { doc, collection, addDoc, updateDoc } from "firebase/firestore";

export default {
  name: "TheChainGun",
  setup() {
    const otSiteID = import.meta.env.VITE_SITE_ID;
    console.log("otSiteID:", otSiteID);

    async function createEpisodeDocs(siteID) {
      try {
        const siteDocRef = doc(db, "sites", siteID);
        const episodesSubCollectionRef = collection(siteDocRef, "episodes");

        for (let index = 2; index <= 13; index++) {
          const paddedIndex = String(index).padStart(2, "0");
          const slug = `i-am-not-easily-squished-${paddedIndex}`;

          const newEpisode = {
            author: "Kyle M. Bondo",
            body: "<p>Body</p>",
            excerpt: "Excerpt",
            image: "nes-v4-banner-1200x644.jpg",
            imageDetail: "nes-v4-banner-1920x480.jpg",
            thumb: "nes-v4-banner-1200x644.jpg",
            title: "Title",
            index: index,
            slug: slug,
            id: "", // Will be replaced after document is created
          };

          // Add the document without an ID field
          const docRef = await addDoc(episodesSubCollectionRef, newEpisode);

          // Update the document to include its auto-generated ID
          await updateDoc(docRef, {
            id: docRef.id,
          });

          console.log(`Created episode ${index} with ID: ${docRef.id}`);
        }

        console.log("All 12 episodes created successfully.");
      } catch (error) {
        console.error("Error creating episodes:", error);
      }
    }

    // Run once on setup
    createEpisodeDocs(otSiteID);

    return {
      otSiteID,
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
