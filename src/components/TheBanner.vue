<template>
  <div class="hero-bottom">
    <div class="hero__fortress">
      <a class="hero-link" href="#" @click="$router.push('/')"
        >Podcast Hosting for Yarn Weavers, Big Dreamers, and True Believers</a
      >
    </div>
    <div class="hero__love">
      Made with <span class="material-icons grow">favorite</span> by Oncetold
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

.hero__love {
  flex: 1;
  font-size: 1.3rem;
}

.grow {
  display: inline-block;
  color: var(--color-dark);
  transition: transform 0.2s ease-in-out; /* Move transition here */
}

.grow:hover {
  transform: scale(1.3);
}

.material-icons {
  display: inline-block;
  position: relative;
  margin: 0.2rem 0.2rem;
  color: var(--color-dark);
  cursor: pointer;
}

.material-icons:hover {
  color: var(--color-secondary);
}

/* Increase size of heart icon when hovered on small screens */
@media screen and (max-width: 767px) {
  .hero__love .grow:hover {
    transform: scale(1.3); /* Increase the size of the heart icon */
  }
}
</style>
