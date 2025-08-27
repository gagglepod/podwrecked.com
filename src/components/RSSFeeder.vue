<template>
  <section class="splash-block splash-block--dark">
    <div class="container">
      <header class="splash-summary__header">
        <h2>RSS Feeder</h2>
        <input v-model="rssUrl" placeholder="Enter RSS Feed URL" />
        <button @click="importFeed">Import Feed</button>
      </header>
    </div>
  </section>
</template>

<script>
import { ref } from "vue";
import { db } from "../firebase/config";
import { collection, addDoc, serverTimestamp } from "firebase/firestore";

export default {
  name: "RSSFeeder",
  setup() {
    const rssUrl = ref("");
    const otSiteID = import.meta.env.VITE_SITE_ID;
    console.log("otSiteID:", otSiteID); // Check if the site ID is loading correctly

    const importFeed = async () => {
      if (!rssUrl.value) {
        alert("Please enter a valid RSS feed URL.");
        return;
      }

      try {
        await addDoc(collection(db, "feeders"), {
          url: rssUrl.value,
          siteID: otSiteID,
          createdAt: serverTimestamp(),
        });

        console.log("Feed request submitted to Cloud Function.");
        rssUrl.value = "";
      } catch (err) {
        console.error("Error submitting feed request:", err);
      }
    };

    return {
      rssUrl,
      importFeed,
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
