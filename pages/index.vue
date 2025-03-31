<template>
  <div>
    <SectionHero />




    <!-- Choice Section -->
    <section class="choice__section">
      <div class="container">
        <div class="choice__wrapper">
          <div class="choice__title">
            <h3>
              Focus and Mood Support for Kids*
            </h3>
          </div>

          <div class="choice__subtitle">
            <p><span>L-theanine</span> and the highest quality natural ingredients support focus and healthy-brain
              function for kids
              and adolescents*. Our delicious tasting tropical flavored chewables take high quality cognitive
              ingredients
              and pair them with essential vitamins and amino acids.</p>
          </div>

          <div class="content__title">
            <h3>
              What's inside?
            </h3>
          </div>


          <div class="choice__body">
            <div class="choice">
              <figure>
                <img src="~/assets/images/theanine.png" alt="" />
              </figure>
              <h3> L-theanine </h3>
              <p> Promotes calm and improves focus, concentration, and clarity </p>
            </div>

            <div class="choice">
              <figure>
                <img src="~/assets/images/citicoline.png" alt="" />
              </figure>
              <h3> Citicoline </h3>
              <p> A brain booster to support brain health, improve memory, and boost focus </p>
            </div>

            <div class="choice">
              <figure>
                <img src="~/assets/images/omega-dha.png" alt="" />
              </figure>
              <h3>Omega-3 DHA </h3>
              <p> Supports brain health, improves memory, and enhances focus. </p>
            </div>

            <div class="choice">
              <figure>
                <img src="~/assets/images/bacopa-monnieri.png" alt="" />
              </figure>
              <h3> Bacopa Monnieri </h3>
              <p> Helps improve memory, reduce stress, and support brain function.</p>
            </div>
          </div>
        </div>
      </div>
    </section>


    <!-- Expectation Section -->
    <section class="expectation__section">
      <div class="container">
        <div class="expectation__wrapper">
          <div class="expectation__image">
            <figure>
              <img src="~/assets/images/expectation.png" alt="" />
            </figure>
          </div>

          <div class="expectation__content-wrapper">
            <div class="expectation-timeline"></div>

            <div class="expectation__content">
              <div class="expectation">
                <h5 class="expectation__duration"> WEEK 1 </h5>
                <h5 class="expectation__title">Improved Focus</h5>
                <p class="expectation__description"> Notice sharper focus and mental clarity, feel more present and
                  engaged </p>
              </div>
              <div class="expectation">
                <h5 class="expectation__duration"> MONTH 1 </h5>
                <h5 class="expectation__title">Flow States</h5>
                <p class="expectation__description">Experience brief moments in flow state, a reduction in
                  procrastination, and improved information retention</p>
              </div>
              <div class="expectation">
                <h5 class="expectation__duration"> MONTH 3 </h5>
                <h5 class="expectation__title">Increased Neuroplasticity</h5>
                <p class="expectation__description">Sustained periods in flow state, ability to tackle goals, greater
                  decisiveness, enhanced learning ability</p>
              </div>
              <div class="expectation">
                <h5 class="expectation__duration"> MONTH 6 </h5>
                <h5 class="expectation__title">Promote Neurogenesis</h5>
                <p class="expectation__description">Neurogenesis is the growth of new neurons in the brain, supporting
                  cognitive health, learning, and memory retention</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>


    <!-- Results Section -->
    <section class="result__section">
      <div class="container">
        <div class="result__wrapper">
          <div class="result__content">
            <h3>
              95<span>%</span>
            </h3>
            <p>of children felt more happy & focused at school and were able to do a better job on their homework</p>
          </div>

          <div class="result__image">
            <figure>
              <img src="~/assets/images/results.png" alt="" />
            </figure>
          </div>
        </div>
      </div>
    </section>


    <!-- Reviews Section -->
    <section class="review__section">
      <div class="container">
        <div class="review__wrapper">
          <div class="review__body">
            <div class="review__title">
              <h3> Real Reviews on PowerMindz </h3>
            </div>

            <div class="review__content">
              <div class="review">
                <div class="review__image">
                  <figure>
                    <img src="~/assets/images/review-01.png" alt="" />
                  </figure>
                </div>

                <div class="review__text">
                  <p class="review__description">Power Mindz gave us a calmer house after years of suffering </p>
                  <p class="review__author">Chris H.</p>
                </div>
              </div>
              <div class="review">
                <figure>
                  <img src="~/assets/images/review-02.png" alt="" />
                </figure>

                <div class="review__text">
                  <p class="review__description">My daughter has focus and purpose at school again.
                  </p>
                  <p class="review__author">Chris H.</p>
                </div>
              </div>
              <div class="review">
                <div class="review__image">
                  <figure>
                    <img src="~/assets/images/review-03.png" alt="" />
                  </figure>
                </div>

                <div class="review__text">
                  <p class="review__description">Our 10 year old is finally sleeping at friend's house’s and her social
                    life is thriving! </p>
                  <p class="review__author">Chris H.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="review__slider">
        <Splide :options="{
          type: 'slide',
          padding: '1rem', snap: true,
          breakpoints: { 1170: { perPage: 2 }, 850: { perPage: 1 }, },
          gap: '-30px',
        }">
          <SplideSlide v-for="review in reviews" :key="review.image">
            <div class="review">
              <div class="review__image">
                <figure>
                  <img :src="review.image" alt="" />
                </figure>
              </div>

              <div class="review__text">
                <p class="review__description">{{ review.description }}</p>
                <p class="review__author">{{ review.author }}</p>
              </div>
            </div>
          </SplideSlide>
        </Splide>
      </div>
    </section>

    <!-- Call to Action Section-->
    <section class="cta__section">
      <div class="container">
        <div class="cta__wrapper">
          <div class="cta__body">
            <p class="cta__subtitle">Join a community of</p>
            <h3 class="cta__title">over 300,000 people</h3>
            <p class="cta__description">whose lives are changing on a daily basis with <span>PowerMindz</span></p>
            <button class="button availability-button">TRY NOW</button>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script lang="ts" setup>
import { Splide, SplideSlide } from '@splidejs/vue-splide';
import '@splidejs/vue-splide/css';
import review01 from '~/assets/images/review-01.png';
import review02 from '~/assets/images/review-02.png';
import review03 from '~/assets/images/review-03.png';

const reviews = [
  {
    image: review01,
    description: 'Power Mindz gave us a calmer house after years of suffering ',
    author: 'Chris H.'
  },
  {
    image: review02,
    description: 'My daughter has focus and purpose at school again.',
    author: 'Sarah M.'
  },
  {
    image: review03,
    description: 'Our 10 year old is finally sleeping at friend\'s house\'s and her social life is thriving!',
    author: 'John D.'
  }
]
</script>

<style></style>