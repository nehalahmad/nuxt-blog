import Vue from 'vue'
import Router from 'vue-router'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _24394387 = () => interopDefault(import('..\\pages\\about\\index.vue' /* webpackChunkName: "pages/about/index" */))
const _903352f6 = () => interopDefault(import('..\\pages\\admin\\index.vue' /* webpackChunkName: "pages/admin/index" */))
const _7d2c2381 = () => interopDefault(import('..\\pages\\posts\\index.vue' /* webpackChunkName: "pages/posts/index" */))
const _2c257196 = () => interopDefault(import('..\\pages\\users.vue' /* webpackChunkName: "pages/users" */))
const _bfd1f7c6 = () => interopDefault(import('..\\pages\\admin\\auth\\index.vue' /* webpackChunkName: "pages/admin/auth/index" */))
const _d6e97b10 = () => interopDefault(import('..\\pages\\admin\\new-post\\index.vue' /* webpackChunkName: "pages/admin/new-post/index" */))
const _96b1ec16 = () => interopDefault(import('..\\pages\\admin\\_postId\\index.vue' /* webpackChunkName: "pages/admin/_postId/index" */))
const _74eb3239 = () => interopDefault(import('..\\pages\\posts\\_id\\index.vue' /* webpackChunkName: "pages/posts/_id/index" */))
const _3288d140 = () => interopDefault(import('..\\pages\\index.vue' /* webpackChunkName: "pages/index" */))

// TODO: remove in Nuxt 3
const emptyFn = () => {}
const originalPush = Router.prototype.push
Router.prototype.push = function push (location, onComplete = emptyFn, onAbort) {
  return originalPush.call(this, location, onComplete, onAbort)
}

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: decodeURI('/'),
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
    path: "/about",
    component: _24394387,
    name: "about"
  }, {
    path: "/admin",
    component: _903352f6,
    name: "admin"
  }, {
    path: "/posts",
    component: _7d2c2381,
    name: "posts"
  }, {
    path: "/users",
    component: _2c257196,
    name: "users"
  }, {
    path: "/admin/auth",
    component: _bfd1f7c6,
    name: "admin-auth"
  }, {
    path: "/admin/new-post",
    component: _d6e97b10,
    name: "admin-new-post"
  }, {
    path: "/admin/:postId",
    component: _96b1ec16,
    name: "admin-postId"
  }, {
    path: "/posts/:id",
    component: _74eb3239,
    name: "posts-id"
  }, {
    path: "/",
    component: _3288d140,
    name: "index"
  }, {
    path: "*",
    component: _3288d140
  }],

  fallback: false
}

export function createRouter () {
  return new Router(routerOptions)
}
