
<template>

<HomeCarouselSection />
<!--=== Start Banner Section ===-->
<About />
<TabsSection />
<!-- <MenuSecond /> -->
<Services />
<Blog/>

<!--=== Start Testimonial Section ===-->
<section class="testimonial-section-one p-r z-1 ">
    <div class="shape line-shape-one"><span><img src="/src/images/shape/line-1.png" alt="Shape"></span></div>
    <div class="shape shape-one"><span><img src="/src/images/hero/01foodstocks.png" alt=""></span></div>
    <div class="container">
        <div class="row justify-content-center">
            <div class="col-xl-6 col-lg-10">
                <!--=== Section Title ===-->
                <div class="section-title text-center text-white mb-50 wow fadeInDown">
                    <span class="sub-title">بازخورد های مشتریان</span>
                </div>
            </div>
            <div class="row">
                <div class="col-lg-4">
                    <!--=== Testimonial Image Box ===-->
                    <div class="testimonial-one_image-box p-r wow fadeInLeft">
                        <img src="/src/images/testimonial/coconut.png" class="testimonial-img-one" alt="Testimonial Image">
                        <img src="/src/images/testimonial/tomoto-draw.png" class="testimonial-img-three" alt="Testimonial Image">
                    </div>
                </div>
                <div class="col-lg-8">                    
                    <!--=== Testimonial Wrapper ===-->
                    <RecentComments />
                </div>
            </div>
        </div>
    </div>
</section><!--=== End Testimonial Section ===-->

<!--=== Start Footer ===-->

<!--=== End Reservation Section ===-->
<!--====== Back To Top  ======-->
<a href="#" class="back-to-top" ><i class="far fa-angle-up"></i></a>
    
</template>
<script >
    import HomeCarouselSection from '../components/Home/HomeCarouselSection.vue'
    import TabsSection from '../components/Home/TabsSection.vue'
    import About from '../components/Home/About.vue'
    import Services from '../components/Home/Services.vue'
    import Blog from '../components//Home/Blog.vue'
    import RecentComments from '../components/Home/RecentComments.vue'
    // import MenuSecond from '../components/Home/MenuSecond.vue';
    
export default {
    name:"home",
    components: {
        HomeCarouselSection,TabsSection,About,Services, Blog, RecentComments
  },
  data() {
    return {
      count: 0
    }
  },

  // Methods are functions that mutate state and trigger updates.
  // They can be bound as event listeners in templates.
  methods: {
    increment() {
      this.count++
    },
    isMobile() {
   if(/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
     return true
   } else {
     return false
   }
 }
  },

  // Lifecycle hooks are called at different stages
  // of a component's lifecycle.
  // This function will be called when the component is mounted.
  mounted() {
    console.log(`The initial count is ${this.count}.`)
  },
}
</script>