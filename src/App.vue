<script>
import Home from './views/Home.vue'
import Header from './components/Home/Header.vue'
import HeaderMobile from './components/Home/HeaderMobile.vue'
import Footer from './components/Home/footer.vue'
export default {
    name:"home",
    components: {
        Header,HeaderMobile,Footer,Home
  },
  data() {
    return {
      users: 0
    }
  },
  // Methods are functions that mutate state and trigger updates.
  // They can be bound as event listeners in templates.
  methods: {
    isMobile() {
   if(/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
     return true
   } else {
     return false
   }
 }
  },
}
</script>

<template>
  <main>

    <!-- <div class="preloader">
      <div class="loader">
          <div class="pre-shadow"></div>
          <div class="pre-box"></div>
      </div>
  </div> -->
    <!--====== End Preloader ======-->
    <!--====== Search From ======-->
    <div class="modal fade search-modal" id="search-modal">
      <div class="modal-dialog modal-dialog-centered">
        <div class="modal-content">
          <form>
            <div class="form_group">
              <input type="text" class="form_control" placeholder="Search here" name="search">
              <label><i class="fa fa-search"></i></label>
            </div>
          </form>
        </div>
      </div>
    </div><!--====== Search From ======-->
    <!--====== Start Header ======-->
    <Header v-if="!isMobile()" />
    <HeaderMobile v-else />
    <!-- <TheWelcome /> -->
    <router-view></router-view>
    <Footer/>
  </main>
</template>