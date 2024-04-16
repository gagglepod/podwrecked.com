<template>
  <footer class="block footer--dark footer">
    <div class="container grid grid--1x2 footer__sections">
      <section class="footer__section">
        <div class="collapsible__content">
          <ul class="list">
            <li>
              Oncetold Platform:
              <a href="https://oncetold.cloud" target="_blank">Oncetold Cloud</a>
            </li>
            <li>
              Company: <a href="/about">About Us</a>
              <a href="https://noteasilysquished.com" target="_blank">Podcast</a>&nbsp;
              <a href="/blog">Blog</a>&nbsp;
              <a href="/how-it-works">How It Works</a>&nbsp;
              <a href="/pricing">Pricing</a>&nbsp; <a href="/support">Support</a>
            </li>
            <li>
              Guides:
              <a href="https://www.slideshare.net/KyleBondo/presentations" target="_blank"
                >Meetup Talks</a
              >&nbsp;
              <a
                href="https://www.youtube.com/channel/UCK78Ub6I3JY-erwevl1EgTg"
                target="_blank"
                >Tutorial Videos
              </a>
            </li>
            <li>
              Fine Print: <a href="/rights">Customer Rights</a>&nbsp;
              <a href="/terms">Privacy & Terms</a>&nbsp;
              <a href="/uptime">Uptime</a>
            </li>
          </ul>
        </div>
      </section>
      <div class="footer__brand">
        <img
          class="logo-text logo-primary"
          src="../assets/images/oncetold-logo-text.svg"
          alt="Oncetold Logo"
        />
        <p class="footer__copyright">
          Copyright &copy; {{ currentYear }}. Oncetold. Tell Your Story.
        </p>
        <p class="footer__footnote">Oncetold Company Website ver{{ otVersion }}</p>
      </div>
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

@media screen and (min-width: 768px) {
  .footer__sections {
    grid-template-columns: repeat(auto-fit, minmax(10rem, 1fr));
  }

  .footer .collapsible__chevron {
    display: none;
  }

  .footer .collapsible__content {
    opacity: 1;
    max-height: 100%;
  }

  .footer__brand {
    order: -1;
    margin-top: 1rem;
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
</style>
