import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import ElementPlus from '@/assets/js/element-plus.js'
import '@/assets/css/global.scss'
// import 'element-plus/packages/theme-chalk/src/base.scss'
import '@/assets/css/element-variables.scss'
import ajax from '@/service/index'


// import ElementPlus from 'element-plus'
// import 'element-plus/lib/theme-chalk/index.css'
const app = createApp(App)
app.config.globalProperties.$ajax = ajax
app.use(ElementPlus)
app.use(store)
app.use(router)
app.mount('#app')
