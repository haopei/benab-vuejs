import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App.vue'

// Pages
import AboutPage from './pages/AboutPage.vue'
import Cog2017Page from './pages/Cog2017Page.vue'
import GetInvolvedPage from './pages/GetInvolvedPage.vue'
import HomePage from './pages/HomePage.vue'
import MembershipPage from './pages/MembershipPage.vue'
import ProjectsPage from './pages/ProjectsPage.vue'
import SponsorPage from './pages/SponsorPage.vue'
import VolunteerPage from './pages/VolunteerPage.vue'

// Page Partials
import AllProjectsList from './components/AllProjectsList.vue'

Vue.use(VueRouter)

const routes = [
    { path: '/', component: HomePage, name: 'HomePage' },
    { path: '/projects', component: ProjectsPage, name: 'ProjectsPage', children: [
        { path: 'all', component: AllProjectsList, name: 'AllProjectsList'},
        { path: 'cognitive-initiative-2017', component: Cog2017Page, name: 'Cog2017Page'}
    ]},
    { path: '/about', component: AboutPage, name: 'AboutPage' },
    { path: '/get-involved', component: GetInvolvedPage, name: 'GetInvolvedPage', children: [
      { path: '/volunteer', component: VolunteerPage, name: 'VolunteerPage' },
      { path: '/sponsor', component: SponsorPage, name: 'SponsorPage' },
      { path: '/membership', component: MembershipPage, name: 'MembershipPage' }
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
