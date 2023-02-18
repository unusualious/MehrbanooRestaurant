<script setup>
import Header from '../components/Home/Header.vue'
import HomeCarouselSection from '../components/Home/HomeCarouselSection.vue'; 
import TabsSection from '../components/Home/TabsSection.vue';
import About from '../components/Home/About.vue';
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

<!--=== Start Testimonial Section ===-->
<section class="testimonial-section-one dark-black-bg p-r z-1 pt-120 pb-120">
    <div class="shape line-shape-one"><span><img src="/src/images/shape/line-1.png" alt="Shape"></span></div>
    <div class="shape shape-one"><span><img src="/src/images/shape/element-1.png" alt=""></span></div>
    <div class="container">
        <div class="row justify-content-center">
            <div class="col-xl-6 col-lg-10">
                <!--=== Section Title ===-->
                <div class="section-title text-center text-white mb-50 wow fadeInDown">
                    <span class="sub-title">Foods reviews</span>
                    <h2>Global Customer Feedback</h2>
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
                                    <p>Sit amet consectetur adipiscing elit A sapien pellentesque nisl dignissim ultrices enim amet elementum. Eu ut velit elit posuere fusce ullamcorper maecenas fermentum nam elit 
                                        dolor ornare nec sociis aliquet facilisis.</p>
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
                            <!--=== Single Testimonial ===-->
                            <div class="single-testimonial-one">
                                <div class="testimonial-inner-content">
                                    <p>Sit amet consectetur adipiscing elit A sapien pellentesque nisl dignissim ultrices enim amet elementum. Eu ut velit elit posuere fusce ullamcorper maecenas fermentum nam elit 
                                        dolor ornare nec sociis aliquet facilisis.</p>
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
<!--=== Start Instagram Section ===-->
<section class="instagram-gallery pt-130 pb-100">
    <div class="container-fluid">
        <div class="row">
            <div class="col-xl-2 col-lg-3 col-md-4 col-sm-6">
                <!--=== Instagram Box ===-->
                <div class="instagram-box mb-30 wow fadeInUp">
                    <div class="instagram-img">
                        <img src="/src/images/instagram/insta-1.jpg" alt="Instagram Image">
                        <div class="insta-overlay"></div>
                        <a href="/src/images/instagram/insta-1.jpg" class="img-popup insta-icon"><i class="fab fa-instagram"></i></a>
                    </div>
                </div>
            </div>
            <div class="col-xl-2 col-lg-3 col-md-4 col-sm-6">
                <!--=== Instagram Box ===-->
                <div class="instagram-box mb-30 wow fadeInDown">
                    <div class="instagram-img">
                        <img src="/src/images/instagram/insta-2.jpg" alt="Instagram Image">
                        <div class="insta-overlay"></div>
                        <a href="/src/images/instagram/insta-2.jpg" class="img-popup insta-icon"><i class="fab fa-instagram"></i></a>
                    </div>
                </div>
            </div>
            <div class="col-xl-2 col-lg-3 col-md-4 col-sm-6">
                <!--=== Instagram Box ===-->
                <div class="instagram-box mb-30 wow fadeInUp">
                    <div class="instagram-img">
                        <img src="/src/images/instagram/insta-3.jpg" alt="Instagram Image">
                        <div class="insta-overlay"></div>
                        <a href="/src/images/instagram/insta-3.jpg" class="img-popup insta-icon"><i class="fab fa-instagram"></i></a>
                    </div>
                </div>
            </div>
            <div class="col-xl-2 col-lg-3 col-md-4 col-sm-6">
                <!--=== Instagram Box ===-->
                <div class="instagram-box mb-30 wow fadeInDown">
                    <div class="instagram-img">
                        <img src="/src/images/instagram/insta-4.jpg" alt="Instagram Image">
                        <div class="insta-overlay"></div>
                        <a href="/src/images/instagram/insta-4.jpg" class="img-popup insta-icon"><i class="fab fa-instagram"></i></a>
                    </div>
                </div>
            </div>
            <div class="col-xl-2 col-lg-3 col-md-4 col-sm-6">
                <!--=== Instagram Box ===-->
                <div class="instagram-box mb-30 wow fadeInUp">
                    <div class="instagram-img">
                        <img src="/src/images/instagram/insta-5.jpg" alt="Instagram Image">
                        <div class="insta-overlay"></div>
                        <a href="/src/images/instagram/insta-5.jpg" class="img-popup insta-icon"><i class="fab fa-instagram"></i></a>
                    </div>
                </div>
            </div>
            <div class="col-xl-2 col-lg-3 col-md-4 col-sm-6">
                <!--=== Instagram Box ===-->
                <div class="instagram-box mb-30 wow fadeInDown">
                    <div class="instagram-img">
                        <img src="/src/images/instagram/insta-6.jpg" alt="Instagram Image">
                        <div class="insta-overlay"></div>
                        <a href="/src/images/instagram/insta-6.jpg" class="img-popup insta-icon"><i class="fab fa-instagram"></i></a>
                    </div>
                </div>
            </div>
            <div class="col-xl-2 col-lg-3 col-md-4 col-sm-6">
                <!--=== Instagram Box ===-->
                <div class="instagram-box mb-30 wow fadeInUp">
                    <div class="instagram-img">
                        <img src="/src/images/instagram/insta-7.jpg" alt="Instagram Image">
                        <div class="insta-overlay"></div>
                        <a href="/src/images/instagram/insta-7.jpg" class="img-popup insta-icon"><i class="fab fa-instagram"></i></a>
                    </div>
                </div>
            </div>
            <div class="col-xl-2 col-lg-3 col-md-4 col-sm-6">
                <!--=== Instagram Box ===-->
                <div class="instagram-box mb-30 wow fadeInDown">
                    <div class="instagram-img">
                        <img src="/src/images/instagram/insta-8.jpg" alt="Instagram Image">
                        <div class="insta-overlay"></div>
                        <a href="/src/images/instagram/insta-8.jpg" class="img-popup insta-icon"><i class="fab fa-instagram"></i></a>
                    </div>
                </div>
            </div>
            <div class="col-xl-2 col-lg-3 col-md-4 col-sm-6">
                <!--=== Instagram Box ===-->
                <div class="instagram-box mb-30 wow fadeInUp">
                    <div class="instagram-img">
                        <img src="/src/images/instagram/insta-9.jpg" alt="Instagram Image">
                        <div class="insta-overlay"></div>
                        <a href="/src/images/instagram/insta-9.jpg" class="img-popup insta-icon"><i class="fab fa-instagram"></i></a>
                    </div>
                </div>
            </div>
            <div class="col-xl-2 col-lg-3 col-md-4 col-sm-6">
                <!--=== Instagram Box ===-->
                <div class="instagram-box mb-30 wow fadeInDown">
                    <div class="instagram-img">
                        <img src="/src/images/instagram/insta-10.jpg" alt="Instagram Image">
                        <div class="insta-overlay"></div>
                        <a href="/src/images/instagram/insta-10.jpg" class="img-popup insta-icon"><i class="fab fa-instagram"></i></a>
                    </div>
                </div>
            </div>
            <div class="col-xl-2 col-lg-3 col-md-4 col-sm-6">
                <!--=== Instagram Box ===-->
                <div class="instagram-box mb-30 wow fadeInUp">
                    <div class="instagram-img">
                        <img src="/src/images/instagram/insta-11.jpg" alt="Instagram Image">
                        <div class="insta-overlay"></div>
                        <a href="/src/images/instagram/insta-11.jpg" class="img-popup insta-icon"><i class="fab fa-instagram"></i></a>
                    </div>
                </div>
            </div>
            <div class="col-xl-2 col-lg-3 col-md-4 col-sm-6">
                <!--=== Instagram Box ===-->
                <div class="instagram-box mb-30 wow fadeInDown">
                    <div class="instagram-img">
                        <img src="/src/images/instagram/insta-12.jpg" alt="Instagram Image">
                        <div class="insta-overlay"></div>
                        <a href="/src/images/instagram/insta-12.jpg" class="img-popup insta-icon"><i class="fab fa-instagram"></i></a>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section><!--=== End Instagram Section ===-->
<!--=== Start Footer ===-->
<footer class="footer-default light-red-bg p-r z-1 pt-80">
    <div class="dot-bg bg_cover" style="background-image: url(/src/images/bg/dot-bg.png);"></div>
    <!--=== Footer Widget Area ===-->
    <div class="footer-widget-area pb-10 pb-40">
        <div class="container">
            <div class="row">
                <div class="col-lg-3 col-md-6">
                    <!--=== Footer Widget ===-->
                    <div class="footer-widget about-company-widget pr-lg-30 mb-40 wow fadeInUp">
                        <div class="footer-content">
                            <a href="index.html" class="footer-logo mb-30"><img src=".././images/logo/logo.png" alt="Brand Logo"></a>
                            <p>Sit amet consectetur adipiscing elitsue risus mauris adipis</p>
                            <form>
                                <div class="form_group">
                                    <label><i class="far fa-arrow-right"></i></label>
                                    <input type="email" class="form_control" placeholder="Email Address" name="email">
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
                <div class="col-lg-2 col-md-6">
                    <!--=== Footer Widget ===-->
                    <div class="footer-widget footer-nav-widget pl-lg-30 mb-40 wow fadeInDown">
                        <h4 class="widget-title">Quick Links</h4>
                        <div class="footer-nav-content">
                            <ul class="footer-nav">
                                <li><a href="#">About Company</a></li>
                                <li><a href="#">Home Shop</a></li>
                                <li><a href="#">Our Menu (CMS)</a></li>
                                <li><a href="#">Shop (Ecom)</a></li>
                                <li><a href="#">Recipes</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div class="col-lg-4 col-md-6">
                    <!--=== Footer Widget ===-->
                    <div class="footer-widget footer-nav-widget-two pl-lg-70 mb-40 wow fadeInUp">
                        <h4 class="widget-title">Products</h4>
                        <div class="footer-nav-content">
                            <ul class="footer-nav">
                                <li><a href="#">Hamburger</a></li>
                                <li><a href="#">Chicken Burger</a></li>
                                <li><a href="#">Vegetable Pizza</a></li>
                                <li><a href="#">Chicken Roll</a></li>
                                <li><a href="#">Ice-Cream</a></li>
                            </ul>
                            <ul class="footer-nav">
                                <li><a href="#">Potato</a></li>
                                <li><a href="#">Organic Juice</a></li>
                                <li><a href="#">Lemon Juice</a></li>
                                <li><a href="#">MuTton Tikka</a></li>
                                <li><a href="#">Seafoods</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div class="col-lg-3 col-md-6">
                    <!--=== Footer Widget ===-->
                    <div class="footer-widget contact-info-widget pl-lg-70 mb-40 wow fadeInDown">
                        <div class="contact-info-box mb-20">
                            <span class="title">Call for order:</span>
                            <h3><a href="tel:+125865892">+1 2586 5892</a></h3>
                            <p><a href="mailto:hello@example.com">hello@example.com</a></p>
                        </div>
                        <div class="contact-info-box mb-20">
                            <span class="title">Location :</span>
                            <p>119 Tanglewood Lane
                                Gulfport, MS 39503</p>
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
                <div class="col-lg-6">
                    <!--=== Copyright Text ===-->
                    <div class="copyright-text">
                        <P>&copy; 2022 Qichen, All Rights Reserved</P>
                    </div>
                </div>
                <div class="col-lg-6">
                    <!--=== Copyright Nav ===-->
                    <div class="copyright-nav float-lg-end">
                        <ul>
                            <li><a href="#">Setting & Privacy</a></li>
                            <li><a href="#">Faqs</a></li>
                            <li><a href="#">Food Menu</a></li>
                        </ul>
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