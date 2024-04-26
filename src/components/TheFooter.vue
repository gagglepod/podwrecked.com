<template>
  <footer class="block footer--dark footer">
    <div class="container grid grid--1x2 footer__sections">
      <!-- Brand section -->
      <div class="footer__brand">
        <img
          class="logo-text logo-primary"
          src="../assets/images/oncetold-logo-text.svg"
          alt="Oncetold Logo"
        />
        <p class="footer__copyright">
          Copyright &copy; {{ currentYear }}. Oncetold. Tell Your Story. Website v{{
            otVersion
          }}.
        </p>
        <!-- <p class="footer__footnote">ver{{ otVersion }}</p> -->
      </div>

      <!-- Navigation section -->
      <section class="footer__section">
        <div class="footer__navigation">
          <ul class="list">
            <li>
              Oncetold Platform:
              <a href="https://oncetold.cloud" target="_blank">Oncetold Cloud</a>&nbsp;
              <a href="/uptime">Uptime</a>
            </li>
            <li>
              Company: <a href="/about">About Us</a>&nbsp;
              <a href="/how-it-works">How It Works</a>&nbsp;
              <a href="/pricing">Pricing</a>&nbsp; <a href="/learn">Learn</a>&nbsp;
              <a href="/support">Support</a>
            </li>
            <li>
              Guides:
              <a href="https://noteasilysquished.com" target="_blank">Podcast</a>&nbsp;
              <a href="/articles">Articles</a>&nbsp;
              <a href="/learn/courses">Courses</a>&nbsp;
              <a href="/learn/videos">Videos</a>&nbsp; <a href="/lab">Lab</a>&nbsp;
              <a href="https://www.slideshare.net/KyleBondo/presentations" target="_blank"
                >Slides</a
              >&nbsp;
            </li>
            <li>
              Fine Print: <a href="/rights">Customer Rights</a>&nbsp;
              <a href="/terms">Privacy & Terms</a>
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
    const otVersion = import.meta.env.VITE_VERSION;

    // console.log("Current Date:", moment().toString());
    // console.log("Current year is:", moment().year());

    let currentYear = moment().year();

    return {
      otVersion,
      currentYear,
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
  color: var(--color-primary-alt);
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

.footer__brand img {
  width: 100%;
  max-width: 230px;
}

.footer__copyright {
  font-size: 2.1rem;
  color: #fff;
  opacity: 0.3;
  margin-bottom: 0;
  padding: 1rem;
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
