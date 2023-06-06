import { createApp } from 'vue'
import App from './App.vue'
import './main.less'
import router from './router/index.ts'
const app = createApp(App)
app.use(router)
app.mount('#app')
