<template>
    <section class="details-block details-block--dark">
        <div class="container">
            <header class="support-details__header">
                <h2 class="support-details__heading"><a href="#" class="support-details__link">Watch tutorials</a>, <a href="#" class="support-details__link">read our help guides</a>, or send us a message using the form below to get detailed help:</h2>  

                <!-- FULL FORM  -->
                <div class="support-details-step">
                    <div class="support-details-form">
                    <div class="support-details__form-group">
                        <div class="support-details__form">

                        <form @submit.prevent="handleSubmit">
                            <h3 class="support-details__labels">1. What do you need help with?</h3>
                            <p class="support-details__instructions">This helps make sure you get the right answer fast.</p>
                            <input 
                            type="text" required 
                            v-model="about"
                            class="support-details-form-field" 
                            placeholder="I need help with..." />

                            <h3 class="support-details__labels">2. What's your question, comment, or issue?</h3>
                            <p class="support-details__instructions">Share all the details. The more we know, the better we can help you.</p>
                            <input 
                            type="text" required 
                            v-model="issue"
                            class="support-details-form-field" 
                            placeholder="This is what happened..." />

                            <h3 class="support-details__labels">3. What's your email address?</h3>
                            <p class="support-details__instructions">This is where we'll get back to you. Double check that it's right.</p>
                            <input 
                            type="email" required 
                            v-model="email"
                            class="support-details-form-field" 
                            placeholder="My email address is..." />                

                            <h3 class="support-details__labels">4. What's your account URL?</h3>
                            <p class="support-details__instructions">Example: https://oncetold.cloud/8675309</p>
                            <input 
                            type="text" required 
                            v-model="account"
                            class="support-details-form-field" 
                            placeholder="My account URL is..." />                

                            <div class="support-details-controls">
                                <button class="btn btn--secondary btn--stretched" type="submit">Submit this support request</button>
                            </div>
                            <p class="support-details__fine">Our current response time is about 30 minutes.</p>
                            <p class="support-details__fine">We're here 24 hours/day Monday through Friday. On weekends, we're here from 9:00 AM to 5:00 PM Central Time.</p>

                        </form>
                        </div>
                    </div>
                    </div>
                    </div>
                    <!-- END FULL FORM -->

            </header>
        </div>
    </section>
</template>

<script>
import { ref } from 'vue'
import { useRouter } from 'vue-router'

export default {

    setup() {

        const about = ref('')
        const issue = ref('')
        const email = ref('')
        const account = ref('')

        const router = useRouter()

        const handleSubmit = async () => {
          console.log('handle submit triggered')

          const ticket = {
              about: about.value,
              issue: issue.value, 
              email: email.value, 
              account: account.value
          }

          await fetch('http://localhost:3000/tickets', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(ticket),
          })

          router.push({ name: 'home' })
          console.log("form submitted")
        }

        return {
            about,
            issue, 
            email, 
            account,
            handleSubmit
        }
    }
}
</script>

<style>
.details-block {
  padding: 1rem 0 1rem;
  /* border: 2px solid red; */
}

.details-block--dark {
  background: var(--color-tertiary);
  color: var(--color-primary-alt);
}

.details-block--dark h1,
.details-block--dark h2,
.details-block--dark h3 {
  color: var(--color-headings);
}

.support-details__header {
  text-align: center;
  margin: 2rem 0 5rem;
}

.support-details__link {
  color: var(--color-header);
}

.support-details__link:hover {
  color: var(--color-light);
  text-decoration: underline;
}

.support-details__heading {
  margin-top: 0;
}

.support-details-step {
  background: var(--color-primary-alt);
  border-radius: 5rem;
  padding: 1rem;
}

.support-details__text {
  text-align: left;
  color: var(--color-headings);
  letter-spacing: .1rem;
  margin-top: 1rem 0 1rem;
  padding: 0 1rem 0 1rem;
}

.support-details__instructions {
  text-align: left;
  font-size: 1.8rem;
  color: var(--color-headings);
  letter-spacing: .1rem;
  margin-top: .5rem 0 .5rem;
  padding-left: 1rem;
}

.support-details__fine {
  font-size: 1.5rem;
  text-align: center;
  font-weight: 400;
  color: var(--color-light);
  margin-bottom: 0;
}

@media screen and (min-width: 768px) {
  .support-details__text {
    font-size: 2.1rem;
    line-height: 3.2rem;
    margin-top: 1rem 0 1rem;
    padding: 0 8rem 0 8rem;
  }
}

.support-details__form {
  flex: 1;
  padding: 0;
}

.support-details__form-group {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
}

.support-details__labels {
  text-align: left;
  padding: 1rem 0 0 1rem;
  margin-bottom: .25rem;
  color: var(--color-headings);
}

.support-details-form-field {
  background: var(--color-footer);
  border-radius: var(--border-radius);
  border: 0;
  color: var(--color-headings);
  font-size: 1.8rem;
  padding: 1rem 2rem;
  text-align: left;
  width: 100%;
}

.support-details-controls {
  flex: 1;
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  padding-top: 2rem;
}

</style>