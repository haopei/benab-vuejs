<template lang="html">

  <div class="testimonial-container">

    <div class="testimonial">
      <div class="columns">
        <div class="column">
          <figure class="image is-48x48 media-right is-pulled-right">
            <p class="image is-48x48">
              <img :src="image" class="testimonial__author-thumbnail" @click="togglePopup">
            </p>
          </figure>
        </div>
        <div class="column">
            <div class="">
              <strong><slot name="authorName"></slot></strong>
            </div>
            <small><slot name="authorRole"></slot></small>
        </div>
      </div>
    </div>

    <div v-if="popupIsActive" class="testimonial__author-quote">
      <div class="content">
        <div class="testimonial__close-button is-pulled-right" @click="closePopUp">
          <a class="delete"></a>
        </div>
        <i class="fa fa-fw fa-quote-left" aria-hidden="true"></i>
        <em><slot name="authorQuote"></slot>{{ quote }}</em>"
      </div>
    </div>
  </div>

</template>

<script>
export default {
  props: ['name', 'role', 'quote', 'image', 'isActive'],
  data() {
    return {
      popupIsActive: this.isActive
    }
  },
  methods: {
    togglePopup: function(e) {
      this.popupIsActive = !this.popupIsActive;
    },
    closePopUp: function() {
      this.popupIsActive = false;
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
    background: #f5f5f5;
    border-radius: 5px;
    text-align: left;
    max-width: 500px;
    padding: 10px;
    position: absolute;
    top: -110px;
  }

  &__close-button {
    padding: 0 0 10px 10px
  }
}

</style>
