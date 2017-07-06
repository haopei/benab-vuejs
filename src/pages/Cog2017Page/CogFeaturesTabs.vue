<template lang="html">

    <section class="section ">
        <div class="container">
            <div class="tabs is-centered is-fullwidth is-boxed">
              <ul>
                <li class="is-active"><a @click="handleTabClick" data-tab="tailored">Adaptive Curriculum</a></li>
                <li><a @click="handleTabClick" data-tab="volunteers">Volunteers</a></li>
                <li><a @click="handleTabClick" data-tab="focused-mentorship">1-on-1 Attention</a></li>
              </ul>
            </div>
            <div class="tabs__content has-text-centered">
                <div v-if="tabs.active == 'tailored'">
                    <div class="content">
                        <figure class="image">
                            <img :src="require('./static/tabs/tailor.jpg')" alt="">
                        </figure>
                        <br><br>
                        <h4 class="subtitle is-4">Lessons Across All Levels</h4>
                        <p>Our Mathematics and English curricula were developed with the input of senior teachers (Gen Rohlehr, Lenise Parker) and scholars. </p>
                    </div>

                </div>
                <div v-if="tabs.active == 'volunteers'">
                    <div class="content">
                        <figure class="image">
                            <img :src="require('./static/tabs/volunteers.jpg')" alt="">
                        </figure>
                        <br><br>
                        <h4 class="subtitle is-4">Crème de la crème Volunteers</h4>
                        <p>our volunteers have all been scholars in their own regard and possess the competence and drive to mentor our young students.</p>
                    </div>
                </div>
                <div v-if="tabs.active == 'focused-mentorship'" class="">
                    <div class="content">
                        <figure class="image">
                            <img :src="require('./static/tabs/one-on-one.jpg')" alt="">
                        </figure>
                        <br><br>
                        <h4 class="subtitle is-4">1-on-1 Attention on Demand</h4>
                        <p>We aim to have two volunteers per classroom to ensure each child receives sufficient one-on-one attention as necessary to ensure their maximum benefit and learning.</p>
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

    .is-active {
        font-weight: bold;
    }

</style>
