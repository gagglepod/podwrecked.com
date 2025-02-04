<template>
  <div v-if="error">
    <div class="episode-details-error">
      <div class="episode-details-error-message">{{ error }}</div>
    </div>
  </div>

  <div v-if="episode">
    <!-- <section
      class="episode-details-block block--episode-details"
      v-if="episode && episode.image"
      :style="{
        backgroundImage:
          'linear-gradient(rgba(0, 0, 0, 0.25), rgba(0, 0, 0, 0.5)), url(\'/images/' +
          episode.image +
          '\')',
      }"
    > -->
    <section class="episode-details-block block--episode-details">
      <!-- <SineWave /> -->
      <div class="container">
        <header class="episode-details-block__header">
          <p class="episode-details__tags">
            <span
              v-for="tag in episode.tags"
              :key="tag"
              class="episode-details-tag-pill"
              >{{ tag }}</span
            >
          </p>
          <h1 class="episode-details__heading">{{ episode.title }}</h1>
          <h3 class="episode-details__shortline">{{ episode.excerpt }}</h3>
          <p class="episode-details__author">By {{ episode.author }}</p>
          <button class="btn btn--dino-skin btn--stretched" @click="router.back()">
            Back to Episodes List
          </button>
        </header>
      </div>
    </section>

    <section class="episode-details-blob-block">
      <div class="episode-details-container">
        <!-- Adjusted container -->
        <!-- blog-post #1 -->
        <article class="episode-details-blob">
          <div class="episode-details-blob__content">
            <div class="episode-details-blob__body" v-html="episode.body"></div>
          </div>
        </article>
      </div>
    </section>
  </div>
  <div v-else>
    <TheSpinner />
  </div>
</template>

<script>
import { ref, watchEffect } from "vue";
import { db } from "../firebase/config";
import { collection, query, where, getDocs } from "firebase/firestore";
import { useRouter } from "vue-router";
import TheSpinner from "../components/TheSpinner.vue";
import SineWave from "../components/SineWave.vue"; // Import SineWave component

export default {
  name: "EpisodesDetail",
  components: {
    SineWave,
    TheSpinner,
  },
  props: ["slug"],
  setup(props) {
    const episode = ref(null);
    const error = ref(null);
    const isLoading = ref(true);
    const router = useRouter();

    // Retrieve the site ID from environment variables
    const otSiteID = import.meta.env.VITE_SITE_ID;

    watchEffect(async () => {
      try {
        // Reference the episodes sub-collection for the specific site
        const q = query(
          collection(db, `sites/${otSiteID}/episodes`),
          where("slug", "==", props.slug)
        );

        const querySnapshot = await getDocs(q);
        querySnapshot.forEach((doc) => {
          episode.value = { ...doc.data(), id: doc.id };
        });

        // If no episode is found, throw an error
        if (!episode.value) {
          throw new Error("Episode not found");
        }
      } catch (err) {
        error.value = err.message;
        console.error("Error fetching episode:", error.value);
      } finally {
        isLoading.value = false;
      }
    });

    return {
      episode,
      error,
      isLoading,
      router,
    };
  },
};
</script>

<style>
/* *********************************************** */
.episode-details-block {
  display: flex;
  flex-direction: column;
  /* padding: 3rem 0 5rem; */
  padding: 5rem 0; /* Increase padding for more height */
  min-height: 25vh; /* Ensure minimum height */
}

/* Ensure that .block--episode-details has position relative */
.block--episode-details {
  background: var(--color-primary-alt);
  color: var(--color-headings);
  background-repeat: no-repeat;
  background-position: bottom;
  background-size: cover;
  text-align: center;
  position: relative; /* Ensure relative positioning */
  border-bottom: 3px solid var(--color-dino-skin);
}

.episode-details-container {
  max-width: 720px;
  margin: 0 auto;
}

.episode-details-error {
  background: var(--color-dark);
  display: flex;
  flex-direction: row;
  justify-content: center;
  border-radius: 1rem;
  margin-bottom: 0.5rem;
}

.episode-details-error-message {
  font-size: 1.5rem;
  margin: 1rem;
  font-weight: bold;
}

.episode-details__tags {
  margin: 1rem 0;
}

.episode-details-tag-pill {
  display: inline-block;
  margin: 10px 10px 0 0;
  color: var(--color-footer);
  background: var(--color-light);
  padding: 8px;
  border-radius: 20px;
  font-size: 14px;
  min-width: 50px;
}

.episode-details-tag-pill:hover {
  color: var(--color-placeholder);
  background: var(--color-footer);
}

.episode-details-block__header {
  text-align: center;
  margin: 0; /* Remove margin */
}

/* .episode-details-container {
  max-width: 720px;
  margin: 0 auto;
} */

.episode-details__heading {
  margin-top: 1rem;
}

.episode-details__shortline {
  font-size: 3rem;
  color: var(--color-headings);
  letter-spacing: 1px;
  line-height: 5rem;
  margin: 1rem 0 1rem 0;
  word-wrap: break-word; /* Ensure long words wrap */
}

.episode-details__author {
  margin: 1rem 0;
}

.episode-details__heading-img {
  flex: 1;
  padding: 0;
}

p.episode-details__content {
  margin: 1.6rem 0;
}

@media screen and (max-width: 768px) {
  .block--episode-details {
    background-position: top; /* Adjusted background positioning */
  }

  .episode-details__heading {
    font-size: calc(10vw + 1rem); /* Responsive font size adjustment */
    line-height: 6rem; /* Adjusted line height */
  }

  .episode-details__shortline {
    font-size: calc(2.2vw + 1rem); /* Responsive font size adjustment */
    line-height: 2.5rem; /* Adjusted line height */
    margin: 0 1rem; /* Adjust horizontal margin */
  }

  .episode-details__author {
    font-size: calc(1.5vw + 1rem); /* Responsive font size adjustment */
    line-height: 3rem; /* Adjusted line height */
  }

  .episode-details-blob__body {
    margin: 0 1rem; /* Adjust horizontal margin */
  }
}

.episode-details-blob {
  padding: 2rem 0 2rem;
}

.episode-details-blob__body {
  font-size: 2.1rem;
  line-height: 3.2rem;
  margin: 0 2rem 0 2rem;
}

.episode-details-blob__body a {
  color: var(--color-headings);
  transition: color 0.3s;
  text-decoration: underline;
}

.episode-details-blob__body a:hover {
  color: var(--color-placeholder);
  text-decoration: none;
}
</style>
