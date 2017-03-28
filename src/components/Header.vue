<template lang="html">
  <header>

      <nav class="nav">
        <div class="nav-left">
          <a class="nav-item">
            <h1 class="title is-h1">Benab</h1>
          </a>
        </div>

        <!-- This "nav-toggle" hamburger menu is only visible on mobile -->
        <!-- You need JavaScript to toggle the "is-active" class on "nav-menu" -->
        <span class="nav-toggle" @click="toggleHamburgerMenu">
          <span></span>
          <span></span>
          <span></span>
        </span>

        <!-- This "nav-menu" is hidden on mobile -->
        <!-- Add the modifier "is-active" to display it on mobile -->
        <div class="nav-right nav-menu">
          <div class="nav-item">
            <router-link :to="{ name: 'HomePage' }">Home</router-link>
          </div>
          <div class="nav-item">
            <router-link :to="{ name: 'Cog2017Page' }">Cog2017</router-link>
          </div>
          <div class="nav-item">
            <router-link :to="{ name: 'ProjectsPage' }">Projects</router-link>
          </div>

          <div class="nav-item">
            <router-link :to="{ name: 'AboutPage' }">About</router-link>
          </div>

          <span class="nav-item">
            <a class="button is-primary">
              <!-- <span class="icon">
                <i class="fa fa-download"></i>
              </span> -->
              <span>Get Involved</span>
            </a>
          </span>
        </div>
      </nav>
  </header>
</template>

<script>
export default {
  methods: {
    toggleHamburgerMenu() {
      // This "nav-menu" is hidden on mobile
      // Add the modifier "is-active" to display it on mobile
      let isActiveClass = 'is-active';
      let navEl = document.querySelector('.nav-menu');
      let navIsActive = navEl.classList.contains(isActiveClass);
      navIsActive ? navEl.classList.remove(isActiveClass) : navEl.classList.add(isActiveClass);
    }
  }
}
</script>

<style lang="scss">
</style>
