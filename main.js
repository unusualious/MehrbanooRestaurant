import { createApp } from 'vue'
import App from './src/App.vue'
// import 'owl.carousel/dist/assets/owl.carousel.css';
// import 'owl.carousel';
import "bootstrap/dist/css/bootstrap.min.css"
import './src/assets/main.css'
import "bootstrap"
import 'animate.css';

import { createRouter,createWebHistory} from 'vue-router'

const routes = [{ path: '/', redirect: '/index.html' }]

const router = createRouter({
    // 4. Provide the history implementation to use. We are using the hash history for simplicity here.
    history: createWebHistory(),
    routes, // short for `routes: routes`
  })
  

createApp(App).use(router).mount('#app')