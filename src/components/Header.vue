<template lang="html">
  <header>
      <h1>The Benab Foundation</h1>
      <router-link :to="{ name: 'HomePage' }">Home</router-link>
      <router-link :to="{ name: 'Cog2017Page' }">Cog2017</router-link>
      <router-link :to="{ name: 'ProjectsPage' }">Projects</router-link>
      <router-link :to="{ name: 'GetInvolvedPage' }">Get Involved</router-link>
      <router-link :to="{ name: 'AboutPage' }">About</router-link>
  </header>
</template>

<script>
export default {
}
</script>

<style lang="scss">
</style>
