<template>
    <section class="blog-article-block block--blog-article">
        <div class="container">
        <header class="blog-article-block__header">
            <div class="blog-article__heading-img">
                <img class="blog-article-logo" src="../assets/images/oncetold-logo-sm.svg" />
            </div>
            <h1 class="blog-article__heading">Blog</h1>
            <p class="blog-article__shortline">Oncetold Insider Thinking</p>
        </header>
        </div>
    </section>
</template>

<script>
export default {

}
</script>

<style>
.blog-article-block {
  display: flex;
  flex-direction: column;
  padding: 3rem 0 5rem;
  /* border: 2px solid red; */
}

.block--blog-article {
  background: var(--color-primary-alt);
  color: var(--color-headings);
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

.blog-article__heading-img {
  flex: 1;
  padding: 0;
}

.blog-article-logo {
  height: 64px;
  margin: 0;
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

  .blog-article-logo {
    height: 96px;
    margin: 0;
    }
}
</style>