import Vue from 'vue'
import VueRouter from 'vue-router'
import VueAwesomeSwiper from 'vue-awesome-swiper'
import App from './App.vue'

// Pages
import AboutPage from './pages/AboutPage/AboutPage.vue'
import Cog2017Page from './pages/Cog2017Page/Cog2017Page.vue'
import ContactPage from './pages/ContactPage.vue'
import GetInvolvedChoosePage from './pages/GetInvolved/GetInvolvedChoosePage.vue'
import GetInvolvedMembershipPage from './pages/GetInvolved/GetInvolvedMembershipPage.vue'
import GetInvolvedParent from './pages/GetInvolved/GetInvolvedParent.vue'
import GetInvolvedSponsorsPage from './pages/GetInvolved/GetInvolvedSponsorsPage.vue'
import GetInvolvedVolunteerPage from './pages/GetInvolved/GetInvolvedVolunteerPage.vue'
import HomePage from './pages/HomePage/HomePage.vue'
import ProjectsPage from './pages/ProjectsPage.vue'



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
      { path: 'choose', component: GetInvolvedChoosePage, name: 'GetInvolvedChoosePage' },
      { path: 'volunteer', component: GetInvolvedVolunteerPage, name: 'GetInvolvedVolunteerPage' },
      { path: 'sponsor', component: GetInvolvedSponsorsPage, name: 'GetInvolvedSponsorsPage' },
      { path: 'membership', component: GetInvolvedMembershipPage, name: 'GetInvolvedMembershipPage' }
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
