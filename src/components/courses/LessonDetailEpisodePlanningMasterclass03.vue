<template>
  <section class="lesson-detail-block">
    <div class="lesson-detail-container">
      <!-- Learn the Process -->
      <article class="lesson-detail">
        <div class="lesson-detail__intro">
          <picture class="lesson-detail__intro-image">
            <img
              src="/images/oncetold.us-lesson-03-v1-800x200.jpg"
              alt="Episode Planning Masterclass"
            />
          </picture>

          <h2 class="lesson-detail__intro-heading">Define your Perspective</h2>
          <p class="lesson-detail__intro-info">
            Understand the importance of knowing your podcast's purpose and target
            audience.
          </p>

          <h3 class="lesson-detail__intro-sub-heading">Believe in Your Purpose</h3>
          <p class="lesson-detail__intro-info">
            The goal of your podcast should be to <em>make meaning</em>.
          </p>

          <p class="lesson-detail__intro-info">
            This is a principle that Guy Kawasaki, one of the co-founders of Apple
            Computers, presented at Stanford University in 2004. He asked those in
            attendance to tell him what it meant to make something that mattered – to give
            it meaning. After a few fumbled attempts at an answer, Kawasaki told them it
            meant one of three things:
          </p>

          <ul>
            <li class="lesson-detail__intro-list">
              To increase the quality of life of yourself or others
            </li>
            <li class="lesson-detail__intro-list">To right a wrong</li>
            <li class="lesson-detail__intro-list">
              To prevent the end of something good
            </li>
          </ul>

          <p class="lesson-detail__intro-info">
            These same concepts can apply to how you bring meaning to your listeners with
            your podcast. However, I like to think of the make-meaning principle using a
            different word: <em>purpose</em>.
          </p>

          <p class="lesson-detail__intro-info">
            You might consider your why and your purpose to be interchangeable.
          </p>
          <p class="lesson-detail__intro-info">I don’t.</p>

          <p class="lesson-detail__intro-info">
            I see your why – as in your why statement – a clear definition of what your
            podcast is about and who your podcast is for. It’s an extrinsic expression to
            remind you what your audience expects to hear when they press play.
          </p>

          <p class="lesson-detail__intro-info">
            Meanwhile, your purpose is an intrinsic expression of your why. If your why
            statement is for those outside of you – your listeners – then your purpose is
            for you alone – the reason you are doing this podcast in the first place.
          </p>

          <p class="lesson-detail__intro-info">What is it? What is your purpose?</p>

          <h3 class="lesson-detail__intro-sub-heading">Improve a Life</h3>

          <p class="lesson-detail__intro-info">
            Are you doing this podcast to increase the quality of life of yourself and
            others? There’s a good chance that you are. You may have a deep drive to
            provide your listeners with information that could change their lives the same
            way it changed yours.
          </p>

          <p class="lesson-detail__intro-info">
            You could also want to entertain people. Maybe you want to bring another
            person joy or laughter. Many motivational, personal growth, fitness, and
            coaching shows see life change as the primary purpose of their podcasts.
          </p>

          <p class="lesson-detail__intro-info">
            I believe changing a life is an excellent purpose behind your reasons for
            becoming a podcaster.
          </p>

          <h3 class="lesson-detail__intro-sub-heading">Right a Wrong</h3>

          <p class="lesson-detail__intro-info">
            If you’re not driven by changing someone’s life, maybe your purpose is to
            right a wrong. Podcasting has created thousands of true crime investigative
            journalists and amateur detectives whose whole purpose is to solve a real
            mystery.
          </p>

          <p class="lesson-detail__intro-info">
            Righting a wrong could be your reason for trying to change the way people
            think about an overlooked or underappreciated point of view.
          </p>

          <p class="lesson-detail__intro-info">
            Many social, religious, cultural, political, and personal podcasts have this
            as their purpose. They use their shows to take on a cause worth fighting for.
            There are plenty of wrongs that need a spotlight. You could certainly do a lot
            of good with having this as your purpose.
          </p>

          <h3 class="lesson-detail__intro-sub-heading">Keep Good Alive</h3>

          <p class="lesson-detail__intro-info">
            The last way to make meaning according to Guy Kawasaki, is to prevent the end
            of something good. Many podcasters are very passionate about their topics and
            go into podcasting to connect with others who care as much as they do. Your
            purpose can be to become the conduit that keeps a good idea alive long after
            others have given up on it.
          </p>

          <p class="lesson-detail__intro-info">
            This could include long-forgotten lessons learned from history, pop culture,
            health, education, technology, sports, art, or even business. There are
            millions of good things that have been forgotten by the world. You could make
            it your purpose to remind people of that good and why it matters that we
            remember it or reconsider the lessons it taught us. Keeping something good
            alive is an excellent purpose and possibly a lifelong endeavor.
          </p>

          <p class="lesson-detail__intro-info">
            Your purpose should be about making meaning with your podcast. It should be
            the driving factor that helps you to see the promise of your why statement
            fulfilled. Know your purpose.
          </p>

          <h3 class="lesson-detail__intro-sub-heading">In the Next Lesson</h3>
          <p class="lesson-detail__intro-info">
            In our next lesson, we are going to get into the importance of knowing your
            target audience and how that will help you craft a clear and focused "why
            statement".
          </p>
        </div>
      </article>

      <!-- Test yourself -->
      <article class="lesson-detail">
        <div class="lesson-detail__test">
          <picture class="lesson-detail__example-image">
            <img
              src="/images/oncetold.us-lesson-test-yourself-v1-800x100.jpg"
              alt="Episode Planning Masterclass"
            />
          </picture>

          <h3 class="lesson-detail__intro-sub-heading">Quick Quiz</h3>
          <p class="lesson-detail__intro-info">
            Why should every podcast start with Episode Planning?
          </p>
          <div v-if="!answerChecked" class="button-container">
            <ul v-if="!answerChecked" class="lesson-detail__intro-list-container">
              <li
                v-for="(answer, index) in answers"
                :key="index"
                class="lesson-detail__intro-list"
              >
                <label :for="'answer-' + index">
                  <input
                    type="radio"
                    :id="'answer-' + index"
                    :value="answer"
                    v-model="selectedAnswer"
                  />
                  {{ answer }}
                </label>
              </li>
            </ul>
            <button @click="checkAnswer" class="check-answer-btn">Check My Answer</button>
          </div>
          <div v-else>
            <p class="lesson-detail__intro-info">{{ answerExplanation }}</p>
            <button @click="resetQuiz" class="check-answer-btn">Reset</button>
          </div>
        </div>
      </article>

      <!-- Go Beyond -->
      <article class="lesson-detail">
        <div class="lesson-detail__resources">
          <picture class="lesson-detail__example-image">
            <img
              src="/images/oncetold.us-lesson-learn-more-v1-800x100.jpg"
              alt="Episode Planning Masterclass"
            />
          </picture>

          <h3 class="lesson-detail__intro-sub-heading">Related Articles</h3>
          <ul>
            <li class="lesson-detail__intro-list">
              <a
                href="/articles/how-to-transform-your-book-into-a-podcast"
                class="learn-detail__link"
                >How to transform your book into a podcast: Give your book a second life
                by converting it into 52 episodes of a weekly podcast.</a
              >
            </li>
          </ul>

          <h3 class="lesson-detail__intro-sub-heading">Related Videos</h3>
          <ul>
            <li class="lesson-detail__intro-list">
              <a href="/learn/videos/video-story-hunting" class="learn-detail__link"
                >Story Hunting: 7 principles of good content design</a
              >
            </li>
            <li class="lesson-detail__intro-list">
              <a href="/learn/videos/video-stop-podwrecking" class="learn-detail__link"
                >Stop Podwrecking: How to create a podcast WHY statement</a
              >
            </li>
          </ul>
        </div>
      </article>

      <!-- Learn the Process -->
      <article class="lesson-detail">
        <div class="lesson-detail__continue">
          <picture class="lesson-detail__continue-image">
            <img
              src="/images/oncetold.us-lesson-continue-v1-800x100.jpg"
              alt="Episode Planning Masterclass"
            />
          </picture>
          <h3 class="lesson-detail__intro-sub-heading">Ready to Start Planning?</h3>

          <p class="lesson-detail__intro-info">
            By the end of this course, you should have a solid understanding of podcast
            planning principles and a repeatable research strategy that you can build a
            solid schedule of compelling episode ideas.
          </p>
          <p class="lesson-detail__intro-info">
            In the next lesson, you will dig into your first challenge: defining your
            perspective.
          </p>
        </div>
      </article>

      <!-- lesson-detail #2 -->
      <article class="lesson-detail">
        <div class="lesson-detail__lesson-buttons">
          <div class="lesson-detail__lesson-btn-left">
            <a
              href="/learn/courses/episode-planning-masterclass/lesson-01"
              class="lesson-detail__button-link"
            >
              <img
                src="/images/oncetold.us-button-back-v1-350x100.jpg"
                alt="Back"
                class="lesson-detail__lesson-btn"
              />
            </a>
          </div>
          <div class="lesson-detail__lesson-btn-right">
            <a
              href="/learn/courses/episode-planning-masterclass/lesson-03"
              class="lesson-detail__button-link"
            >
              <img
                src="/images/oncetold.us-button-next-v1-350x100.jpg"
                alt="Next"
                class="lesson-detail__lesson-btn"
              />
            </a>
          </div>
        </div>
      </article>
    </div>
  </section>
</template>

<script>
import { ref } from "vue";

export default {
  name: "LessonDetailEpisodePlanningMasterclass01",
  setup() {
    const answers = ref([
      "Your podcast doesn't need a plan",
      "To be prepared for what comes next",
      "To know when your episodes will be released",
      "To know what the show art should look like",
    ]);
    const correctAnswerIndex = 1; // Index of the correct answer in the 'answers' array
    const selectedAnswer = ref(null);
    const answerChecked = ref(false);
    const answerExplanation = ref("");

    const checkAnswer = () => {
      answerChecked.value = true;
      if (selectedAnswer.value === answers.value[correctAnswerIndex]) {
        answerExplanation.value =
          "Yes! " + selectedAnswer.value + " is the right answer.";
      } else {
        answerExplanation.value =
          "Not Really. The correct answer is: " + answers.value[correctAnswerIndex];
      }
    };

    const resetQuiz = () => {
      selectedAnswer.value = null;
      answerChecked.value = false;
      answerExplanation.value = "";
    };

    return {
      answers,
      selectedAnswer,
      answerChecked,
      answerExplanation,
      checkAnswer,
      resetQuiz,
    };
  },
};
</script>

<style>
/* *********************************************** */
/* Features */
.lesson-detail-block {
  padding: 0;
}

.lesson-detail-container {
  max-width: 800px;
  margin: 0 auto;
}

.lesson-detail {
  margin: 0;
}

.lesson-detail__intro {
  padding: 2rem;
  border-radius: 2rem;
}

.lesson-detail-intro-header {
  /* border-top: 1px solid var(--color-light); */
  margin: 0;
  padding: 0;
}

.lesson-detail__intro-title {
  margin: 0;
  font-size: 4rem;
  line-height: 3rem;
  text-align: center;
}

.lesson-detail__intro-heading {
  margin: 1rem 0 1rem 0;
  font-size: 4rem;
  line-height: 2.8rem;
  padding: 0 0 0.5rem 0;
  font-weight: 400;
}

.lesson-detail__intro-sub-heading {
  font-size: 3rem;
  margin: 1rem 0;
  line-height: 3rem;
  font-weight: 400;
  padding-top: 2rem;
}

.lesson-detail__intro-info {
  font-size: 2.1rem;
  line-height: 3.2rem;
}

.lesson-detail__intro-list {
  font-size: 2rem;
  line-height: 3.2rem;
  padding-bottom: 0.5rem; /* Adjust spacing */
}

.lesson-detail__intro-list input[type="radio"] {
  margin-right: 0.5rem; /* Adjust spacing */
}

.lesson-detail__intro-list label {
  display: inline-block; /* Ensure the label and radio button stay together */
}

.lesson-detail__test {
  max-width: 800px;
  margin: 4rem 2rem 4rem 2rem;
  /* border-top: 1px solid #fff; */
}

.lesson-detail__test .button-container {
  margin-top: 1rem;
}

.lesson-detail__test .button-container button {
  margin-right: 1rem;
}

.lesson-detail__intro-list-container {
  list-style: none; /* Remove bullet points */
}

.lesson-detail__intro-image img {
  border-radius: 2rem;
  margin: 0 0 1rem 0;
  width: 100%; /* Ensure the image takes the full width of its container */
  height: auto;
}

.lesson-detail__example-image img {
  border-radius: 1rem;
  margin: 0 0 1rem 0;
  width: 100%; /* Ensure the image takes the full width of its container */
  height: auto;
}

.lesson-detail__continue-image img {
  border-radius: 1rem;
  margin: 0 0 1rem 0;
  width: 100%; /* Ensure the image takes the full width of its container */
  height: auto;
}

.lesson-detail__example {
  max-width: 800px;
  margin: 4rem 2rem 2rem 2rem;
  /* border-top: 1px solid #fff; */
}

.lesson-detail__resources {
  max-width: 800px;
  margin: 0 0 4rem 0;
  /* border-top: 1px solid #fff; */
}

.lesson-detail__continue {
  max-width: 800px;
  margin: 0 0 2rem 0;
  /* border-top: 1px solid #fff; */
}

.lesson-detail-summary__image > img {
  /* width: 100%; */

  border-radius: 1rem;
}

.lesson-detail__link {
  color: var(--color-header);
}

.lesson-detail__button-link:hover img {
  transform: scale(0.95); /* Scale down by 5% on hover */
  transition: transform 0.2s ease; /* Add transition for smooth scaling */
}

.lesson-detail__lesson-buttons {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 2rem 0 4rem 0;
}

.lesson-detail__lesson-btn-left {
  padding: 0 2rem 0 0;
}

.lesson-detail__lesson-btn-right {
  padding: 0 0 0 2rem;
}

/* CSS for Button Links */
.lesson-detail__button-link {
  width: 350px;
  height: 100px;
}

/* CSS for Button Links Hover */
.lesson-detail__button-link:hover {
  transform: scale(1.05); /* Scale up by 5% on hover */
}

.lesson-detail__lesson-btn {
  width: 100%;
  height: 100%;
  border-radius: 0.8rem; /* Adjust the border-radius as needed */
}

.check-answer-btn {
  background-color: #5eb1bf; /* Background color */
  color: #fff; /* Text color */
  border: 0.25rem solid #fff; /* Border */
  font-size: 2rem; /* Font size */
  padding: 10px 20px; /* Padding */
  border-radius: 5px; /* Border radius */
}

.check-answer-btn:hover {
  cursor: pointer;
}

@media screen and (max-width: 767px) {
  .lesson-detail {
    gap: 0rem 3rem;
    margin: 0;
  }

  .lesson-detail__intro-image img {
    border-radius: 1rem;
  }

  .lesson-detail__example-image img {
    border-radius: 0.5rem;
  }

  .lesson-detail__intro-heading {
    line-height: 4.5rem;
  }

  .lesson-detail__intro-sub-heading {
    line-height: 3.5rem;
  }

  .lesson-detail__lesson-btn {
    width: 100%;
    height: 100%;
    border-radius: 0.4rem; /* Adjust the border-radius as needed */
  }
}
</style>
