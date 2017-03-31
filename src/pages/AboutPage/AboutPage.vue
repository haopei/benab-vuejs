<template lang="html">
  <div class="page page--about">
      <section class="hero is-primary is-bold">
        <div class="hero-body">
          <div class="container">
            <h1 class="title">
              Our Story
            </h1>
            <h2 class="subtitle">
              In short, we are just a bunch of energetic, young folks who can see better.
            </h2>
          </div>
        </div>
      </section>

      <section class="section">
        <div class="container">
          <div class="heading">
            <h2 class="subtitle is-2">Our Story</h2>
          </div>
          <hr>
          <div class="columns">
            <div class="column">
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
            </div>
            <div class="column">
                <img :src="require('./point-at-benab.jpg')" alt="">
            </div>

          </div>

        </div>
      </section>

      <section class="section">
        <div class="container">
          <div class="level">
            <div class="level-left">
              <div class="leve-item">
                <div class="heading">
                  <h2 class="subtitle is-2">Team</h2>
                </div>
              </div>
            </div>
            <div class="level-right">
              <div class="level-item">
                <router-link :to="{name: 'GetInvolvedMembershipPage'}" class="button is-link">Join The Team</router-link>
              </div>
            </div>
          </div>
          <hr>
          
          <!-- Core Team -->
          <div class="columns">
              <div class="column">
                  <img src="" alt="">
                  <h4 class="title is-4">Saevion David-Longe</h4>
                  <h6 class="subtitle is-6">Role</h6>
                  <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
              </div>

              <div class="column">
                  <img src="" alt="">
                  <h4 class="title is-4">Larry Carryl</h4>
                  <h6 class="subtitle is-6">Role</h6>
                  <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
              </div>

              <div class="column">
                  <img src="" alt="">
                  <h4 class="title is-4">Maryam K Bacchus</h4>
                  <h6 class="subtitle is-6">Public Relations Officer</h6>
                  <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
              </div>

              <div class="column">
                  <img src="" alt="">
                  <h4 class="title is-4">Benita Davis</h4>
                  <h6 class="subtitle is-6">Role</h6>
                  <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
              </div>
          </div>

          <!-- Members -->
          <div class="columns">
            <div class="column">
                <img src="" alt="">
                <h4 class="title is-4">Daniella Sobers</h4>
                <h6 class="subtitle is-6">Role</h6>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
            </div>

            <div class="column">
                <img src="" alt="">
                <h4 class="title is-4">Someone Singh William</h4>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
            </div>

            <div class="column">
                <img src="" alt="">
                <h4 class="title is-4">Someone Singh William</h4>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
            </div>

            <div class="column">
                <img src="" alt="">
                <h4 class="title is-4">Someone Singh William</h4>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
            </div>
          </div>

        </div>
      </section>

      <section class="section">
        <div class="container">
          <div class="heading">
            <h2 class="subtitle is-2">Special Thanks</h2>
          </div>
          <hr>
          <div class="content">
            <ul>
              <li><h5 class="subtitle is-h5">Mr. Carryl</h5> who consecutively contributed to our fundraising efforts, every time.</h5> </li>
            </ul>
          </div>
        </div>
      </section>

      <get-involved></get-involved>
  </div>
</template>

<script>
import GetInvolved from './../../components/GetInvolved.vue';
export default {
  components: {
    GetInvolved
  }
}
</script>

<style lang="scss">
</style>
