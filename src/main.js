import Vue from 'vue'
import VueRouter from 'vue-router'
import VueAwesomeSwiper from 'vue-awesome-swiper'
import App from './App.vue'

// Pages
import AboutPage from './pages/AboutPage/AboutPage.vue'
import Cog2017Page from './pages/Cog2017Page/Cog2017Page.vue'
import ContactPage from './pages/ContactPage.vue'
import GetInvolvedParent from './pages/GetInvolvedParent.vue'
import GetInvolvedChoose from './pages/GetInvolvedChoose.vue'
import HomePage from './pages/HomePage.vue'
import MembershipPage from './pages/MembershipPage.vue'
import ProjectsPage from './pages/ProjectsPage.vue'
import SponsorPage from './pages/SponsorPage.vue'
import VolunteerPage from './pages/VolunteerPage.vue'

// Page Partials
import AllProjectsList from './components/AllProjectsList/AllProjectsList.vue'

Vue.use(VueRouter)
Vue.use(VueAwesomeSwiper)

const routes = [
    { path: '/', component: HomePage, name: 'HomePage' },
    { path: '/projects', component: ProjectsPage, name: 'ProjectsPage', children: [
        { path: 'all', component: AllProjectsList, name: 'AllProjectsList'},
        { path: 'cognitive-initiative-2017', component: Cog2017Page, name: 'Cog2017Page'}
    ]},
    { path: '/about', component: AboutPage, name: 'AboutPage' },
    { path: '/contact', component: ContactPage, name: 'ContactPage' },
    { path: '/get-involved', component: GetInvolvedParent, name: 'GetInvolvedParent', children: [
      { path: 'choose', component: GetInvolvedChoose, name: 'GetInvolvedChoose' },
      { path: 'volunteer', component: VolunteerPage, name: 'VolunteerPage' },
      { path: 'sponsor', component: SponsorPage, name: 'SponsorPage' },
      { path: 'membership', component: MembershipPage, name: 'MembershipPage' }
    ]}
]

const router = new VueRouter({
  routes
})


new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
