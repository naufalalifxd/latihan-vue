import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import About from '../views/About.vue'
import UserListView from '../views/UserListView.vue'
import UserDetailView from '../views/UserDetailView.vue'
import CreateUserView from '../views/CreateUserView.vue'

const routes = [
  { path: '/', component: Home },
  { path: '/about', component: About },
  { path: '/users', component: UserListView },
  { path: '/users/:id', component: UserDetailView },
  { path: '/create-user', component: CreateUserView }
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router