<template>
  <section class="splash-block splash-block--dark">
    <div class="container">
      <header class="splash-summary__header">
        <h2>Firesale: Firestore Episode Field Fixer</h2>
      </header>
      <div class="mt-4">
        <button
          @click="fixEpisodes(otSiteID)"
          class="px-4 py-2 bg-red-600 text-white rounded hover:bg-red-700"
        >
          Run Episode Fixer
        </button>
      </div>
    </div>
  </section>
</template>

<script>
import { db } from "../firebase/config";
import { collection, getDocs, doc, setDoc, deleteDoc } from "firebase/firestore";

export default {
  name: "FirestoreFixer",
  setup() {
    const otSiteID = import.meta.env.VITE_SITE_ID;
    console.log("otSiteID:", otSiteID);

    async function fixEpisodes(siteID) {
      try {
        const episodesRef = collection(db, `sites/${siteID}/episodes`);
        const episodesSnap = await getDocs(episodesRef);

        const episodes = episodesSnap.docs.map((d) => ({
          id: d.id,
          ...d.data(),
        }));

        // Split old vs new
        const oldDocs = episodes.filter((ep) => !ep.id.startsWith("Oncetold-"));
        const newDocs = episodes.filter((ep) => ep.id.startsWith("Oncetold-"));

        console.log(`Found ${oldDocs.length} old docs and ${newDocs.length} new docs`);

        for (const oldDoc of oldDocs) {
          if (typeof oldDoc.index === "undefined") {
            console.warn(`Old doc ${oldDoc.id} has no index — skipping`);
            continue;
          }

          const newDoc = newDocs.find((ep) => ep.index === oldDoc.index);

          if (!newDoc) {
            console.warn(
              `No matching new doc for old doc ${oldDoc.id} (index ${oldDoc.index})`
            );
            continue;
          }

          // Merge only the required fields
          const fieldsToCopy = {
            body: oldDoc.body || "",
            excerpt: oldDoc.excerpt || "",
            slug: oldDoc.slug || "",
            thumb: oldDoc.thumb || "",
          };

          const newDocRef = doc(db, `sites/${siteID}/episodes`, newDoc.id);
          await setDoc(newDocRef, fieldsToCopy, { merge: true });

          console.log(`Merged fields from ${oldDoc.id} -> ${newDoc.id}`);

          // Delete old doc
          const oldDocRef = doc(db, `sites/${siteID}/episodes`, oldDoc.id);
          await deleteDoc(oldDocRef);
          console.log(`Deleted old doc ${oldDoc.id}`);
        }

        console.log("Episode cleanup completed!");
      } catch (err) {
        console.error("Error fixing episodes:", err);
      }
    }

    return {
      otSiteID,
      fixEpisodes,
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
