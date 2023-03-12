<template lang="">

    <!--=== Start About Section ===-->
    <div class="container">
        <div class="row">
            
        </div>
    </div>


    <div class="container-fluid about-us main-sections about-section light-gray-bg">
        <div class="row  align-items-center">
            <div class="col-md-6 col-12">
                <!--=== About Content Box ===-->
                <div class="about-content-box content-box-gap mb-40 wow animate__animated animate__fadeInLeft">
                    <div class="section-title section-title-left mb-30">
                        <span class="sub-title">درباره مهربانو</span>
                        <h2>
                            بهترین غذاهای اصیل ایرانی
                        </h2>
                    </div>
                    <p>ما با کادری مجرب و خدمتگذار اینجا هستیم تا یک تجربه لذیذ را برایتان بیافرینیم. نقش آفرینی ما در سفره شما مایه مباهات است .در مجموعه ما، امکان سفارش بیرون‌بر از کلیه آیتم‌های منو وجود دارد. کلیه نکات بهداشتی در تمامی مراحل آماده‌سازی، بسته بندی و ارسال سفارشات رعایت می‌شود. همچنین با بهره‌گیری از پیک‌های مخصوص حمل غذا، تمامی سفارشات، تازه و در دمای مطلوب تحویل داده می‌شود. .  </p>
                    <a href="menu-seafood.html" class="main-btn "><span class="white">نمایش بیشتر <i class="far fa-arrow-right"></i></span></a>
                </div>
            </div>
            <div v-if="!isMobile()"   class="col-md-6 ">
                <!--=== About Content Box ===-->
                <div class="about-image-gallery ml-lg-40">
                    <div class="row">
                        <div class="col-md-6 right-about-img">
                            <img src="/src/images/foods/gheimenesar-right.jpg" class="mb-40 wow animate__animated animate__fadeInDown"  alt="">
                        </div>
                        <div class="col-md-6 left-about-img">
                            <img src="/src/images/foods/gheimenesar-left.jpg" class="mb-40 wow animate__animated animate__fadeInDown" alt="About Image">
                        </div>
                    </div>
                </div>
            </div>
            <div v-if="isMobile()" class="about-image-gallery ml-lg-40">
                            <img src="/src/images/foods/gheimenesar-left.jpg" class="mb-40 wow animate__animated animate__fadeInDown" alt="About Image">
                </div>
        </div>
    </div>
</template>
<script>
export default {
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
<style lang="scss">
    .about-us{
    padding: 70px 0;
    border-radius: 29px;
    margin-top: -60px;
    z-index: 9;
    @media (max-min:575px) {
        margin-top: -50px;
    }
    .right-about-img{
        margin-top: 20px;
    }
    }
</style>