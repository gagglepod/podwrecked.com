<template>
  <div v-if="error">
    <div class="episode-details-error">
      <div class="episode-details-error-message">{{ error }}</div>
    </div>
  </div>

  <div v-if="episode">
    <section class="episode-details-blob-block">
      <div class="episode-details-container">
        <!-- Adjusted container -->
        <!-- header with tags -->
        <header class="episode-details-block__header">
          <p class="episode-details__tags">
            <!-- Only show season pill if this is a Serial podcast -->
            <span
              v-if="episode.epType === 'serial' && episode.season"
              class="episode-details-tag-pill"
            >
              Season {{ episode.season }}
            </span>

            <span v-for="tag in episode.tags" :key="tag" class="episode-details-tag-pill">
              {{ tag }}
            </span>
          </p>
          <a href="https://podcastindex.org/podcast/6014487" target="_blank">
            <picture class="episode-details__image">
              <img :src="getImageUrl(episode.thumb)" :alt="episode.title" />
            </picture>
          </a>
        </header>
        <!-- blog-post #1 -->

        <article class="episode-details-blob">
          <div class="episode-details-blob__content">
            <h3 class="episode-details__listen">🎧 LISTEN NOW</h3>
            <div class="episode-details-audio">
              <audio
                class="episode-details-player"
                id="epPlayer"
                controls
                type="audio/mpeg"
                :src="episode.media"
              >
                Your browser does not support the audio element.
              </audio>
              <h3 class="episode-details__follow">
                <a href="https://pod.link/1504157398" target="_blank">Podlink</a>&nbsp;
                <a href="https://podcastindex.org/podcast/6014487" target="_blank"
                  >Podcast Index</a
                >&nbsp;
                <a
                  href="https://music.amazon.com/podcasts/eb115cc0-4248-435f-88d7-842d9f34a4be/not-easily-squished"
                  target="_blank"
                  >Amazon</a
                >&nbsp;
                <a
                  href="https://podcasts.apple.com/us/podcast/not-easily-squished/id1504157398"
                  target="_blank"
                  >Apple Podcasts</a
                >&nbsp;
              </h3>
            </div>
            <h2 class="episode-details__title">{{ episode.title }}</h2>
            <!-- <p>{{ episode.body }}</p> -->
            <div class="episode-details-blob__body" v-html="episode.body"></div>
          </div>
        </article>

        <footer class="episode-details-block__footer">
          <button class="btn btn--dino-sky btn--stretched" @click="router.back()">
            Back to Episodes List
          </button>
        </footer>
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

export default {
  name: "EpisodesDetail",
  components: {
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

    // Function to resolve the correct image path
    const getImageUrl = (fileName) => {
      return new URL(`../assets/images/${fileName}`, import.meta.url).href;
    };

    return {
      episode,
      error,
      isLoading,
      router,
      getImageUrl, // Ensure this function is returned so it can be used in the template
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
  max-width: 800px;
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
  cursor: pointer;
}

.episode-details-tag-pill {
  display: inline-block;
  margin: 10px 10px 0 0;
  color: var(--color-headings);
  background: var(--color-dino-sky);
  padding: 1rem 2rem;
  border-radius: 1rem;
  font-size: 2rem;
  min-width: 6rem;
  font-weight: 600;
}

.episode-details-tag-pill:hover {
  color: var(--color-headings);
  background: var(--color-dino-skin);
}

.episode-details-block__header {
  text-align: center;
  margin: 0; /* Remove margin */
}

.episode-details__heading {
  margin-top: 1rem;
}

.episode-details__title {
  text-align: center;
  margin-top: 1rem;
}

.episode-details__extras {
  /* text-align: center; */
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

.episode-details__image {
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 2rem;
  padding: 1rem 0 0 0;
}

.episode-details__image > img {
  width: 300px;
  height: 300px;
  object-fit: cover;
  border-radius: 2rem;
}

h3.episode-details__listen {
  color: #fff;
  text-align: center;
}

.episode-details__listen a {
  color: var(--color-headings);
  transition: color 0.3s;
  text-decoration: underline;
}

.episode-details__listen a:hover {
  color: var(--color-placeholder);
  text-decoration: none;
}

h3.episode-details__follow {
  color: #fff;
  text-align: center;
}

.episode-details__follow a {
  color: var(--color-headings);
  transition: color 0.3s;
  text-decoration: underline;
}

.episode-details__follow a:hover {
  color: var(--color-placeholder);
  text-decoration: none;
}

p.episode-details__content {
  margin: 1.6rem 0;
}

.episode-details-blob {
  padding: 0 2rem 2rem;
}

.episode-details-blob a {
  color: var(--color-headings);
  transition: color 0.3s;
  text-decoration: underline;
  font-size: 2.1rem;
}

.episode-details-blob a:hover {
  color: var(--color-placeholder);
  transition: color 0.3s;
  text-decoration: none;
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

.episode-details-audio {
  width: 100%;
  padding: 2rem 4rem 1rem;
}

.episode-details-player {
  max-width: 100%;
  /* margin: 1rem 4rem; */
}

#epPlayer {
  width: 100%;
}

.episode-details-block__footer {
  text-align: center;
  margin: 0 2rem 1rem;
}

@media screen and (min-width: 768px) {
  .episode-details__image > img {
    width: 100%;
    height: 100%;
    padding: 0;
    /* margin-top: 1rem; */
    border-radius: 2rem;
  }

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

  .episode-details-blob {
    margin: 0;
  }

  .episode-details-blob__body {
    margin: 0 1rem; /* Adjust horizontal margin */
  }

  /* .episode-details-player {
    max-width: 60rem;
    margin: 1rem 4rem;
  } */
}
</style>
