<template lang="html">
    <section class="section ">
        <div class="container">
            <div class="tabs is-centered is-fullwidth is-large is-boxed">
              <ul>
                <li class="is-active"><a @click="handleTabClick" data-tab="tailored">Tailored Curriculum</a></li>
                <li><a @click="handleTabClick" data-tab="volunteers">Volunteers</a></li>
                <li><a @click="handleTabClick" data-tab="focused-mentorship">Focused 1-on-1 Mentorship</a></li>
              </ul>
            </div>
            <div class="tabs__content has-text-centered">
                <div v-if="tabs.active == 'tailored'" class="">
                    <div class="content">
                        <img :src="require('./static/tabs/tailor.jpg')" alt="">
                        <br><br>
                        <h4 class="subtitle is-4">Lessons Across All Levels</h4>
                        <p>Our students are assessed and placed into specific classrooms <br> where lessons are designed to patch and strengthen their <br> understanding of core concepts.</p>
                    </div>

                </div>
                <div v-if="tabs.active == 'volunteers'" class="">
                    <div class="content">
                        <img :src="require('./static/tabs/volunteers.jpg')" alt="">
                        <br><br>
                        <h4 class="subtitle is-4">Crème de la crème Volunteers</h4>
                        <p>Our students are assessed and placed into specific classrooms <br> where lessons are designed to patch and strengthen their <br> understanding of core concepts.</p>
                    </div>
                </div>
                <div v-if="tabs.active == 'focused-mentorship'" class="">
                    <div class="content">
                        <img :src="require('./static/tabs/one-on-one.jpg')" alt="">
                        <br><br>
                        <h4 class="subtitle is-4">1-on-1 Attention on Demand</h4>
                        <p>Our volunteers are deployed to the classroom in teams <br> and continuously assess our students understanding. <br> This means there is more attention per student. </p>
                    </div>
                </div>
            </div>

        </div>
    </section>
</template>

<script>
export default {
    data() {
        return {
            tabs: {
                active: 'tailored'
            }
        }
    },
    methods: {
        handleTabClick(e) {

            // remove the 'is-active' class from all tab li elements
            let tabs = document.querySelectorAll('.tabs li');
            tabs.forEach(tab => {
                tab.classList.remove('is-active');
            });
            // set the new active tab
            e.target.parentElement.classList.add('is-active');
            this.tabs.active = e.target.dataset.tab;
        }
    }
}
</script>

<style lang="scss" scoped>
    .tabs__content {
        background: #ffffff;  /* fallback for old browsers */
        background: -webkit-linear-gradient(to top, #f5f5f5, #ffffff);  /* Chrome 10-25, Safari 5.1-6 */
        background: linear-gradient(to top, #f5f5f5, #ffffff); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
        padding: 3rem 1.5rem;
    }

</style>
