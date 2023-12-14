<template>
    <section class="about-details-block">
      <div class="container">

      <!-- rights-detail #1 -->
      <article class="about-detail">
        <div class="about-detail__content">
          <h2 class="about-detail__heading">Article I - Freedom of Speech </h2>
          <p class="about-detail__info">OnceTold believes in creating an podcasting environment in which there is an open marketplace of ideas is the only way forward towards greater freedom. We are commited to building a platform of Free Speach exercised through the creation, publication, and sharing of podcasts. This includes the right to freedom of opinion and expression, hold opinions without interference, and to seek, receive and impart information and ideas through podcasting.</p>
        </div>
      </article>

      <!-- rights-detail #2 -->
      <article class="about-detail">
        <div class="about-detail__content">
          <h2 class="about-detail__heading">Article II - Account Security</h2>
          <p class="about-detail__info">Oncetold is dedicated to maintaining your account's security on our systems. We've also invested in monitoring tools to alert us to any nefarious activity against our domains.</p>
        </div>
      </article>        

      <!-- rights-detail #3 -->
      <article class="about-detail">
        <div class="about-detail__content">
          <h2 class="about-detail__heading">Article III - Privacy First </h2>
          <p class="about-detail__info">Too many software companies are downright hostile towards the privacy of their customers. Their business often depends on violating it! Not here. We take privacy seriously with our products, and we actively push the industry forward on privacy matters.</p>
        </div>
      </article>      

      <!-- rights-detail #4 -->
      <article class="about-detail">
        <div class="about-detail__content">
          <h2 class="about-detail__heading">Article IV - Fast and Friendly Support </h2>
          <p class="about-detail__info">Oncetold's support team is dedicated to answering emails you. This is a group of knowledgeable folks who want to help you get the most out of our product. Aside from a few days around the holidays, you'll receive same-day service 7 days a week.</p>
        </div>
      </article>

      <!-- rights-detail #5 -->
      <article class="about-detail">
        <div class="about-detail__content">
          <h2 class="about-detail__heading">Article V - Transparent Rules</h2>
          <p class="about-detail__info">Oncetold understand that there is a distinction between free speech and harassment or incitement to commit acts of violence, but we will not turn off any customer who is simply expressing their opinion on a topic or criticizing government policy in a podcast. We do not see this as an act of violence. We will, however, enforce the removal of content based on a few narrow categories of speech. These categories include obscenity, child pornography, defamatory speech, false advertising, true threats, and fighting words.</p>
        </div>
      </article>

      <!-- rights-detail #6 -->
      <article class="about-detail">
        <div class="about-detail__content">
          <h2 class="about-detail__heading">Article VI - Control Your Data </h2>
          <p class="about-detail__info">It's your podcast! You should hold on to it if you decide to leave Oncetold. We let you download every data point about your podcast episodes including statistics. We don't hide the ball when it comes to your podcast.</p>
        </div>
      </article>

      <!-- rights-detail #7 -->
      <article class="about-detail">
        <div class="about-detail__content">
          <h2 class="about-detail__heading">Article VII - Leave Painlessly </h2>
          <p class="about-detail__info">We know there are other media hosts out there that you can use, and one of them might be a better fit for you. That's OK. We won't hassle you or make it difficult for you to leave Oncetold. We'll guide you in how to export your podcast, provide you with redirect support, and let you cancel on your own when you're ready.</p>
        </div>
      </article>

      </div>
    </section>
</template>

<script>
export default {

}
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