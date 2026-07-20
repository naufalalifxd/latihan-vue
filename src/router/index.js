import { createRouter, createWebHistory } from 'vue-router'
import UserList from '@/pages/UserList.vue'
import UserDetail from '@/pages/UserDetail.vue'
import CreateUser from '@/pages/CreateUser.vue'

const routes = [
  { path: '/', redirect: '/users' },
  { path: '/users', component: UserList },
  { path: '/user/:id', component: UserDetail },
  { path: '/create-user', component: CreateUser }
]

export default createRouter({
  history: createWebHistory(),
  routes,
})