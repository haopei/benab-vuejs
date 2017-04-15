<template lang="html">
  <div class="volunteer">
    <article class="media">
      <figure class="media-left">
        <p class="image is-48x48">
          <img :src="image">
        </p>
      </figure>
      <div class="media-content">
        <div class="content">
          <p>
            <strong>{{name}}</strong> <br>
            <small>{{role}}</small>
          </p>
        </div>
      </div>
      <div class="media-right">
        <!-- <i class="fa fa-fw fa-star" aria-hidden="true"></i> -->
      </div>
    </article>
  </div>



  <!-- <div class="volunteer-container">
    <div class="volunteer">
      <div class="columns">
        <div class="column">
          <figure class="image is-48x48 media-right is-pulled-right">
            <p class="image is-48x48">
              <img :src="image" class="volunteer__author-thumbnail">
            </p>
          </figure>
        </div>
        <div class="column">
            <div class="">
              <strong>{{name}}</strong>
            </div>
            <small>{{role}}</small>
        </div>
      </div>
    </div>
  </div> -->

</template>

<script>
export default {
  props: ['name', 'image', 'role']
}
</script>

<style lang="scss">

</style>
