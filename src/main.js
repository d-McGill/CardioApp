import { createApp } from 'vue'
import App from './App.vue'

import VueApexCharts from 'vue3-apexcharts'

import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'

import router from './router'

let app = createApp(App)

app.use(ElementPlus)
app.use(router)
app.use(VueApexCharts)
app.mount('#app')