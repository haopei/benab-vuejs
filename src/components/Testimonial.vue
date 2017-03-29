<template lang="html">
    <article class="media testimonial">
    <figure class="media-left">
      <p class="image is-64x64">
        <img src="http://bulma.io/images/placeholders/128x128.png">
      </p>
    </figure>
    <div class="media-content">
      <div class="content">
          "<em>{{ testimonial.quote }}</em>""
          <br>
          <strong>{{ testimonial.name }}</strong>
          <br>
          <small>{{ testimonial.role }}</small>
      </div>
    </div>
  </article>
</template>

<script>
export default {
  props: ['testimonial']
}
</script>

<style lang="css">
</style>
