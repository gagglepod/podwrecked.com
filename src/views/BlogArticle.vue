<template>
  <div v-if="error">
    <div class="blog-error">
      <div class="blog-error-message">{{ error }}</div>
    </div>
  </div>

  <div v-if="post">
    <!-- <section class="blog-article-block block--blog-article" :style="{ backgroundImage: 'url(\'' + require('@/assets/images/books-1280x720.jpg') + '\')' }"> -->

    <section
      class="blog-article-block block--blog-article"
      :style="{
        backgroundImage:
          'linear-gradient( rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5) ), url(\'' +
          require(`@/assets/images/${post.img}`) +
          '\')',
      }"
    >
      <div class="container">
        <header class="blog-article-block__header">
          <p class="blog-article__tags">
            <span v-for="tag in post.tags" :key="tag" class="blog-tag-pill">{{
              tag
            }}</span>
          </p>
          <h1 class="blog-article__heading">{{ post.title }}</h1>
          <p class="blog-article__shortline">{{ post.subtitle }}</p>
          <p class="blog-article__author">By {{ post.author }}</p>
          <button
            class="btn btn--secondary btn--stretched"
            @click="$router.push('/blog')"
          >
            Back to Article List
          </button>
        </header>
      </div>
    </section>

    <CloudRow />

    <section class="blog-blob-block">
      <div class="container">
        <!-- blog-post #1 -->
        <article class="blog-blob">
          <div class="blog-blob__content">
            <div class="blog-blob__body" v-html="post.body"></div>
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
import { ref } from "vue";
import { db } from "../firebase/config";
import { useRouter } from "vue-router";
import CloudRow from "../components/CloudRow.vue";
import TheSpacer from "../components/TheSpacer.vue";
import TheBottom from "../components/TheBottom.vue";
import TheSpinner from "../components/TheSpinner.vue";

export default {
  name: "BlogArticle",
  components: {
    CloudRow,
    TheSpacer,
    TheBottom,
    TheSpinner,
  },
  props: ["id"],
  setup(props) {
    const posts = ref([]);
    const error = ref(null);
    const router = useRouter();
    const load = async () => {
      try {
        // simulate delay
        // await new Promise((resolve) => {
        //   setTimeout(resolve, 2000);
        // });

        // DB JSON - LOCAL
        // let data = await fetch("http://localhost:3000/posts");
        // if (!data.ok) {
        //   throw Error("No Posts Available");
        // }
        // posts.value = await data.json();

        // DB FIRESTORE - CLOUD
        const res = await db.collection("posts").get();
        // console.log(res.docs);

        posts.value = res.docs.map((doc) => {
          // console.log(doc.data());
          return { ...doc.data(), id: doc.id };
        });
      } catch (err) {
        error.value = err.message;
        console.log(error.value);
      }
    };

    load();

    return {
      posts,
      error,
    };
  },
};
</script>

<style>
/* *********************************************** */
.blog-article-block {
  display: flex;
  flex-direction: column;
  padding: 3rem 0 5rem;
  /* border: 2px solid red; */
}

.block--blog-article {
  background: var(--color-primary-alt);
  color: var(--color-headings);
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  text-align: center;
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

.blog-article__tags {
  margin: 1rem 0;
}

.blog-tag-pill {
  display: inline-block;
  margin: 10px 10px 0 0;
  color: var(--color-footer);
  background: var(--color-light);
  padding: 8px;
  border-radius: 20px;
  font-size: 14px;
}

.blog-tag-pill:hover {
  color: var(--color-placeholder);
  background: var(--color-footer);
}

.blog-article-block__header {
  text-align: center;
  margin: 2rem 0 2rem;
}

.blog-article__heading {
  margin-top: 0;
}

.blog-article__shortline {
  font-size: 2rem;
  color: var(--color-headings);
  letter-spacing: 1px;
  margin-top: 1rem 0 1rem;
}

.blog-article__author {
  margin: 1rem 0;
}

.blog-article__heading-img {
  flex: 1;
  padding: 0;
}

@media screen and (min-width: 768px) {
  .blog-article-block {
    padding-top: 0;
  }

  .blog-article__heading {
    padding: 0 10rem 0 10rem;
  }

  .blog-article__shortline {
    padding: 2rem 10rem 0 10rem;
  }
}

.blog-blob {
  padding: 2rem 0 2rem;
}

.blog-blob__body {
  font-size: 2.1rem;
  line-height: 3.2rem;
  margin: 0 2rem 0 2rem;
}

.blog-blob__body a {
  color: var(--color-headings);
  transition: color 0.3s;
  text-decoration: underline;
}

.blog-blob__body a:hover {
  color: var(--color-placeholder);
  text-decoration: none;
}
</style>
