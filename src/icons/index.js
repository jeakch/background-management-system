import Vue from 'vue'
import SvgIcon from '@/components/SvgIcon' // svg component

// register globally
Vue.component('svg-icon', SvgIcon)

//! require.context(三个参数) 导入 某个文件夹下的某些文件
//* 参数1：文件夹
//* 参数2. 是否读取该文件夹下面的子文件夹
//* 参数3. 表示的是读取哪些类型的文件
const req = require.context('./svg', false, /\.svg$/)

// * 作用：挨个导入的简洁语法
const requireAll = requireContext => requireContext.keys().map(requireContext)
requireAll(req)

//上面这种就是下面的简洁写法
// import dashbord from '@/icons/svg/dashbord'
// import example from '@/icons/svg/example'
// import eye-open from '@/icons/svg/eye-open'
