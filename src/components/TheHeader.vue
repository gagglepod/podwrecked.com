<template>
  <header>
    <nav class="nav" :class="[isActive ? 'collapsible--expanded' : 'collapsible']">
      <a class="nav__brand" href="/"
        ><img
          class="logo-text logo-primary"
          src="../assets/images/oncetold-logo-text.svg"
          alt="Oncetold Logo"
      /></a>

      <svg class="icon icon--white nav__toggler" @click="toggleMenu">
        <use href="../assets/images/sprite.svg#menu"></use>
      </svg>
      <ul class="list nav__list collapsible__content">
        <li class="nav__item"><a href="/how-it-works">How it Works</a></li>
        <li class="nav__item"><a href="/pricing">Pricing</a></li>
        <li class="nav__item"><a href="/learn">Learn</a></li>
        <li class="nav__item"><a href="/support">Support</a></li>
        <li class="nav__item">
          <a href="https://oncetold.cloud/login" target="_blank">Sign In</a>
        </li>
        <li class="nav__item">
          <a href="https://oncetold.cloud" target="_blank">Try it FREE</a>
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
  width: 150px;
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
  justify-content: space-between;
  flex-wrap: wrap;
  padding: 0.25rem 1rem 0.5rem;
  align-items: center;
}

.nav__list {
  width: 100%;
  margin: 0;
}

.nav__item {
  padding: 0.5rem 2rem;
  border-bottom: 1px solid #222;
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
  transform: translateY(5px);
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
}
</style>
