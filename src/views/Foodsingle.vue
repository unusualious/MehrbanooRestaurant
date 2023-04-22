<template lang="">
    <div>
        <section class="page-banner light-red-bg p-r z-1 bg_cover" style="background-image: url(/src/images/hero/banner-1-ripoo.webp);">
            <div class="container">
                <div class="row justify-content-center">
                    <div class="col-lg-10">
                        <div class="page-banner-content text-center wow fadeInDown">
                            <h1 class="page-title">قورمه سبزی</h1>
                        </div>
                    </div>
                </div>
            </div>
        </section><!--====== End Breadcrumb Section ======-->
        <section class="products-details-section pt-125 pb-75">
            <div class="container-fluid">
                        <div class="product-details-wrapper mb-45">
                            <div class="product-info-wrapper pb-45">
                                <div class="row">
                                    <div class="col-xl-5">
                                        <!--=== Product Gallery ===-->
                                        <div class="product-gallery-area mb-50 wow fadeInLeft">
                                            <div class="product-big-slider mb-30">
                                                <div class="product-img">
                                                    <a href="" class="img-popup"><img src="/Src/images/gallery/video-1.jpg" alt="Product"></a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-xl-7">
                                        <!--=== Product Info ===-->
                                        <div class="product-info pl-lg-70 mb-50 wow fadeInRight">
                                            <h3 class="title">پلو خورشت قورمه سبزی</h3>

                                            <span class="price"><span class="curreny"></span>150000 تومان</span>
                                            <ul class="ratings">
                                                <li><i class="fas fa-star"></i></li>
                                                <li><i class="fas fa-star"></i></li>
                                                <li><i class="fas fa-star"></i></li>
                                                <li><i class="fas fa-star"></i></li>
                                                <li><i class="fas fa-star"></i></li>
                                                <li><span><a href="#">امتیاز کاربران   9 .3</a></span></li>
                                            </ul>
                                            <p>یک غذای لذیذ و اصیل ایرانی که پخت آن بسیار مهم است
                                            پختن این غذا نیازمند هننر و تجربه بسیار می باشد و آشپز باید بتواند این خوراک بی نظیر را برای همه سلیقه ها به صورت بهینه و خوشمزه آماده نماید   
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <!--=== Description Area ===-->
                            <div class="description-area wow fadeInUp">
                                <div class="description-tabs mb-30">
                                    <ul class="nav">
                                        <li class="nav-item">
                                            <a class="nav-link active" data-bs-toggle="tab" href="#descrptions">Descriptions</a>
                                        </li>
                                        <li class="nav-item">
                                            <a class="nav-link" data-bs-toggle="tab" href="#reviews">Review (2)</a>
                                        </li>
                                    </ul>
                                </div>
                                <div class="tab-content">
                                    <div class="tab-pane fade show active" id="descrptions">
                                        <div class="content-box-gap">
                                            <p>Sorem ipsum dolor sit amet, consectetur adipiscing elit. Tortor nulla id sit neque scelerisque pulvinar. Mus amet interdum turpis consequat adipiscing. Elementum feugiat sed duis consectetur varius et cras mattis. Lobortis auctor sit in eu nisl fusce augue venenatis, dui. Phasellus eget sagittis mauris, nibh augue cursus pellentesque amet elementum.
                                            Tristique amet sollicitudin sit nulla aliquam, imperdiet sed ut diam. Suspendisse ipsum rhoncus nulla lectus. Id neque in urna neque non amet. Tortor sed aliquam in faucibus enim, posuere. Sed et accumsan, neque posuere tempus in cras. Ornare lectus pretium, est eget purus, enim quam purus netus. Turpis nunc</p>
                                            <p>Dictum ultrices et suspendisse amet mattis in pellentesque. Vulputate arcu, consectetur odio donec nec duis ultrices facilisi. Mauris cursus elit diam, urna suspendisse et, amet. Vitae ligula ultrices nulla justo, enim lorem duis. Volutpat sit et neque, aliquam, diam at at neque. Lacus augue</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <!--=== Review Form ===-->
                            <div class="review-form-area wow fadeInUp">
                                <h3 class="title">Leave Your Reviews</h3>
                                <p>We have 3k+ 5star Reviews <img src="assets/images/product/rate.png" alt=""></p>
                                <form class="review-form">
                                    <div class="row">
                                        <div class="col-lg-6">
                                            <div class="form_group">
                                                <input type="text" class="form_control" placeholder="Full Name" name="name" required>
                                            </div>
                                        </div>
                                        <div class="col-lg-6">
                                            <div class="form_group">
                                                <input type="text" class="form_control" placeholder="Email Address" name="email" required>
                                            </div>
                                        </div>
                                        <div class="col-lg-12">
                                            <div class="form_group">
                                                <input type="url" class="form_control" placeholder="Website" name="website" required>
                                            </div>
                                        </div>
                                        <div class="col-lg-12">
                                            <div class="form_group">
                                                <textarea name="message" class="form_control" placeholder="Write Message"></textarea>
                                            </div>
                                        </div>
                                        <div class="col-lg-12">
                                            <div class="form_group">
                                                <button class="main-btn btn-red">Write Message<i class="far fa-arrow-right"></i></button>
                                            </div>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
        
            </div>
        </section><!--====== End Products Details Section ======-->
        <!--=== Start Footer ===-->
    </div>
</template>
<script>
import {useRouter, useRoute} from "vue-router";
export default {
    data () {
        return {
            foodId: "",
        }
    },
    computed:{
        // getid(){
            
        //     const route = useRoute;
        //       }
    },
    mounted(){
        // this.getid()
    },
    methods:{
       
    }
}
</script>
<style lang="">
    
</style>