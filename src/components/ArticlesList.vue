<template>
  <section class="articles-items-block">
    <div class="container">
      <div v-if="error">
        <div class="articles-error">
          <div class="articles-error-message">{{ error }}</div>
        </div>
      </div>

      <!-- Grid Start -->
      <div v-if="readyList" class="articles-grid">
        <!-- articles item -- 2-columns -->
        <article class="articles-item" v-for="post in readyList" :key="post.id">
          <div class="articles-item__content">
            <div class="articles-item__content-left">
              <div class="articles-item__thumb">
                <img :src="`/images/${post.img}`" :alt="post.title" />
              </div>
            </div>

            <div class="articles-item__content-right">
              <div class="articles-item-heading">
                <router-link
                  :to="{
                    name: 'ArticlesDetail',
                    params: { id: post.id, slug: post.slug },
                  }"
                >
                  <h2 class="articles-item__heading">{{ post.title }}</h2>
                </router-link>
                <p class="articles-item__summary">{{ post.summary }}</p>
              </div>
            </div>
          </div>
        </article>
      </div>
      <!-- Grid End -->
    </div>
  </section>
</template>

<script>
import { ref, watchEffect } from "vue";
import { db } from "../firebase/config";
import { onSnapshot, collection } from "firebase/firestore";
import TheSpinner from "./TheSpinner.vue";

export default {
  name: "ArticlesList",
  components: { TheSpinner },
  setup() {
    const readyList = ref(null);
    const error = ref(null);

    try {
      const q = collection(db, "posts");
      const unsub = onSnapshot(q, (snapshot) => {
        let results = [];
        snapshot.docs.forEach((doc) => {
          const post = doc.data();
          results.push({ ...post, slug: post.slug, id: doc.id });
        });
        readyList.value = results;
      });

      watchEffect((onInvalidate) => {
        onInvalidate(() => unsub());
      });
    } catch (err) {
      error.value = err.message;
      console.error(error.value);
    }

    return {
      readyList,
      error,
    };
  },
};
</script>

<style>
/* *********************************************** */

.articles-item-block {
  border-top: 2px solid var(--color-light);
  background: var(--color-primary);
  padding: 4rem 0 4rem;
}

.articles-grid {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
  padding: 5rem 0 0 0;
}

.articles-item {
  position: relative;
  display: flex;
  flex-direction: column;
  width: 100%;
  margin-bottom: 5rem;
}

.articles-item img {
  margin: 0;
  width: 100%; /* Set image width to 100% of its container */
  max-width: 100%; /* Ensure image doesn't exceed container width */
  height: auto;
}

.articles-item__thumb {
  position: relative;
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
}

.articles-item__thumb img {
  max-width: 100%;
  height: auto;
}

.articles-item__content {
  display: flex;
  flex-direction: row; /* Stack items horizontally */
  max-width: 100%;
}

.articles-item__content-left {
  flex: 1;
}

.articles-item__content-right {
  flex: 2.5;
  padding: 0 1rem; /* Add space between image and text */
  align-items: flex-start; /* Align items at the start of the container */
}

.articles-item-heading {
  font-weight: 600;
}

.articles-item__heading {
  margin: 0 0 1.5rem 1rem;
  font-weight: 600;
}

.articles-item__summary {
  margin: 0 0 0 1rem;
  font-size: 2.1rem;
  line-height: 3.2rem;
}

/* Adjust the layout for smaller screens */
@media screen and (max-width: 767px) {
  .articles-item__content {
    flex-direction: column; /* Stack items vertically */
  }

  .articles-item__content-left {
    margin-bottom: 1rem; /* Add space between image and text */
    padding: 1rem;
  }

  .articles-item__content-right {
    padding: 0; /* Remove padding for better alignment */
  }

  .articles-item__thumb img {
    width: 100%; /* Set image width to 100% on small screens */
    max-width: none; /* Remove max-width constraint */
  }
}
</style>
