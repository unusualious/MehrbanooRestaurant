<script setup>
import Header from '../components/Home/Header.vue'
import HomeCarouselSection from '../components/Home/HomeCarouselSection.vue'; 
import TabsSection from '../components/Home/TabsSection.vue';
import About from '../components/Home/About.vue';
import Services from '../components/Home/Services.vue';
// import MenuSecond from '../components/Home/MenuSecond.vue';
</script>
<template>

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
<Header />
<HomeCarouselSection />
<!--=== Start Banner Section ===-->
<About />
<TabsSection />
<!-- <MenuSecond /> -->
<Services />
<!--=== Start Testimonial Section ===-->
<section class="testimonial-section-one dark-black-bg p-r z-1 pt-120 pb-120">
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
                        <img src="/src/images/testimonial/thumb-1.jpg" class="testimonial-img-one" alt="Testimonial Image">
                        <img src="/src/images/testimonial/thumb-2.jpg" class="testimonial-img-two" alt="Testimonial Image">
                        <img src="/src/images/testimonial/thumb-3.jpg" class="testimonial-img-three" alt="Testimonial Image">
                    </div>
                </div>
                <div class="col-lg-8">
                    <!--=== Testimonial Wrapper ===-->
                    <div class="testimonial-wrapper-one wow fadeInRight mr-lg-100">
                        <!--=== Testimonial Slider ===-->
                        <div class="testimonial-slider-one">
                            <!--=== Single Testimonial ===-->
                            <div class="single-testimonial-one">
                                <div class="testimonial-inner-content">
                                    <p>سلام و خسته نباشید به همه کارکنان خوب رستوران مهربانو
من امشب مهمونی داشتم و بخاطر اینکه شاغلم وقت نداشتم خودم غذاهامو آماده کنم برای همین از شما که تعریفشو از یکی از دوستام شنیده بودم غذا سفارش دادم و واقعا سربلندم کرد. تمام غذاها یکدست و شبیه به هم و باکیفیت عالی طبخ و دیزاین شده بودن.</p>
                                    <div class="author-quote-box d-flex justify-content-between">
                                        <div class="author-title-thumb d-flex">
                                            <div class="author-thumb">
                                                <img src="/src/images/testimonial/author-thumb-1.jpg" alt="Author Thumb">
                                            </div>
                                            <div class="author-title">
                                                <h3 class="title">حمید جلیلی</h3>
                                                <p class="position">مشتری جدید</p>
                                            </div>
                                        </div>
                                        <div class="quote">
                                            <i class="flaticon-right-quote"></i>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <!--=== Single Testimonial ===-->
                            <div class="single-testimonial-one">
                                <div class="testimonial-inner-content">
                                    <p>سلام و خسته نباشید به همه کارکنان خوب رستوران مهربانو
من امشب مهمونی داشتم و بخاطر اینکه شاغلم وقت نداشتم خودم غذاهامو آماده کنم برای همین از شما که تعریفشو از یکی از دوستام شنیده بودم غذا سفارش دادم و واقعا سربلندم کرد. تمام غذاها یکدست و شبیه به هم و باکیفیت عالی طبخ و دیزاین شده بودن.</p>
                                    <div class="author-quote-box d-flex justify-content-between">
                                        <div class="author-title-thumb d-flex">
                                            <div class="author-thumb">
                                                <img src="/src/images/testimonial/author-thumb-1.jpg" alt="Author Thumb">
                                            </div>
                                            <div class="author-title">
                                                <h3 class="title">Brian A. Barnes</h3>
                                                <p class="position">CEO & Founder</p>
                                            </div>
                                        </div>
                                        <div class="quote">
                                            <i class="flaticon-right-quote"></i>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section><!--=== End Testimonial Section ===-->

<!--=== Start Footer ===-->
<footer class="footer-default light-gray-bg p-r z-1 ">
    <div class="bg_cover" style="background-image: url(/src/images/bg/dot-bg.png);"></div>
    <!--=== Footer Widget Area ===-->
    <div class="footer-widget-area pb-10 pb-40">
        <div class="container">
            <div class="row">
                <div class="col-md-4">
                    <!--=== Footer Widget ===-->
                    <div class="footer-widget about-company-widget  wow fadeInUp">
                        <div class="footer-content">
                            <a href="index.html" class="footer-logo mb-30"><img src="/src/images/logo/logo.png" alt="Brand Logo"></a>
                        </div>
                    </div>
                </div>
                <div class=" col-md-4">
                    <!--=== Footer Widget ===-->
                    <div class="footer-widget footer-nav-widget  wow fadeInDown">
                        <h4 class="widget-title">دسترسی سریع</h4>
                        <div class="footer-nav-content">
                            <ul class="footer-nav">
                                <li><a href="#">درباره رستوران</a></li>
                                <li><a href="#">اطلاعات تماس</a></li>
                                <li><a href="#">پیشنهاد های ویژه</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div class="col-md-4">
                    <!--=== Footer Widget ===-->
                    <div class="footer-widget contact-info-widget pl-lg-70 mb-40 wow fadeInDown">
                        <div class="contact-info-box mb-20">
                            <h4 class="widget-title">تماس با ما</h4>
                            <span class="title">شماره تماس : :</span>
                            <a href="tel:+125865892">+98 2586 5892</a>
                            <p><a href="mailto:hello@example.com">hello@example.com</a></p>
                        </div>
                        <div class="contact-info-box mb-20">
                            <span class="title">نشانی : نیاوران، کوچه </span>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <!--=== Copyright Area ===-->
    <div class="copyright-area border-top-1">
        <div class="container">
            <div class="row">
                <div class="col-md-12">
                    <!--=== Copyright Text ===-->
                    <div class="copyright-text">
                        <P>&copy; کلیه حقوق این سایت برای رستوران مهربانو محفوظ است</P>
                    </div>
                </div>

            </div>
        </div>
    </div>
</footer><!--=== End Footer ===-->
<!--=== End Reservation Section ===-->
<!--====== Back To Top  ======-->
<a href="#" class="back-to-top" ><i class="far fa-angle-up"></i></a>
    
</template>