<template lang="html">
  <div class="page page--about">
      <section class="hero is-primary is-medium is-bold">
        <div class="hero-body">
          <div class="container">
            <h1 class="title is-1 is-handwriting">
              Our Story
            </h1>
          </div>
        </div>
      </section>

      <section class="section">
        <div class="container">
          <div class="row">
            <div class="col-xs-12 col-sm-5">
              <h3 class="title is-3">Grassroot Beginnings</h3>
              <p>The desire to create a forum where likeminded individuals could engage each other on a plethora of issues which affect the lives of Guyanese led to the convening of about ten (10) young persons in an informal manner on December 27, 2012. In its early stages, the organization continued to function informally, with members volunteering their time in an ad-hoc manner. Early initiatives included facilitating discussions through unceremonious forums, as well as involvement in social services such as visits to geriatric homes and orphanages. Since then, we have grown and developed into an organization with over two dozen registered members, and scores of annual volunteers for our Signature event, the Cognitive Initiative. </p>
              <br>
            </div>
            <div class="col-xs-12 col-sm-offset-1 col-sm-6">
                <img :src="require('./static/point-at-benab.jpg')" alt="">
            </div>

          </div>

        </div>
      </section>

      <section class="section">
        <div class="container">
          <div class="level">
            <div class="level-left">
              <div class="level-item">
                <div class="heading">
                  <h3 class="title is-3">Team</h3>
                </div>
              </div>
            </div>
            <div class="level-right">
              <div class="level-item">
                <a href="https://form.jotformz.com/62207581246656" target="_blank" class="button is-link">Join Now</a>
              </div>
            </div>
          </div>
          <hr>

          <!-- Core Team -->
          <div class="columns">
              <div class="column">
                  <figure class="image">
                    <img :src="require('./static/saevion.jpg')" alt="">
                  </figure>
                  <br>
                  <h4 class="title is-4">Saevion David-Longe</h4>
                  <!-- <h6 class="subtitle is-6">Role</h6>
                  <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p> -->
              </div>

              <div class="column">
                  <figure class="image">
                    <img :src="require('./static/larry.jpg')" alt="">
                  </figure>
                  <br>
                  <h4 class="title is-4">Larry Carryl</h4>
                  <!-- <h6 class="subtitle is-6">Role</h6>
                  <p>If it involves reading, researching, or junk food, you can count me in. An engineer by profession, but a youth activist by passion, I try to make whatever little difference I can in the development of young people in Guyana. Being a part of the Benab team allows me to reach a fair number of under-privileged children each year, and try to better prepare them for the new school year. I’m hoping that in time we’ll be able to work together as a team to extend the length of the summer tutoring, as well as expand the range of initiatives that we have.</p> -->
              </div>

              <div class="column">
                  <figure class="image">
                    <img :src="require('./static/mkb.jpg')" alt="">
                  </figure>
                  <br>
                  <h4 class="title is-4">Maryam K Bacchus</h4>
                  <!-- <h6 class="subtitle is-6">Public Relations Officer</h6> -->
                  <!-- <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p> -->
              </div>

              <div class="column">
                  <figure class="image">
                    <img :src="require('./static/benita.jpg')" alt="">
                  </figure>
                  <br>
                  <h4 class="title is-4">Benita Davis</h4>
                  <!-- <h6 class="subtitle is-6">role</h6>
                  <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p> -->
              </div>
          </div>

          <!-- Members -->
          <!-- <div class="columns">
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
          </div> -->

        </div>
      </section>

      <section class="section">
        <div class="container">
          <div class="heading">
            <h3 class="title is-3"><img :src="require('./static/file-text.svg')" alt=""> Document Portal</h3>
          </div>
          <hr>
          <div class="content">
            <p>Our constitution and other important documents can be found in our <a href="https://drive.google.com/drive/folders/0B3MdzJigXfpFYVpZQk14QTFidlE" target="_blank" title="document portal">Document Portal</a></p>

          </div>
        </div>
      </section>

      <get-involved></get-involved>
  </div>
</template>

<script>
import GetInvolved from './../../components/GetInvolved/GetInvolved.vue';
export default {
  components: {
    GetInvolved
  }
}
</script>

<style lang="scss">
</style>
