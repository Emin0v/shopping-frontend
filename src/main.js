import { createApp } from 'vue'
import App from './App.vue'
import VueAxios from "vue-axios"
import axios from 'axios'
import router from './router'
// import {BASE_URL} from "@/common/config"
// import 'bootstrap/dist/css/bootstrap.min.css'

//  css 
import './assets/css/animate.css'
// import "./assets/css/bootstrap.min.css"
// import "./assets/css/font-awesome.min.css"
import "./assets/css/main.css"
// import "./assets/css/prettyPhoto.css"
import "./assets/css/price-range.css"
import "./assets/css/responsive.css"
import authHeader from './common/auth'

axios.defaults.headers.common = authHeader();

createApp(App).use(router).use(VueAxios, axios).mount('#body')
