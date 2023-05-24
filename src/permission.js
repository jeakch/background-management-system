// import router from './router'
// import store from './store'
// import { Message } from 'element-ui'
// import NProgress from 'nprogress' // progress bar
// import 'nprogress/nprogress.css' // progress bar style
// import { getToken } from '@/utils/auth' // get token from cookie
// import getPageTitle from '@/utils/get-page-title'

// NProgress.configure({ showSpinner: false }) // NProgress Configuration

//! whiteList 白名单：没token 也能访问的页面(登录、注册、404、忘记密码)
//? const whiteList = ['/login'，'/404'] // no redirect whitelist

// ! beforeEach 前置导航守卫 页面跳转的时候 会执行beforeEach
// ? router.beforeEach(async(to, from, next) => {
//   // start progress bar
//   NProgress.start()

//   // set page title
// TODO: 网页标题
//   document.title = getPageTitle(to.meta.title)

//   // determine whether the user has logged in
// TODO: 判断是否有token
//   const hasToken = getToken()

//   if (hasToken) {
//TODO：    如果这个条件成立的话，表示有token
//     if (to.path === '/login') {
//       // if is logged in, redirect to the home page
//? 用户已经登陆了，不能访问登录页
//       next({ path: '/' })
//       NProgress.done()
//     } else {
//       const hasGetUserInfo = store.getters.name
//       if (hasGetUserInfo) {
//         next()
//       } else {
//         try {
//           // get user info
//           await store.dispatch('user/getInfo')

//           next()
//         } catch (error) {
//           // remove token and go to login page to re-login
//           await store.dispatch('user/resetToken')
//           Message.error(error || 'Has Error')
//           next(`/login?redirect=${to.path}`)
//           NProgress.done()
//         }
//       }
//     }
//   } else {
//     /* has no token*/
//?   没token的情况
//     if (whiteList.indexOf(to.path) !== -1) {
//       // in the free login whitelist, go directly
//       next()
//     } else {
//       // other pages that do not have permission to access are redirected to the login page.
//       next(`/login?redirect=${to.path}`)
//       NProgress.done()
//     }
//   }
// })

// router.afterEach(() => {
//   // finish progress bar
//   NProgress.done()
// })

import router from './router'
router.beforeEach((to, form, next) => {
  console.log('导航守卫逻辑')
  next()
})
