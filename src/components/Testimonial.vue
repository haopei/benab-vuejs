<template lang="html">

  <div class="testimonial-container">
    <article class="media testimonial">
      <div class="columns">
          <div class="column is-one-quarter">
            <figure class="media-left">
              <p class="image is-64x64">
                <img :src="testimonial.image">
              </p>
            </figure>
          </div>
          <div class="column">
            <div class="media-content">
              <div class="content">
                  "<em>{{ testimonial.quote }}</em>"
                  <br>
                  <strong>{{ testimonial.name }}</strong>
                  <br>
                  <small>{{ testimonial.role }}</small>
              </div>
            </div>
          </div>
      </div>
  </article>
  </div>

</template>

<script>

export default {
  props: ['testimonial']
}



</script>

<style lang="scss">

.testimonial {
  background: rgba(255, 255, 255, 0.2);
  display: inline-block;
  padding: 1rem;
  margin: 1rem 0;
  max-width: 450px;
  border-radius: 5px;
}

</style>
