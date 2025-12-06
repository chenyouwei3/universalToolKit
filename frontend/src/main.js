import {createApp} from 'vue'
import App from './App.vue'
import './style.css';
import Antd from 'ant-design-vue'
import router from './router'

const app = createApp(App)
app.use(Antd) // 全局注册 Ant Design Vue 组件
app.use(router) // 注册路由插件
app.mount('#app') // 挂载 Vue 应用到页面中的 #app 元素
