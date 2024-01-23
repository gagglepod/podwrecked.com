<template>
  <section class="about-details-block">
    <div class="container">
      <!-- about-details #0 -->
      <article class="about-detail">
        <div class="about-detail__content">
          <h2 class="about-detail__heading">
            Talesmithing: Crafting Engaging Podcast Narratives
          </h2>
          <p class="about-detail__info">
            <a href="https://oncetold.cloud/" target="_blank"
              >Here are my Podfest 2024 Slides [PDF]</a
            >
          </p>
        </div>
      </article>

      <!-- about-detail #1 -->
      <article class="about-detail">
        <div class="about-detail__content">
          <h2 class="about-detail__heading">Oncetold Podcast Hosting</h2>
          <p class="about-detail__info">
            <a href="https://oncetold.cloud/" target="_blank"
              >Here is the link to Oncetold Hosting Waitlist</a
            >
          </p>
        </div>
      </article>

      <!-- about-details #2 -->
      <article class="about-detail">
        <div class="about-detail__content">
          <h2 class="about-detail__heading">Podcasts for podcasters</h2>
          <p class="about-detail__info">
            I've built sharing into the DNA of Onctold. I've given hundreds of talks that
            I've packed into lessons that you can find (along with my co-host Tim Brien)
            on <a href="https://podwrecked.com" target="_blank">PODWRECKED</a> that
            focused on better ways to create podcasts. By producing a podcast ABOUT
            podcasting I've learned how to eat my own dog food, experience the struggles
            you will face as a podcaster first hand, and teach you how to survive to tell
            the tale.
          </p>
          <p class="about-detail__info">
            Meanwhile, the best design advice I ever got came from a great thinker: Sir
            Jonathan Ive from Apple. He told me,
            <em
              >"[I]deas ultimately can be so powerful, they begin as fragile, barely
              formed thoughts, so easily missed, so easily compromised, so easily just
              squished."</em
            >
            He taught me that ideas can be very fragile and we must live in between the
            dopey ideas and believing in bold, crazy, magnificent ideas. This is why I
            believe podcasting is a special environment for nurturing and incubating those
            ideas. That is why I started a podcast about Podcast Design Principles called
            <a href="https://noteasilysquished.com/" target="_blank"
              >Not Easily Squished. Have a listen.</a
            >
          </p>
        </div>
      </article>

      <!-- about-details #3 -->
      <article class="about-detail">
        <div class="about-detail__content">
          <h2 class="about-detail__heading">Podcast Experiments</h2>
          <p class="about-detail__info">
            If you're into history,then take a listen to my award winning American Civil
            War podcast
            <a href="https://waryankee.com" target="_blank">War Yankee - Overland</a> to
            learn about incorporating audio soundscapes into narrative, non-fiction
            storytelling.
          </p>
          <p class="about-detail__info">
            If you are feeling a bit adventureous then maybe you're in the mood for an
            audio drama! I did a daily (Yes, DAILY!) audio drama for National Podcast Post
            Month (NaPodPoMo) called
            <a href="https://pausefordramaticeffect.com" target="_blank"
              >PAUSE for Dramatic Effect. Enjoy the show!</a
            >.
          </p>
        </div>
      </article>

      <!-- about-detail #4 -->
      <article class="about-detail">
        <div class="about-detail__content">
          <h2 class="about-detail__heading">Making a dent</h2>
          <p class="about-detail__info">
            I'm all in on podcasting and hoping to make a small dent in your podcasting
            universe. If I can help one podcaster reach one listener it will all have been
            worth it.
          </p>
          <p class="about-detail__info">
            I spend several years building Gagglepod as a podcasting education company. I
            still have several
            <a href="https://www.youtube.com/@gagglepod3628" target="_blank"
              >podcasting design videos up on YouTube that are perfect for new
              podcasters</a
            >. Please give a Like and Subscribe to any of them you watch! When Oncetold
            launches it's podcasting education channel I will be sure to give you advanced
            notice!
          </p>
        </div>
      </article>

      <!-- about-close -->
      <article class="about-detail">
        <div class="about-detail__content">
          <h2 class="about-detail__heading">Always at your service</h2>
          <p class="about-detail__info">
            If you have a general question for us, just drop me an email at
            <a href="emailto:oncetold.cloud@gmail.com">oncetold.cloud@gmail.com</a>.
          </p>
          <p class="about-detail__info">
            You can follow me (Kyle Bondo) on
            <a href="https://www.linkedin.com/in/kylebondo/" target="_blank">Linkedin</a>
            or read my
            <a
              href="https://www.linkedin.com/company/89194872/admin/feed/posts/"
              target="_blank"
              >Oncetold articles on LinkedIn</a
            >.
          </p>
          <h2 class="about-detail__heading">Thank you for visiting!</h2>
        </div>
      </article>
    </div>
  </section>
</template>

<script>
export default {};
</script>

<style>
/* *********************************************** */
/* Features */

.about-detail-block {
  border-top: 2px solid var(--color-light);
  background: var(--color-primary);
  padding: 5rem 0 5rem;
  /* border: 2px solid red; */
}

.about-detail {
  margin: 8rem;
}

.about-detail__heading {
  margin: 1rem 0;
  line-height: 5rem;
}

.about-detail__info {
  font-size: 2.1rem;
  line-height: 3.2rem;
}

.about-detail a {
  color: var(--color-headings);
  transition: color 0.3s;
  text-decoration: underline;
}

.about-detail a:hover {
  color: var(--color-placeholder);
  text-decoration: none;
}
</style>
