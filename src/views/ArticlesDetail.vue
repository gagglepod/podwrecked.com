<template>
  <div v-if="error">
    <div class="article-details-error">
      <div class="article-details-error-message">{{ error }}</div>
    </div>
  </div>

  <div v-if="post">
    <section
      class="article-details-block block--article-details"
      v-if="post && post.img"
      :style="{
        backgroundImage:
          'linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.7)), url(\'/images/' +
          post.img +
          '\')',
      }"
    >
      <div class="container">
        <header class="article-details-block__header">
          <p class="article-details__tags">
            <span v-for="tag in post.tags" :key="tag" class="article-details-tag-pill">{{
              tag
            }}</span>
          </p>
          <h1 class="article-details__heading">{{ post.title }}</h1>
          <h3 class="article-details__shortline">{{ post.summary }}</h3>
          <p class="article-details__author">By {{ post.author }}</p>
          <button class="btn btn--secondary btn--stretched" @click="router.back()">
            Back to Article List
          </button>
        </header>
      </div>
    </section>

    <CloudRow />

    <section class="article-details-blob-block">
      <div class="article-details-container">
        <!-- Adjusted container -->
        <!-- blog-post #1 -->
        <article class="article-details-blob">
          <div class="article-details-blob__content">
            <div class="article-details-blob__body" v-html="post.body"></div>
          </div>
        </article>
      </div>
    </section>
  </div>
  <div v-else>
    <TheSpinner />
  </div>

  <TheSpacer />
  <TheBottom />
</template>

<script>
import { ref, watchEffect } from "vue";
import { db } from "../firebase/config";
import { collection, query, where, getDocs } from "firebase/firestore";
import { useRouter } from "vue-router";
import CloudRow from "../components/CloudRow.vue";
import TheSpacer from "../components/TheSpacer.vue";
import TheBottom from "../components/TheBottom.vue";
import TheSpinner from "../components/TheSpinner.vue";

export default {
  name: "ArticlesDetail",
  components: {
    CloudRow,
    TheSpacer,
    TheBottom,
    TheSpinner,
  },
  props: ["slug"],
  setup(props) {
    const post = ref(null);
    const error = ref(null);
    const isLoading = ref(true);
    const router = useRouter();

    watchEffect(async () => {
      try {
        const q = query(collection(db, "posts"), where("slug", "==", props.slug));
        const querySnapshot = await getDocs(q);
        querySnapshot.forEach((doc) => {
          post.value = { ...doc.data(), id: doc.id };
        });

        if (!post.value) {
          throw new Error("Post not found");
        }
      } catch (err) {
        error.value = err.message;
        console.error(error.value);
      } finally {
        isLoading.value = false;
      }
    });

    return {
      post,
      error,
      isLoading,
      router,
    };
  },
};
</script>

<style>
/* *********************************************** */
.article-details-block {
  display: flex;
  flex-direction: column;
  padding: 3rem 0 5rem;
}

.block--article-details {
  background: var(--color-primary-alt);
  color: var(--color-headings);
  background-repeat: no-repeat;
  background-position: center; /* Adjusted background positioning */
  background-size: cover;
  text-align: center;
}

.article-details-error {
  background: var(--color-dark);
  display: flex;
  flex-direction: row;
  justify-content: center;
  border-radius: 1rem;
  margin-bottom: 0.5rem;
}

.article-details-error-message {
  font-size: 1.5rem;
  margin: 1rem;
  font-weight: bold;
}

.article-details__tags {
  margin: 1rem 0;
}

.article-details-tag-pill {
  display: inline-block;
  margin: 10px 10px 0 0;
  color: var(--color-footer);
  background: var(--color-light);
  padding: 8px;
  border-radius: 20px;
  font-size: 14px;
  min-width: 50px;
}

.article-details-tag-pill:hover {
  color: var(--color-placeholder);
  background: var(--color-footer);
}

.article-details-block__header {
  text-align: center;
  margin: 0; /* Remove margin */
}

.article-details-container {
  /* Adjusted container */
  max-width: 720px;
  margin: 0 auto;
}

.article-details__heading {
  margin-top: 0;
}

.article-details__shortline {
  font-size: 3rem;
  color: var(--color-headings);
  letter-spacing: 1px;
  line-height: 5rem;
  margin: 1rem 0 1rem 0;
  word-wrap: break-word; /* Ensure long words wrap */
}

.article-details__author {
  margin: 1rem 0;
}

.article-details__heading-img {
  flex: 1;
  padding: 0;
}

p.article-details__content {
  margin: 1.6rem 0;
}

@media screen and (max-width: 768px) {
  .block--article-details {
    background-position: top; /* Adjusted background positioning */
  }

  .article-details__heading {
    font-size: calc(10vw + 1rem); /* Responsive font size adjustment */
    line-height: 6rem; /* Adjusted line height */
  }

  .article-details__shortline {
    font-size: calc(2.2vw + 1rem); /* Responsive font size adjustment */
    line-height: 2.5rem; /* Adjusted line height */
    margin: 0 1rem; /* Adjust horizontal margin */
  }

  .article-details__author {
    font-size: calc(1.5vw + 1rem); /* Responsive font size adjustment */
    line-height: 3rem; /* Adjusted line height */
  }

  .article-details-blob__body {
    margin: 0 1rem; /* Adjust horizontal margin */
  }
}

.article-details-blob {
  padding: 2rem 0 2rem;
}

.article-details-blob__body {
  font-size: 2.1rem;
  line-height: 3.2rem;
  margin: 0 2rem 0 2rem;
}

.article-details-blob__body a {
  color: var(--color-headings);
  transition: color 0.3s;
  text-decoration: underline;
}

.article-details-blob__body a:hover {
  color: var(--color-placeholder);
  text-decoration: none;
}
</style>
