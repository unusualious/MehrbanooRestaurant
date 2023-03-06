import { createApp } from 'vue'
import App from './src/App.vue'
// import 'owl.carousel/dist/assets/owl.carousel.css';
// import 'owl.carousel';
import "bootstrap/dist/css/bootstrap.min.css"
import './src/assets/main.css'
import "bootstrap"
import 'animate.css';
import router from './router'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

createApp(App).use(router).component("font-awesome-icon", FontAwesomeIcon).mount('#app')