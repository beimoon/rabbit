import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import router from "./router/index";
import store from './store/index'

//css 样式重置 和 共用样式
import 'normalize.css'
import '../src/assets/styles/common.less'


//插件use使用
let vm=createApp(App)
//使用vue路由的配置js
vm.use(router)
vm.use(store)

vm.mount('#app')
