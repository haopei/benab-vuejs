<template lang="html">
    <section class="section ">
        <div class="container">
            <div class="tabs is-centered is-fullwidth is-large">
              <ul>
                <li class="is-active"><a @click="handleTabClick" data-tab="tailored">Tailored Curriculum</a></li>
                <li><a @click="handleTabClick" data-tab="volunteers">Top Volunteers</a></li>
                <li><a @click="handleTabClick" data-tab="focused-mentorship">Focused 1-on-1 Mentorship</a></li>
              </ul>
            </div>
            <div class="tabs__content has-text-centered">
                <div v-if="tabs.active == 'tailored'" class="">
                    <h2 class="subtitle is-2">Lessons Across All Levels</h2>
                    <img :src="require('./static/tabs/tailor.jpg')" alt="">
                    <br><br>
                    <p>Our students are assessed and placed into specific classrooms <br> where lessons are designed to patch and strengthen their <br> understanding of core concepts.</p>
                </div>
                <div v-if="tabs.active == 'volunteers'" class="">
                    <h2 class="subtitle is-2">Crème de la crème Volunteers</h2>
                    <img :src="require('./static/tabs/volunteers.jpg')" alt="">
                    <br><br>
                    <p>Our students are assessed and placed into specific classrooms <br> where lessons are designed to patch and strengthen their <br> understanding of core concepts.</p>
                </div>
                <div v-if="tabs.active == 'focused-mentorship'" class="">
                    <h2 class="subtitle is-2">One-on-one</h2>
                    <img :src="require('./static/tabs/one-on-one.jpg')" alt="">
                    <br><br>
                    <p>Our volunteers are deployed to the classroom in teams. This means there is more attention per student. </p>
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

<style lang="css">
</style>
