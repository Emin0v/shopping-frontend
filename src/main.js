import { createApp } from 'vue'
import App from './App.vue'
import VueAxios from "vue-axios"
import axios from 'axios'
import router from './router'
import {BASE_URL} from "@/common/config"

axios.defaults.baseURL = BASE_URL;

createApp(App).use(router).use(VueAxios, axios).mount('#body')
