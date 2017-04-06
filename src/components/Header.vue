<template lang="html">
  <header>

      <nav class="nav has-shadow">
        <div class="nav-left">
          <a class="nav-item">
            <h1 class="title is-h1">
                <router-link :to="{ name: 'HomePage' }">
                    The Benab Foundation
                </router-link>

            </h1>
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
            <router-link :to="{ name: 'HomePage' }" class="nav-item is-tab"><a @click="handleLinkClick">Home</a></router-link>
            <router-link :to="{ name: 'Cog2017Page' }" class="nav-item is-tab"><a @click="handleLinkClick">Cog2017</a></router-link>
            <!-- <router-link :to="{ name: 'AllProjectsList' }" class="nav-item is-tab"><a @click="handleLinkClick">Projects</a></router-link> -->
            <router-link :to="{ name: 'AboutPage' }" class="nav-item is-tab"><a @click="handleLinkClick">About</a></router-link>
            <router-link :to="{ name: 'ContactPage' }" class="nav-item is-tab"><a @click="handleLinkClick">Contact</a></router-link>

          <span class="nav-item">
            <router-link :to="{ name: 'GetInvolvedChoosePage' }" class="nav-item">
              <a class="button is-primary" @click="handleLinkClick">
                <!-- <span class="icon">
                  <i class="fa fa-download"></i>
                </span> -->
                Get Involved</a>
            </router-link>
          </span>
        </div>
      </nav>
  </header>
</template>

<script>
export default {
  data() {
    return {
      isActiveClass: 'is-active',
      navEl: null
    }
  },
  methods: {
    toggleHamburgerMenu() {
      // This "nav-menu" is hidden on mobile
      // Add the modifier "is-active" to display it on mobile
      let navIsActive = this.navEl.classList.contains(this.isActiveClass);
      navIsActive ? this.navEl.classList.remove(this.isActiveClass) : this.navEl.classList.add(this.isActiveClass);
    },
    handleLinkClick() {
      // hide hamburger dropdown menu when a link is clicked
      this.navEl.classList.remove(this.isActiveClass);
    }
  },
  mounted() {
    this.navEl = document.querySelector('.nav-menu');
  }
}
</script>

<style lang="scss">
.nav {
  // background: $brown;
}
</style>
