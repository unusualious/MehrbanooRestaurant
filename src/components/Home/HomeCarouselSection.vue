<template lang="">
    <div>
        <!-- <carousel>

    <img src="https://placeimg.com/200/200/any?1">

    <img src="https://placeimg.com/200/200/any?2">

    <img src="https://placeimg.com/200/200/any?3">

    <img src="https://placeimg.com/200/200/any?4">

</carousel> -->
<!-- :navigation="true" -->
<Swiper :slides-per-view="1" :modules="modules"
    :loop="loop"
    :autoplay="autoplay"
    speed="3000"
    :scrollbar="{ draggable: true }"  @swiper="onSwiper"
    @slideChange="onSlideChange">
    <!-- <swiper-slide v-for="n in 10" :key="n" >
        <img :src="'https://picsum.photos/1920/1080?random'+n" />
    </swiper-slide> -->
    <swiper-slide>
        <section class="bannereo">
    <div class="container">
        <div class="row align-items-center">
            <div class="col-lg-7 col-12">
                <!--=== Hero Content ===-->
                <div class="bannereo-contents mb-40 pr-lg-40">
                    <h3  v-if="!isMobile()"> یک سفر خوشمزه را آغاز کنیم </h3>
                    <h2  v-if="!isMobile()">      غذای بیرون بر</h2>
                    <p class="wow fadeInDown" data-wow-delay=".7s">
                  
ارسال غذا  با رعایت کلیه نکات بهداشتی و بسته‌بندی اصولی انجام می‌شود. همچنین کلیه سفارشات، متناسب با تعداد آن‌ها، با موتور یا ماشین‌های مخصوص و مجهز به باکس حفظ دما و قفسه نگهدارنده حمل می‌شوند تا غذا با بالاترین کیفیت و کاملاً گرم تحویل گردد.
                    </p>
                    <div  v-if="!isMobile()" class="hero-button wow animate__animated animate__fadeInUp" data-wow-delay=".9s">
         
                        <a href="menu-seafood.html" class="main-btn green"><span>ثبت سفارش<i class="far fa-arrow-right"></i></span></a>
                    </div>
                </div>
            </div>
            <div class="col-lg-5 .d-none .d-sm-block">
                <!--=== Hero Image ===-->
                <div class="bannereo-img wow animate__animated animate__fadeInRight" data-wow-delay=".7s">
                    <img src="/src/images/hero/ed3err_mehrbanoo.jpg" alt="Hero Image">
                </div>
            </div>
        </div>
    </div>
</section><!--=== End Banner Section ===-->
<img v-if="!isMobile()" src="/src/images/bg/slide1_mehrbanoo.jpg" alt="">
        <img v-else src="/src/images/bg/slide-mobile-1ess.jpg" alt="">
    </swiper-slide>
    <swiper-slide>
        <section class="bannereo">
    <div class="container">
        <div class="row align-items-center">
            <div class="col-lg-7 col-12">
                <!--=== Hero Content ===-->
                <div class="bannereo-contents mb-40 pr-lg-40">
                    <h3  v-if="!isMobile()"> یک سفر خوشمزه را آغاز کنیم </h3>
                    <h2  v-if="!isMobile()">      غذای بیرون بر</h2>
                    <p class="wow fadeInDown" data-wow-delay=".7s">
                  
ارسال غذا  با رعایت کلیه نکات بهداشتی و بسته‌بندی اصولی انجام می‌شود. همچنین کلیه سفارشات، متناسب با تعداد آن‌ها، با موتور یا ماشین‌های مخصوص و مجهز به باکس حفظ دما و قفسه نگهدارنده حمل می‌شوند تا غذا با بالاترین کیفیت و کاملاً گرم تحویل گردد.
                    </p>
                    <div  v-if="!isMobile()" class="hero-button wow animate__animated animate__fadeInUp" data-wow-delay=".9s">
                     
                        <a href="menu-seafood.html" class="main-btn green"><span>ثبت سفارش<i class="far fa-arrow-right"></i></span></a>
                    </div>
                </div>
            </div>
            <div class="col-lg-5 .d-none .d-sm-block">
                <!--=== Hero Image ===-->
                <div class="bannereo-img wow animate__animated animate__fadeInRight" data-wow-delay=".7s">
                    <img src="/src/images/hero/ed3err_mehrbanoo.jpg" alt="Hero Image">
                </div>
            </div>
        </div>
    </div>
</section><!--=== End Banner Section ===-->
<img v-if="!isMobile()" src="/src/images/bg/slide2_mehrbanoo.jpg" alt="">
        <img v-else src="/src/images/bg/slide-mobile-2ess.jpg" alt="">
    </swiper-slide>
</Swiper>
    </div>

</template>
<script >
import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from 'swiper';

// Import Swiper Vue.js components
import { Swiper, SwiperSlide } from 'swiper/vue';
import 'swiper/scss';
import 'swiper/scss/navigation';
import 'swiper/scss/pagination';
export default {
    components: {
        Swiper,
        SwiperSlide,
    },
    setup() {
        const onSwiper = (swiper) => {
            console.log(swiper);
        };
        const onSlideChange = () => {
            
        };
        return {
            onSwiper,
            onSlideChange,
            modules: [Navigation, Pagination, Scrollbar, A11y, Autoplay],
            grabCursor: true,
            loop: true,
            speed:3500,
            centeredSlides: true,
            slidesPerView: 'auto',
            autoplay: {
                delay: 80000,
            },
        };
    },
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
<style lang="">
    
</style>