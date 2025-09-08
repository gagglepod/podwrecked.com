<template>
  <footer class="block footer--dark footer">
    <div class="container grid grid--1x2 footer__sections">
      <!-- Brand section -->
      <div class="footer__brand">
        <a class="nav__brand" href="/">
          <img
            class="footer-logo-text logo-primary"
            src="../assets/images/podwrecked-title-100x714.png"
            alt="PODWRECKED Logo"
          />
        </a>
        <p class="footer__copyright">
          Copyright &copy; {{ currentYear }}. PODWRECKED and Oncetold.
        </p>
        <p class="footer__version">Website Version: {{ otVersion }}</p>
        <!-- <p class="footer__footnote">ver{{ otVersion }}</p> -->
      </div>

      <!-- Navigation section -->
      <!-- <section class="footer__section">
        <div class="footer__navigation">
          <ul class="list">
            <li>
              Subscribe:
              <a href="https://feeds.oncetold.net/80000018" target="_blank">RSS</a>&nbsp;
              <a href="https://podcastindex.org/podcast/6813508" target="_blank"
                >Podcast Index</a
              >&nbsp;
              <a href="https://pod.link/1504157398" target="_blank">Pod.Link</a>&nbsp;
              <a
                href="https://music.amazon.com/podcasts/eb115cc0-4248-435f-88d7-842d9f34a4be/not-easily-squished"
                target="_blank"
                >Amazon</a
              >
              &nbsp;
              <a
                href="https://podcasts.apple.com/us/podcast/not-easily-squished/id1504157398"
                target="_blank"
                >Apple Podcasts</a
              >
            </li>
            <li>
              Production:
              <a href="/about">Host</a>&nbsp;
              <a href="/extras">Behind the Scenes</a>&nbsp;
            </li>
            <li>
              Hosting: <a href="https://oncetold.com" target="_blank">Oncetold</a>&nbsp;<a
                href="https://oncetold.cloud"
                target="_blank"
                >Oncetold Login</a
              >
            </li>
            <li>
              Apps:
              <a href="https://podcastguru.io" target="_blank">PodcastGuru</a>&nbsp;
              <a href="https://truefans.fm" target="_blank">TrueFans</a>&nbsp;
              <a href="https://podverse.fm" target="_blank">Podverse</a>
            </li>
          </ul>
        </div>
      </section> -->

      <!-- Navigation section -->
      <section class="footer__section">
        <div class="footer__navigation">
          <ul class="list">
            <li>
              Get Tougher:
              <a href="https://podcastworthy.com/" target="_blank">Podcast Worthy</a
              >&nbsp; <a href="https://oncetold.com/learn" target="_blank">Learn</a>&nbsp;
              <a href="https://oncetold.com/book" target="_blank">Get the Book</a>
            </li>
            <li>
              Subscribe:
              <a href="https://feeds.oncetold.net/80000029" target="_blank">RSS</a>&nbsp;
              <a href="https://pod.link/1441480507" target="_blank">Podlink</a>&nbsp;
              <a href="https://podcastindex.org/podcast/74900" target="_blank"
                >Podcast Index</a
              >&nbsp;
              <a href="https://podverse.fm/podcast/0PUbrP4erYU" target="_blank"
                >Podverse</a
              >&nbsp;
            </li>
            <li>
              Listen:

              <a href="https://truefans.fm/podwrecked" target="_blank">TrueFans</a>&nbsp;
              <a
                href="https://podcasts.apple.com/us/podcast/podwrecked/id1441480507"
                target="_blank"
                >Apple Podcasts</a
              >&nbsp;
              <a
                href="https://open.spotify.com/show/6VeboWkLgVdNiHaBvTcK0e"
                target="_blank"
                >Spotify</a
              >&nbsp;
              <a href="https://a.co/d/2htIH88" target="_blank">Amazon Music</a>&nbsp;
            </li>

            <li>
              Extras:
              <a href="/about">About</a>&nbsp;
              <a href="https://kylebondo.com/" target="_blank">Get Help</a>&nbsp;
              <a href="https://noteasilysquished.com/" target="_blank"
                >Not Easily Squished</a
              >&nbsp;
            </li>
            <li>
              Hosting: <a href="https://oncetold.com" target="_blank">Oncetold</a>&nbsp;
              <a href="https://oncetold.cloud" target="_blank">Oncetold Login</a>&nbsp;
              <a href="https://podnews.net/podcast/i30o" target="_blank">Stats</a>
            </li>
          </ul>
        </div>
      </section>
    </div>
  </footer>
</template>

<script>
import moment from "moment";
export default {
  name: "TheFooter",
  components: {},
  props: [],
  setup() {
    // const envVars = import.meta.env;
    // console.log("Environment Variables: ", envVars);

    // const envTest = import.meta.env.VITE_TEST_VAR;
    // console.log("envTest: ", envTest);

    const otVersion = import.meta.env.VITE_VERSION;
    // console.log("otVersion: ", otVersion);

    // console.log("Current Date:", moment().toString());
    // console.log("Current year is:", moment().year());

    let currentYear = moment().year();
    // console.log("currentYear: ", currentYear);

    return {
      otVersion,
      currentYear,
      // envTest,
      // envVars,
    };
  },
};
</script>

<style>
/* *********************************************** */
/* Footer */
.footer {
  background: #232323;
  padding-top: 10rem;
}

.footer--dark {
  background: var(--color-footer);
  color: var(--color-headings);
}

.footer__section {
  padding: 0 0 2rem;
  border-bottom: 1px solid #393939;
}

.footer__heading {
  text-transform: uppercase;
  font-weight: 600;
}

.footer__brand {
  margin-top: 5rem;
  text-align: center;
}

.footer-logo-text {
  width: 350px;
  padding-bottom: 0.25rem;
}

.footer__brand img {
  width: 100%;
  max-width: 350px;
}

.footer__copyright {
  font-size: 2.1rem;
  color: #fff;
  opacity: 0.3;
  margin-bottom: 0;
  padding: 0.25rem 0 0.25rem 0;
}

.footer__version {
  font-size: 2.1rem;
  color: #fff;
  opacity: 0.3;
  margin-bottom: 0;
  padding: 0;
}

.footer__footnote {
  font-size: 1.2rem;
  color: #fff;
  opacity: 0.3;
  margin: 0;
}

.footer a {
  color: var(--color-headings);
  transition: color 0.3s;
  text-decoration: underline;
}

.footer a:hover {
  color: var(--color-placeholder);
  text-decoration: none;
}

.footer__section .list {
  margin: 0;
}

/* Large screen layout */
@media screen and (min-width: 767px) {
  .footer__sections {
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
  }

  .footer .footer__navigation {
    opacity: 1;
    max-height: 100%;
  }

  .footer__brand {
    order: -1; /* Move brand section to the left */
    margin-top: 0; /* Reset top margin */
  }

  .footer .footer__copyright {
    font-size: 1.5rem;
  }

  .footer .footer__version {
    font-size: 1.5rem;
  }

  .footer__section {
    border: 0;
  }

  .footer__heading {
    font-size: 1.6rem;
  }
}

/* Small screen layout */
@media screen and (max-width: 767px) {
  .footer__sections {
    display: flex;
    flex-direction: column; /* Change flex direction to column for small screens */
  }

  .footer__brand {
    margin: 0 0 0.5rem 0; /* Add margin to top for spacing */
  }

  .footer__navigation {
    display: block; /* Show navigation on small screens */
    padding: 1rem 1.5rem 2rem 1.5rem;
  }

  .footer__navigation .list li {
    margin-bottom: 0.5rem; /* Add margin between list items */
  }
}
</style>
