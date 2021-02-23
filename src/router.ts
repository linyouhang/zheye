import { createRouter, createWebHistory } from 'vue-router'
import store, { GlobalDateProps } from './store'
import Home from './view/Home.vue'
import Login from './view/Login.vue'
import ColumnDetail from './view/ColumnDetail.vue'
import CreatPost from './view/CreatPost.vue'
const history = createWebHistory()
const router = createRouter({
  history: history,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/login',
      name: 'login',
      component: Login,
      meta: { alreadyLogin: true }
    },
    {
      path: '/column/:id',
      name: 'column',
      component: ColumnDetail
    },
    {
      path: '/creatPost',
      name: 'creatPost',
      component: CreatPost,
      meta: { requiredLogin: true }
    }
  ]
})
router.beforeEach((to, from, next) => {
  if (to.meta.requiredLogin && !store.state.user.isLogin) {
    next({ name: 'login' })
  } else if (to.meta.alreadyLogin && store.state.user.isLogin) {
    next('/')
  } else {
    next()
  }
})
export default router
