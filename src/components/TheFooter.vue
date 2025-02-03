<template>
  <footer class="block footer--dark footer">
    <div class="container grid grid--1x2 footer__sections">
      <!-- Brand section -->
      <div class="footer__brand">
        <img
          class="footer-logo-text logo-primary"
          src="../assets/images/danger-sold-separately-title-500x158.png"
          alt="Danger Sold Separately Logo"
        />
        <p class="footer__copyright">
          Copyright &copy; {{ currentYear }}. Danger Sold Separately and Oncetold.
        </p>
        <p class="footer__version">Website Version: {{ otVersion }}</p>
        <!-- <p class="footer__footnote">ver{{ otVersion }}</p> -->
      </div>

      <!-- Navigation section -->
      <section class="footer__section">
        <div class="footer__navigation">
          <ul class="list">
            <li>
              Directories:
              <a href="https://podcastindex.org/podcast/6933361" target="_blank"
                >Podcast Index</a
              >&nbsp;
              <a
                href="https://lnbeats.com/album/2973941f-0d0e-5b33-8cee-a56647fb878d"
                target="_blank"
                >LN Beats</a
              >&nbsp;
              <a href="https://wavlake.com" target="_blank">WavLake</a>
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
            <li>
              Guides:
              <a href="/boosts">How to Boost</a>&nbsp;
              <a href="https://value4value.info" target="_blank">V4V Lifestyle</a>
            </li>
            <li>Admin: <a href="/fine-print">Fine Print</a></li>
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
