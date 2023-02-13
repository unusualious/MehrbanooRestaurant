<script setup>
import Header from '../components/Home/Header.vue'
import HomeCarouselSection from '../components/Home/HomeCarouselSection.vue'; 
import TabsSection from '../components/Home/TabsSection.vue';
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
<TabsSection />
<!--=== Start Category Section ===-->
<section class="category-bg-section pt-70 pb-80 p-r z-1" style="background-image: url(/src/images/bg/category-bg-1.jpg);">
    <div class="container">
        <div class="row justify-content-center">
            <div class="col-xl-6 col-lg-10">
                <!--=== Section Title ===-->
                <div class="section-title text-center text-white mb-50 wow animate__animated animate__fadeInDown">
                    <span class="sub-title">محبوب ترین غذاهای ما</span>
                    <h2>یک منوی دلپذیر برای هر خوش سلیقه ای</h2>
                </div>
            </div>
        </div>
        <div class="row">
            <div class="col-lg-4 col-md-6 col-sm-12">
                <!--=== Single Category Item ===-->
                <div class="single-category-item mb-30 wow animate__animated animate__fadeInUp">
                    <div class="icon">
                        <img src="/src/images/icon/icon-1.png" alt="thumb icon">
                    </div>
                    <div class="content d-flex">
                        <h3 class="title"><a href="menu-seafood.html">Pizza</a></h3>
                        <a href="menu-seafood.html" class="icon-btn"><i class="far fa-arrow-right"></i></a>
                    </div>
                </div>
            </div>
            <div class="col-lg-4 col-md-6 col-sm-12">
                <!--=== Single Category Item ===-->
                <div class="single-category-item mb-30 wow animate__animated animate__fadeInUp">
                    <div class="icon">
                        <img src="/src/images/icon/icon-2.png" alt="thumb icon">
                    </div>
                    <div class="content d-flex">
                        <h3 class="title"><a href="menu-seafood.html">کباب</a></h3>
                        <a href="menu-seafood.html" class="icon-btn"><i class="far fa-arrow-right"></i></a>
                    </div>
                </div>
            </div>
            <div class="col-lg-4 col-md-6 col-sm-12">
                <!--=== Single Category Item ===-->
                <div class="single-category-item mb-30 wow animate__animated animate__fadeInUp">
                    <div class="icon">
                        <img src="/src/images/icon/icon-3.png" alt="thumb icon">
                    </div>
                    <div class="content d-flex">
                        <h3 class="title"><a href="menu-seafood.html">قرمه سبزی</a></h3>
                        <a href="menu-seafood.html" class="icon-btn"><i class="far fa-arrow-right"></i></a>
                    </div>
                </div>
            </div>
            <div class="col-lg-4 col-md-6 col-sm-12">
                <!--=== Single Category Item ===-->
                <div class="single-category-item mb-30 wow animate__animated animate__fadeInUp">
                    <div class="icon">
                        <img src="/src/images/icon/icon-4.png" alt="thumb icon">
                    </div>
                    <div class="content d-flex">
                        <h3 class="title"><a href="menu-seafood.html">قیمه نثار </a></h3>
                        <a href="menu-seafood.html" class="icon-btn"><i class="far fa-arrow-right"></i></a>
                    </div>
                </div>
            </div>
            <div class="col-lg-4 col-md-6 col-sm-12">
                <!--=== Single Category Item ===-->
                <div class="single-category-item mb-30 wow animate__animated animate__fadeInUp">
                    <div class="icon">
                        <img src="/src/images/icon/icon-5.png" alt="thumb icon">
                    </div>
                    <div class="content d-flex">
                        <h3 class="title"><a href="menu-seafood.html">قهوه</a></h3>
                        <a href="menu-seafood.html" class="icon-btn"><i class="far fa-arrow-right"></i></a>
                    </div>
                </div>
            </div>
            <div class="col-lg-4 col-md-6 col-sm-12">
                <!--=== Single Category Item ===-->
                <div class="single-category-item mb-30 wow animate__animated animate__fadeInUp">
                    <div class="icon">
                        <img src="/src/images/icon/icon-6.png" alt="thumb icon">
                    </div>
                    <div class="content d-flex">
                        <h3 class="title"><a href="menu-seafood.html">جوجه کباب</a></h3>
                        <a href="menu-seafood.html" class="icon-btn"><i class="far fa-arrow-right"></i></a>
                    </div>
                </div>
            </div>
        </div>
        <div class="row justify-content-center">
            <div class="col-xl-6 col-lg-8">
                <!--=== Quote Box ===-->
                <div class="quote-box text-center text-white wow animate__animated animate__fadeInUp">
                    <p>Need any Special Food or Any Birthday Cakes? <a href="menu-fastfood.html">رزور کنید</a></p>
                </div>
            </div>
        </div>
    </div>
</section><!--=== End Category Section ===-->
<!--=== Start About Section ===-->
<section class="about-section pt-130 pb-80">
    <div class="container">
        <div class="row align-items-center">
            <div class="col-lg-5">
                <!--=== About Content Box ===-->
                <div class="about-content-box content-box-gap mb-40 wow animate__animated animate__fadeInLeft">
                    <div class="section-title section-title-left mb-30">
                        <span class="sub-title">درباره مهربانر</span>
                        <h2>بهترین طعم ها را با ما 
                            خواهید چشید
                        </h2>
                    </div>
                    <p>ما با کادری مجرب و بی نظیر اینجا هستیم تا یک تجربه لذیذ را برایتان بیافرینیم. پس به ما فرصت دهید در سفره شما نقش آفرینی کنیم </p>
                    <a href="menu-seafood.html" class="main-btn btn-red">learn more<i class="far fa-arrow-right"></i></a>
                </div>
            </div>
            <div class="col-lg-7">
                <!--=== About Content Box ===-->
                <div class="about-image-gallery ml-lg-40">
                    <div class="row">
                        <div class="col-md-6">
                            <img src="/src/images/about/image-1.jpg" class="mb-40 wow animate__animated animate__fadeInUp" alt="About Image">
                        </div>
                        <div class="col-md-6">
                            <img src="/src/images/about/image-2.jpg" class="mb-40 wow animate__animated animate__fadeInDown" alt="About Image">
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section><!--=== End About Section ===-->
<!--=== Start Menu Section ===-->
<section class="menu-section pb-80">
    <div class="container">
        <div class="row justify-content-center">
            <div class="col-xl-6 col-lg-10">
                <!--=== Section Title ===-->
                <div class="section-title text-center mb-50 wow animate__animated animate__fadeInDown">
                    <span class="sub-title">Best food menu</span>
                    <h2>Choose Your Best Menus</h2>
                </div>
            </div>
        </div>
        <div class="row align-items-center">
            <div class="col-lg-6">
                <!--=== Menu Image Box ===-->
                <div class="menu-image-box mb-50 pl-lg-30 wow animate__animated animate__fadeInLeft">
                    <img src="/src/images/menu/menu-single-1.jpg" alt="Menu Image">
                </div>
            </div>
            <div class="col-lg-6">
                <!--=== Single Content Box ===-->
                <div class="menu-content-box mb-50">
                    <!--=== Single Menu Item ===-->
                    <div class="single-menu-item mb-30 wow animate__animated animate__fadeInUp">
                        <div class="thumb">
                            <img src="/src/images/menu/thumb-1.png" alt="">
                        </div>
                        <div class="text">
                            <h3 class="item-title-price"><a href="menu-fastfood.html" class="item-title">برنج اعلا</a><span class="dot-border"></span><span class="price">$25</span></h3>
                            <p>قیمه با بادمجان , سیب زمینی</p>
                            <ul class="ratings">
                                <li><i class="fas fa-star"></i></li>
                                <li><i class="fas fa-star"></i></li>
                                <li><i class="fas fa-star"></i></li>
                                <li><i class="fas fa-star"></i></li>
                                <li><i class="fas fa-star"></i></li>
                                <li><span><a href="#">(5k Reviews)</a></span></li>
                            </ul>
                        </div>
                    </div>
                    <!--=== Single Menu Item ===-->
                    <div class="single-menu-item mb-30 wow animate__animated animate__fadeInUp">
                        <div class="thumb">
                            <img src="/src/images/menu/thumb-2.png" alt="">
                        </div>
                        <div class="text">
                            <h3 class="item-title-price"><a href="menu-fastfood.html" class="item-title">میرزاقاسمی</a><span class="dot-border"></span><span class="price">$63</span></h3>
                            <p>با تازه ترین مواد</p>
                            <ul class="ratings">
                                <li><i class="fas fa-star"></i></li>
                                <li><i class="fas fa-star"></i></li>
                                <li><i class="fas fa-star"></i></li>
                                <li><i class="fas fa-star"></i></li>
                                <li><i class="fas fa-star"></i></li>
                                <li><span><a href="#">(5k Reviews)</a></span></li>
                            </ul>
                        </div>
                    </div>
                    <!--=== Single Menu Item ===-->
                    <div class="single-menu-item mb-30 wow animate__animated animate__fadeInUp">
                        <div class="thumb">
                            <img src="/src/images/menu/thumb-3.png" alt="">
                        </div>
                        <div class="text">
                            <h3 class="item-title-price"><a href="menu-fastfood.html" class="item-title">Baked Chicken Wings</a><span class="dot-border"></span><span class="price">$199</span></h3>
                            <p>Roasted langoustine, consommé</p>
                            <ul class="ratings">
                                <li><i class="fas fa-star"></i></li>
                                <li><i class="fas fa-star"></i></li>
                                <li><i class="fas fa-star"></i></li>
                                <li><i class="fas fa-star"></i></li>
                                <li><i class="fas fa-star"></i></li>
                                <li><span><a href="#">(5k Reviews)</a></span></li>
                            </ul>
                        </div>
                    </div>
                    <!--=== Single Menu Item ===-->
                    <div class="single-menu-item mb-30 wow animate__animated animate__fadeInUp">
                        <div class="thumb">
                            <img src="/src/images/menu/thumb-4.png" alt="">
                        </div>
                        <div class="text">
                            <h3 class="item-title-price"><a href="menu-fastfood.html" class="item-title">Seafood Pizza</a><span class="dot-border"></span><span class="price">$352</span></h3>
                            <p>Roasted langoustine, consommé</p>
                            <ul class="ratings">
                                <li><i class="fas fa-star"></i></li>
                                <li><i class="fas fa-star"></i></li>
                                <li><i class="fas fa-star"></i></li>
                                <li><i class="fas fa-star"></i></li>
                                <li><i class="fas fa-star"></i></li>
                                <li><span><a href="#">(5k Reviews)</a></span></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section><!--=== End Menu Section ===-->
<!--=== Start Chefs Section ===-->
<section class="chefs-bg-section light-red-bg pt-130 pb-100 bg_cover p-r z-1">
    <div class="dot-bg bg_cover" style="background-image: url(/src/images/bg/dot-bg.png);"></div>
    <div class="container">
        <div class="row align-items-center">
            <div class="col-xl-4 col-lg-12">
                <!--=== Chef Content Box ===-->
                <div class="chef-content-box content-box-gap mb-30 pr-lg-30 wow animate__animated animate__fadeInLeft">
                    <div class="section-title section-title-left mb-30">
                        <span class="sub-title">منوی بهترین غذاها</span>
                        <h2>بهترین های ما را دیدار کنید
                            & سرآشگز استثنایی</h2>
                    </div>
                    <ul class="check-style-one">
                        <li>رستورانی با 25 سال تجربه
                            در شمال تهران</li>
                        <li>هر نوع غذایی که دوست داشته باشید با بهترین کیفیت</li>
                    </ul>
                    <p>Sit amet consectetur adipiscing elitsue risus mauris quam adipiscing phasellus aene ante orcirat scelerisque enim ut nulla</p>
                    <a href="chefs.html" class="main-btn filled-btn">آشپز ما باشید<i class="far fa-arrow-right"></i></a>
                </div>
            </div>
            <div class="col-xl-8 col-lg-12">
                <div class="row">
                    <div class="col-xl-4 col-md-6 col-sm-12">
                        <!--=== Single Team Item ===-->
                        <div class="single-team-item mb-30 wow animate__animated animate__fadeInUp">
                            <div class="chef-img">
                                <img src="/src/images/team/chef-1.jpg" alt="Chef Image">
                                <div class="chef-overlay"></div>
                                <div class="hover-content">
                                    <h3 class="title">Jimmie K. Cryer</h3>
                                    <p class="position">سرآشپز</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-xl-4 col-md-6 col-sm-12">
                        <!--=== Single Team Item ===-->
                        <div class="single-team-item mb-30 wow animate__animated animate__fadeInUp">
                            <div class="chef-img">
                                <img src="/src/images/team/chef-2.jpg" alt="Chef Image">
                                <div class="chef-overlay"></div>
                                <div class="hover-content">
                                    <h3 class="title">Jimmie K. Cryer</h3>
                                    <p class="position">Senior Chef</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-xl-4 col-md-6 col-sm-12">
                        <!--=== Single Team Item ===-->
                        <div class="single-team-item mb-30 wow animate__animated animate__fadeInUp">
                            <div class="chef-img">
                                <img src="/src/images/team/chef-3.jpg" alt="Chef Image">
                                <div class="chef-overlay"></div>
                                <div class="hover-content">
                                    <h3 class="title">Jimmie K. Cryer</h3>
                                    <p class="position">Senior Chef</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-xl-4 col-md-6 col-sm-12">
                        <!--=== Single Team Item ===-->
                        <div class="single-team-item mb-30 wow animate__animated animate__fadeInUp">
                            <div class="chef-img">
                                <img src="/src/images/team/chef-4.jpg" alt="Chef Image">
                                <div class="chef-overlay"></div>
                                <div class="hover-content">
                                    <h3 class="title">Jimmie K. Cryer</h3>
                                    <p class="position">Senior Chef</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-xl-4 col-md-6 col-sm-12"> 
                        <!--=== Single Team Item ===-->
                        <div class="single-team-item mb-30 wow animate__animated animate__fadeInUp">
                            <div class="chef-img">
                                <img src="/src/images/team/chef-5.jpg" alt="Chef Image">
                                <div class="chef-overlay"></div>
                                <div class="hover-content">
                                    <h3 class="title">Jimmie K. Cryer</h3>
                                    <p class="position">Senior Chef</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-xl-4 col-md-6 col-sm-12"> 
                        <!--=== Single Team Item ===-->
                        <div class="single-team-item mb-30 wow animate__animated animate__fadeInUp">
                            <div class="chef-img">
                                <img src="/src/images/team/chef-6.jpg" alt="Chef Image">
                                <div class="chef-overlay"></div>
                                <div class="hover-content">
                                    <h3 class="title">Jimmie K. Cryer</h3>
                                    <p class="position">Senior Chef</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section> <!--=== End Chefs Section ===-->
<!--=== Start Video Section ===-->
<section class="video-line-section pt-130 pb-80 p-r z-1">
    <div class="line-shape line-shape-one"><span><img src="/src/images/shape/line-1.png" alt="Shape"></span></div>
    <div class="container">
        <div class="row align-items-center">
            <div class="col-lg-7">
                <!--=== Video Image Box ===-->
                <div class="video-one_image-box mb-50 p-r z-1 wow animate__animated animate__fadeInLeft">
                    <img src="/src/images/gallery/video-1.jpg" alt="Video Image">
                    <div class="image-overlay"></div>
                    <div class="play-content-box">
                        <a href="https://www.youtube.com/watch?v=t8k71QcArnk" class="video-popup"><i class="fas fa-play"></i></a>
                    </div>
                </div>
            </div>
            <div class="col-lg-5">
                <!--=== Video Content Box ===-->
                <div class="video-content-box content-box-gap pl-lg-40 mb-50 wow animate__animated animate__fadeInRight">
                    <div class="section-title section-title-left">
                        <span class="sub-title">Watch Videos</span>
                        <h2>How Can We Made Foods For Customers</h2>
                    </div>
                    <p>Sit amet consectetur adipiscing elitsue risus mauris quam adipiscing phasellus aene ante orcirat scelerisque enim ut nulla</p>
                    <ul class="check-style-one mb-30">
                        <li>Best Way to Serve Our Foods</li>
                        <li>Low Cost & Onlie Orders</li>
                    </ul>
                    <a href="about.html" class="main-btn btn-black">watch more<i class="far fa-arrow-right"></i></a>
                </div>
            </div>
        </div>
    </div>
</section><!--=== End Video Section ===-->
<!--=== Start Working Section ===-->
<section class="working-bg-section pt-130 pb-110 light-red-bg p-r z-1">
    <div class="dot-bg bg_cover" style="background-image: url(/src/images/bg/dot-bg.png);"></div>
    <div class="hours-bg bg_cover" style="background-image: url(/src/images/bg/hours-bg-1.jpg);"></div>
    <div class="container">
        <div class="row">
            <div class="col-lg-5">
                <!--=== Working Content Box ===-->
                <div class="working-content-box wow animate__animated animate__fadeInLeft">
                    <div class="section-title section-title-left mb-50">
                        <span class="sub-title">Working hour</span>
                        <h2>Enjoy Our Foods From 6 Days In a Week</h2>
                    </div>
                    <div class="single-hour-box mb-20">
                        <h4 class="title">Monday - Friday <span class="dot-border"></span><span class="time">09am-6pm</span></h4>
                    </div>
                    <div class="single-hour-box mb-20">
                        <h4 class="title">Saturday<span class="dot-border"></span><span class="time">08am-7pm</span></h4>
                    </div>
                    <div class="single-hour-box mb-20">
                        <h4 class="title">Sunday<span class="dot-border"></span><span class="time">Closed</span></h4>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section><!--=== End Working Section ===-->
<!--=== Start Reservation Section ===-->
<section class="reservation-line-section p-r z-1 pt-130 pb-80">
    <div class="line-shape line-shape-one"><span><img src="/src/images/shape/line-1.png" alt="Shape"></span></div>
    <div class="container">
        <div class="row align-items-center">
            <div class="col-lg-6">
                <!--=== Reservation Image Box ===-->
                <div class="reservation-image-box wow animate__animated animate__fadeInLeft mb-50 mb-20">
                    <img src="/src/images/contact/contact-1.jpg" alt="Reservation Image">
                </div>
            </div>
            <div class="col-lg-6">
                <!--=== Reservation Content Box ===-->
                <div class="reservation-content-box content-box-gap wow fadeInRight mb-50 pl-lg-70">
                    <div class="section-title section-title-left mb-20">
                        <span class="sub-title">Booking table</span>
                        <h2>Make A Reservations</h2>
                    </div>
                    <p>Sit amet consectetur adipiscing elitsue risus mauris 
                        adipiscing phasellus aene ante orcirat</p>
                    <!--=== Reservation Form ===-->
                    <div class="reservation-style-one">
                        <form class="reservation-form">
                            <div class="row">
                                <div class="col-lg-12">
                                    <div class="form_group">
                                        <label><i class="far fa-user"></i></label>
                                        <input type="text" class="form_control" placeholder="Person" name="number" required>
                                    </div>
                                </div>
                                <div class="col-lg-12">
                                    <div class="form_group">
                                        <label><i class="far fa-calendar-alt"></i></label>
                                        <input type="text" class="form_control" id="datepicker" placeholder="Reserved Date" name="date" required>
                                    </div>
                                </div>
                                <div class="col-lg-12">
                                    <div class="form_group">
                                        <select class="wide">
                                            <option data-display="Reservatiuon Time">Reservatiuon Time</option>
                                            <option value="01">12.00 Am</option>
                                            <option value="01">01.00 Am</option>
                                            <option value="01">02.00 Am</option>
                                            <option value="01">03.00 Am</option>
                                            <option value="01">05.00 Am</option>
                                            <option value="01">06.00 Am</option>
                                            <option value="01">07.00 Am</option>
                                            <option value="01">08.00 Am</option>
                                            <option value="01">09.00 Am</option>
                                            <option value="01">10.00 Am</option>
                                            <option value="01">11.00 Am</option>
                                            <option value="01">12.00 Pm</option>
                                        </select>
                                    </div>
                                </div>
                                <div class="col-lg-12">
                                    <div class="form_group">
                                        <button class="main-btn btn-red">book a table <i class="far fa-arrow-right"></i></button>
                                    </div>
                                </div>
                            </div>
                        </form>
                    </div>    
                </div>
            </div>
        </div>
    </div>
</section><!--=== End Reservation Section ===-->
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