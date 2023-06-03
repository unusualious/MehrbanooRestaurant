<template lang="">
    <div>
        <section class="page-banner light-red-bg p-r z-1 bg_cover" style="background-image: url(/src/images/hero/banner-1-ripose-darken.webp);">
            <div class="container ">
                <div class="row">
                    <div class="col-lg-12">
                        <div class="page-banner-content text-center wow fadeInDown">
                            <h1 class="page-title">بلاگ </h1>
                            <ul class="breadcrumb-link text-white">
                                <li><a href="">خانه</a></li>
                                <li class="active">بلاگ و مجله آشپزی</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </section><!--====== End Breadcrumb Section ======-->
        <section class="blog-portion no-bg">
            <div class="container">
                <div class="row justify-content-center">
                    <div class="col-lg-4 col-md-6 col-sm-12">
                        <div class="blog-portion-part fadeInUp">
                            <div class="post-thumbnail">
                                <img src="/src/images/blog/blog-1.jpg" alt="Post Image">
                            </div>
                            <div class="entries">
                                <span class="tag-btn">آموزش آشپزی</span>
                                <h3 class="title"><a href="">بادمجان شکم پر گیلانی</a></h3>
                                <p> برای تهیه یک غذای اصیل گلانی می باشد که نیازی به گوشت ندارد و با رب انار و گردو تهیه می شود.</p>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-4 col-md-6 col-sm-12">
                        <div class="blog-portion-part fadeInUp">
                            <div class="post-thumbnail">
                                <img src="/src/images/blog/blog-2.jpg" alt="Post Image">
                            </div>
                            <div class="entries">
                                <span class="tag-btn">چاشنی ها</span>
                                <h3 class="title"><a href="">سس مایونز رژیمی</a></h3>
                                <p>تهیه یک سس خوشمزه و ساده می باشد که کالری کمی دارد و شما می توانید با خیال راحت این سس را در خانه تهیه کنید. </p>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-4 col-md-6 col-sm-12">
                        <div class="blog-portion-part fadeInUp">
                            <div class="post-thumbnail">
                                <img src="/src/images/blog/15.jpg" alt="Post Image">
                            </div>
                            <div class="entries">
                                <span class="tag-btn">رژیم و سلامتی</span>
                                <h3 class="title"><a href="">خواص جوانه گندم برای چاقی صورت</a></h3>
                                <p>جوانه گندم بخش کوچکی از مغز گندم است که فقط یک چهارم وزن کل هسته گندم را شامل می‌شود. </p>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </section><!--=== End Blog Section ===-->
        
    </div>
</template>
<script>
import HomeCarouselSection from '../components/Home/HomeCarouselSection.vue'
export default {
    components: {
        HomeCarouselSection
    },
}
</script>
<style lang="">
    
</style>