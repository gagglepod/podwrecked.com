<template>
  <div class="hero-bottom">
    <div class="hero__fortress">
      <a class="hero-link" href="https://oncetold.us" target="_blank"
        >Oncetold | Podcast Hosting for Yarn Weavers, Big Dreamers, and True Believers</a
      >
    </div>
    <div class="hero-love-container">
      <div class="hero__love-left">Made with</div>
      <div class="material-icons">favorite</div>
      <div class="hero__love-right">by Oncetold</div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style>
.hero-link {
  color: var(--color-primary);
  transition: color 0.2s;
}

.hero-link:hover {
  color: var(--color-light);
}

.hero-bottom {
  background: var(--color-bottom);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 2rem 0 2rem;
  border-top: 2px solid var(--color-light);
  text-align: center; /* Center text horizontally */
}

.hero__fortress {
  flex: 1;
  font-size: 1.3rem;
  margin-bottom: 0.7rem;
}

.hero-love-container {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
}

.hero__love {
  flex: 1;
  font-size: 1.3rem;
}

.hero__love-left {
  flex: 1;
  font-size: 1.3rem;
  text-align: right;
  text-wrap: nowrap;
  padding: 0 0.25rem 0 0;
}

.hero__love-right {
  flex: 1;
  font-size: 1.3rem;
  text-align: left;
  text-wrap: nowrap;
  padding: 0 0 0 0.25rem;
}

.material-icons {
  display: inline-block;
  position: relative;
  /* padding: 2rem 0 0 0; */
  margin: 0.1rem;
  color: var(--color-dark);
  cursor: pointer;
  transition: transform 0.2s ease-in-out;
}

.material-icons:hover {
  color: var(--color-secondary);
  transform: scale(1.3);
}
</style>
