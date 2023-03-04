import { createApp } from 'vue'
import { createRouter,createWebHistory } from 'vue-router'
// import router from './router'
import App from '@/App.vue'
import Home from '@/views/Home.vue'
import AboutUs from '@/views/AboutUs.vue'
import Blog from '@/views/Blog.vue'
import Gallery from '@/views/Gallery.vue'
import Contact from '@/views/Contact.vue'
// import 'owl.carousel/dist/assets/owl.carousel.css';
// import 'owl.carousel';
import "bootstrap/dist/css/bootstrap.min.css"
import './assets/main.css'
import "bootstrap"
import 'animate.css'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { library } from "@fortawesome/fontawesome-svg-core";
import { faPhone,faMagnifyingGlass,faLongArrowAltRight} from "@fortawesome/free-solid-svg-icons";
const router = createRouter({
    history:createWebHistory(),
    routes : [
        { path: '/',  name: 'Home', component: Home },
        { path: '/aboutus', component: AboutUs },
        { path: '/blog', component: Blog },
        { path: '/gallery', component: Gallery },
        { path: '/contact', component: Contact },
      ]
})
library.add(faPhone,faMagnifyingGlass,faLongArrowAltRight);

createApp(App)
.use(router)
.component("font-awesome-icon", FontAwesomeIcon)
.mount('#app')
