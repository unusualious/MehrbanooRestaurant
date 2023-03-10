import { createRouter, createWebHistory } from 'vue-router'
import Home from '@/views/Home.vue'
import AboutUs from '@/views/AboutUs.vue'
import Blog from '@/views/Blog.vue'
import Gallery from '@/views/Gallery.vue'
import Contact from '@/views/Contact.vue'
// import 'owl.carousel/dist/assets/owl.carousel.css';
// import 'owl.carousel';
import "bootstrap/dist/css/bootstrap.min.css"
import '../src/assets/main.css'
import "bootstrap"
import 'animate.css'
import { library } from "@fortawesome/fontawesome-svg-core";
import { faPhoneFlip,faPhone,faMagnifyingGlass,faLongArrowAltRight} from "@fortawesome/free-solid-svg-icons";


library.add(faPhoneFlip,faPhone,faMagnifyingGlass,faLongArrowAltRight);

const routes = [
    { path: '/', component: Home },

    { path: '/aboutus', component: AboutUs },
    { path: '/blog', component: Blog },
    { path: '/gallery', component: Gallery },
    { path: '/contact', component: Contact },
]

const router = createRouter({ history: createWebHistory(), routes })
export default router