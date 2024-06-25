<template>
  <header>
    <nav class="nav" :class="[isActive ? 'collapsible--expanded' : 'collapsible']">
      <svg class="icon icon--white nav__toggler" @click="toggleMenu">
        <use href="../assets/images/sprite.svg#menu"></use>
      </svg>
      <ul class="list nav__list collapsible__content">
        <li class="nav__item">
          <a href="/">Home</a>
        </li>
        <li class="nav__item"><a href="/episodes">Episodes</a></li>
        <li class="nav__item">
          <a href="/boosts">How to Boost</a>
        </li>
      </ul>
      <a class="nav__brand" href="/" :class="{ 'hidden-mobile': isActive }">
        <img
          class="logo-text logo-primary"
          src="../assets/images/flowgnar-logo-header.svg"
          alt="Flowgnar Logo"
        />
      </a>
      <ul class="list nav__list collapsible__content">
        <li class="nav__item"><a href="/about">About</a></li>
        <li class="nav__item">
          <a href="https://podcastindex.org/podcast/6933361" target="_blank">Subscribe</a>
        </li>
        <li class="nav__item">
          <a href="https://oncetold.cloud" target="_blank">Oncetold</a>
        </li>
      </ul>
    </nav>
  </header>
</template>

<script>
import { ref } from "vue";

export default {
  setup() {
    const isActive = ref(false);

    const toggleMenu = () => {
      isActive.value = !isActive.value;
    };

    return {
      isActive,
      toggleMenu,
    };
  },
};
</script>

<style>
/* ******************************************************************* */
/* logo */

.logo {
  width: 40px;
  height: 40px;
}

.logo-text {
  width: 300px;
  padding-bottom: 0.25rem;
}

.logo--primary {
  fill: var(--color-headings);
}

.logo-container {
  background: var(--color-background);
  width: 64px;
  height: 64px;
  border-radius: 100%;
  display: inline-flex;
  justify-content: center;
  align-items: center;
}

/* *********************************************** */
/* Collapsibles */

.collapsible__header {
  display: flex;
  justify-content: space-between;
}

.collapsible__heading {
  margin-top: 0;
  font-size: 3rem;
}

.collapsible__chevron {
  transform: rotate(-90deg);
  transition: transform 0.3s;
}

.collapsible__content {
  max-height: 0;
  overflow: hidden;
  opacity: 0;
  transition: all 0.3s;
}

.collapsible--expanded .collapsible__chevron {
  transform: rotate(0);
}

.collapsible--expanded .collapsible__content {
  max-height: 100vh;
  opacity: 1;
}

/* *********************************************** */
/* Navigation */

.nav {
  background: var(--color-background);
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  padding: 0.25rem 1rem 0.5rem;
}

.nav__list {
  width: 100%;
  margin: 0;
  text-align: center;
}

.nav__item {
  padding: 0.5rem 2rem;
  border-bottom: 1px solid #222;
  font-size: 1.8rem;
  text-transform: uppercase;
}

.nav__item > a {
  color: #d2d0db;
  transition-property: color 0.3s;
}

.nav__item > a:hover {
  color: #fff;
}

.nav__toggler {
  opacity: 0.5;
}

.nav.collapsible--expanded .nav__toggler {
  opacity: 1;
  box-shadow: 0 0 0 3px #666;
  border-radius: 5px;
  transition: box-shadow 0.15s;
  cursor: pointer;
}

.nav__brand {
  margin: 0 2rem;
}

.hidden-mobile {
  display: none;
}

@media screen and (min-width: 768px) {
  .nav__toggler {
    display: none;
  }

  .nav__list {
    width: auto;
    display: flex;
    font-size: 1.6rem;
    max-height: 100%;
    opacity: 1;
  }

  .nav__item {
    border: 0;
  }

  .nav__brand {
    display: block;
  }
}
</style>
