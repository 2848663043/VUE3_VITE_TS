import { createApp } from 'vue'
import App from './App.vue'
import router from './router/index'
import store from './store/index'
import axios from './api/api'
// 全局ctx(this) 上挂载 $axios
const app = createApp(App)
app.config.globalProperties.$api = axios

app.use(router).use(store).mount('#app')
