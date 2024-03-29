import { createApp } from 'vue'
import App from './App.vue'
import router from '../src/router' 
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";

//@Bootstrap icons
import "bootstrap-icons/font/bootstrap-icons.min.css"

createApp(App).use(router).mount('#app')
