<template>
  <section class="blog-items-block">
    <div class="container">
      <div v-if="error">
        <div class="blog-error">
          <div class="blog-error-message">{{ error }}</div>
        </div>
      </div>

      <!-- Grid Start -->
      <div v-if="readyList" class="blog-grid">
        <!-- blog item -- 2-columns -->
        <article class="blog-item" v-for="post in readyList" :key="post.id">
          <div class="blog-item__content">
            <div class="blog-item__content-left">
              <div class="blog-item__thumb">
                <img :src="`/images/${post.img}`" :alt="post.title" />
              </div>
            </div>

            <div class="blog-item__content-right">
              <div class="blog-item-heading">
                <router-link
                  :to="{
                    name: 'ArticlesDetail',
                    params: { id: post.id, slug: post.slug },
                  }"
                >
                  <h2 class="blog-item__heading">{{ post.title }}</h2>
                </router-link>
                <p class="blog-item__body">{{ post.summary }}</p>
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

.blog-item-block {
  border-top: 2px solid var(--color-light);
  background: var(--color-primary);
  padding: 4rem 0 4rem;
  /* border: 2px solid red; */
}

.blog-grid {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
  padding: 5rem 0 0 0;
}

.blog-item {
  /* border: 1px solid var(--color-light); */
  position: relative;
  display: flex;
  flex-direction: column;
  width: 100%;
  margin-bottom: 5rem;
}

@media (max-width: 768px) {
  .blog-grid {
    flex-direction: column;
  }

  .blog-item {
    width: 95%;
    margin: 1rem;
  }
}

.blog-item img {
  margin: 0;
  max-width: 100%;
  height: auto;
}

.blog-item__content {
  display: flex;
  flex-direction: row;
}

.blog-item__content-left {
  display: flex;
  max-width: 30%;
}
.blog-item__content-right {
  display: flex;
  flex-direction: row;
  max-width: 70%;
  padding: 0 1rem 0 2rem;
}

.blog-item__thumb {
  position: relative;
  flex: 1;
}

.blog-item__thumb img {
  position: relative;
  /* object-fit: cover; */
  width: 40rem;
}

.blog-item-heading {
  padding: 0;
  flex: 2;
}

.blog-item-body {
  padding: 0;
  flex: 2;
}

.blog-item-author {
  padding: 0;
}

.blog-item-tags {
  padding: 0;
}

.blog-item__heading {
  margin: 0 0 1.5rem 0;
  font-weight: 600;
}

.blog-item__heading:hover {
  color: var(--color-secondary);
  text-decoration: underline;
}

.blog-item__subheading {
  margin: 1rem 0;
}

.blog-item-meta {
  flex: 2;
  display: flex;
  flex-direction: column;
}

.blog-item__author {
  margin: 1rem 0;
}

.blog-item__tags {
  margin: 0;
}

.blog-item__body {
  font-size: 2.1rem;
  line-height: 3.2rem;
}

.blog-item a {
  color: var(--color-headings);
  transition: color 0.3s;
}

.blog-item a:hover {
  color: var(--color-secondary);
}

.blog-error {
  background: var(--color-dark);
  display: flex;
  flex-direction: row;
  justify-content: center;
  border-radius: 1rem;
  margin-bottom: 0.5rem;
}

.blog-error-message {
  font-size: 1.5rem;
  margin: 1rem;
  font-weight: bold;
}

.blog-item-tag-pill {
  display: inline-block;
  margin: 1rem 1rem 0 0;
  color: var(--color-footer);
  background: var(--color-light);
  padding: 0.3rem 0.7rem;
  border-radius: 0.5rem;
  font-size: 1.4rem;
  font-weight: 700;
}

.blog-item-tag-pill:hover {
  color: var(--color-header);
  background: var(--color-secondary);
}

.blog-bottom {
  border-bottom: 2px solid var(--color-light);
  padding: 1rem;
}
</style>
