import { createRouter } from 'vue-router'
import Home from './views/Home'
import AboutUs from './views/AboutUs'
import Blog from './views/Blog'
import Gallery from './views/Gallery'
import Contact from './views/Contact'

const routes = [
    { path: '/', component: Home },
    { path: '/aboutus', component: AboutUs },
    { path: '/blog', component: Blog },
    { path: '/gallery', component: Gallery },
    { path: '/contact', component: Contact },
  ]
const router = createRouter({
    routes
}) 

export default router;