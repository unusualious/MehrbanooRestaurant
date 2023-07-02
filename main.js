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
import 'vue-cool-lightbox/dist/vue-cool-lightbox.min.css'
import 'vue-inner-image-zoom/lib/vue-inner-image-zoom.css';


createApp(App)
.use(router)
// .use(
//     Vue3Toasity,
//     {
//      rtl: true,
//       limit: 2,
//       autoClose: 7000,
//       hideProgressBar: false,
//       position: toast.POSITION.BOTTOM_CENTER,
//       pauseOnHover: true,
//       progress: 0.2,
//       theme: "colored",
//     },
//   )
.component("font-awesome-icon", FontAwesomeIcon).mount('#app')