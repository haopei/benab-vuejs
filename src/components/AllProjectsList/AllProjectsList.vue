<template lang="html">
  <section class="section">
      <div class="container">
        <div v-for="project in allProjects" class="project-item">
          <img :src="project.image" alt="">
          <pre>{{project}}</pre>
        </div>
      </div>
  </section>
</template>

<script>
import { allProjects } from './data.js'
export default {
  data() {
    return {
      allProjects: []
    }
  },
  mounted() {
    this.allProjects = allProjects;
  }
}
</script>

<style lang="scss">
</style>
