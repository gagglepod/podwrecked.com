<template>
    <section class="blog-details-block">
      <div class="container">

      <div v-if="error">
        <div class="blog-error">
          <div class="blog-error-message">{{ error }}</div>
        </div>
      </div>

      <div v-if="post">

        <!-- blog-post #1 -->
        <article class="blog-detail">
          <div class="blog-detail__content">
            <p class="blog-detail__tags"> <span v-for="tag in post.tags" :key="tag" class="blog-tag-pill">{{ tag }}</span></p>
            <h2 class="blog-detail__heading">{{ post.title }}</h2>
            <h3 class="blog-detail__subheading">{{ post.subtitle }}</h3>
            <p class="blog-detail__author">By {{ post.author }}</p>
            <p class="blog-detail__body">{{ post.body }}</p>
          </div>
        </article>

      </div>

      </div>
    </section>
</template>

<script>

</script>

<style>
/* *********************************************** */
/* Features */

.blog-detail-block {
  border-top: 2px solid var(--color-light);
  background: var(--color-primary);
  padding: 5rem 0 5rem;
  /* border: 2px solid red; */
}

.blog-detail {
  margin: 8rem;
}

.blog-detail__heading {
  margin: 1rem 0;
}

.blog-detail__subheading {
  margin: 1rem 0;
}

.blog-detail__author {
  margin: 1rem 0;
}

.blog-detail__tags {
  margin: 1rem 0;
}

.blog-detail__body {
  font-size: 2.1rem;
  line-height: 3.2rem;
}

.blog-detail a {
  color: var(--color-headings);
  transition: color 0.3s;
  text-decoration: underline;
}

.blog-detail a:hover {
  color: var(--color-placeholder);
  text-decoration: none;
}

.blog-error {
  background: var(--color-dark); 
  display: flex;
  flex-direction: row;
  justify-content: center;
  border-radius: 1rem;
  margin-bottom: .5rem;
}

.blog-error-message {
  font-size: 1.5rem;
  margin: 1rem;
  font-weight: bold;
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

.blog-bottom {
  border-bottom: 2px solid var(--color-light);
  padding: 1rem;
}
</style>