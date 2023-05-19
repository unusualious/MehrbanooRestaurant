<template>
    <header class="header-area transparent-header">
    <!-- <div class="top-bar">
        <div class="container-fluid">
            <div class="row">
                <div class="col-lg-7">
                    <div class="top-left">
                        <span class="text">تخویل سریع و رایگان غذا درب منزل شما!</span>
                    </div>
                </div>
                <div class="col-lg-5">
                    <div class="top-right d-flex align-items-center justify-content-lg-end">
                        <span class="text"><i class="far fa-envelope"></i>ثبت نام کنید تا از تخفیف های ما بهره بگیرید</span>
                        <ul class="social-link">
                            <li><a href="#"><i class="fab fa-facebook-f"></i></a></li>
                            <li><a href="#"><i class="fab fa-twitter"></i></a></li>
                            <li><a href="#"><i class="fab fa-youtube"></i></a></li>
                            <li><a href="#"><i class="fab fa-instagram"></i></a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </div> -->
    <!--=== Header Navigation ===-->
    <div class="header-navigation navigation-one">
        <div class="nav-overlay"></div>
        <div class="container-fluid">
            <!--=== Primary Menu ===-->
            <div class="primary-menu">
                <!--=== Site Branding ===-->
                <div class="site-branding">
                    <!-- <a href="index.html" class="brand-logo"><img src="/src/images/logo/logo-white.png" alt="Site Logo"></a> -->
                    <router-link class="brand-logo" to="/"><img src="/src/images/logo/logo.png" alt="Site Logo"></router-link>
                </div>
                <!--=== Nav Inner Menu ===-->
                <div class="nav-inner-menu">
                    <div class="nav-menu">
                        <!--=== Mobile Logo ===-->
                        <div class="mobile-logo mb-30 d-block d-xl-none text-center">
                            <a href="index.html" class="brand-logo"><img src="/src/images/logo/logo.png" alt="Site Logo"></a>
                        </div>
                        <!--=== Main Menu ===-->
                        <nav class="main-menu">
                            <ul>
                                <li class="menu-item has-children">    <router-link to="/">خانه</router-link>
                                 </li>
                                <li class="menu-item has-children"><a href="">خوشمزه ها </a>
                                    <ul class="sub-menu">
                                        <li><a href="">نوشیدنی ها</a></li>
                                        <li><a href="">غذاهای خانگی</a></li>
                                        <li><a href="">دسرها</a></li>
                                        <li><a href="">صبخانه های لذیذ</a></li>
                                    </ul>
                                </li>
                                <li class="menu-item">   <router-link to="/aboutus">درباره ما</router-link></li>
                                <li class="menu-item has-children"><router-link to="/blog">بلاگ</router-link>
                                </li>
                                <li class="menu-item has-children"><router-link to="/contact">تماس با ما</router-link>
                                </li>
                            </ul>
                        </nav>

                    </div>
                    <!--=== Nav right Item ===-->
                    <div class="nav-right-item d-flex align-items-center"> 
                        <div class="search-button">
                            <div class="search-btn" data-bs-toggle="modal" data-bs-target="#search-modal"> جستجو ..<i class="fas fa-search"></i></div>
                        </div>
                        <div class="menu-button d-xl-block d-none">
                            <router-link v-if="isLogin()" to="/UserPanel" class="login-signup">ناحیه کاربری</router-link>
                            <router-link v-else to="/Login" class="login-signup">ورود / ثبت نام</router-link>
                            <a href="tel:02126850157" class="main-btn"><span>شماره تماس : 02126850157<font-awesome-icon :icon="['fas', 'LongArrowAltRight']" /></span></a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</header><!--====== End Header ======-->
</template>
<script>
export default {
    name:"Header",
    data(){
    },
    methods:{
        isMobile() {
            if(/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
                return true
            } else {
                return false
            }
        },
        isLogin(){
            var token = document.cookie.split("; ").find((row) => row.startsWith("access_token="))?.split("=")[1];
            if(token) {
                return true
            }
            else {
                return false
            }
        }
    },
}
</script>
