<template lang="html">

  <div class="testimonial-container">

    <div class="testimonial">
      <div class="columns">
        <div class="column">
          <figure class="media-right is-pulled-right">
            <p class="image is-64x64">
              <img :src="testimonial.image" class="testimonial__author-thumbnail" @click="handleClick">
            </p>
          </figure>
        </div>
        <div class="column">
            <div class="">
            <strong>{{ testimonial.name }}</strong>
            </div>
            <small>{{ testimonial.role }}</small>
        </div>
      </div>
    </div>

    <div v-if="showPopUp" class="testimonial__author-quote">
      <div class="content">
          <i class="fa fa-fw fa-quote-left" aria-hidden="true"></i>
          <em>{{ testimonial.quote }}</em>"
          <br>
          <div class="closeButton is-pulled-right" @click="closePopUp">
            close
          </div>
      </div>
    </div>
  </div>

</template>

<script>

export default {
  props: ['testimonial'],
  data() {
    return {
      showPopUp: false
    }
  },
  methods: {
    handleClick: function() {
      this.showPopUp = !this.showPopUp;
    },
    closePopUp: function() {
      this.showPopUp = false;
    }
  }
}



</script>

<style lang="scss">

.testimonial-container {
  text-align: left;
  position: relative;
}

.testimonial {
  display: inline-block;

  &__author-thumbnail {
    border-radius: 50%;
    padding: 2px;
    background: #f5f5f5;
    box-shadow: #333 0px 0px 12px;

    &:hover {
      cursor: pointer;
    }
  }

  &__author-quote {
    // style
    background: #f5f5f5;
    border-radius: 5px;
    text-align: left;
    // structure
    max-width: 500px;
    padding: 10px;
    position: absolute;
    bottom: 80px;
    left: 20px;
  }
}

</style>
