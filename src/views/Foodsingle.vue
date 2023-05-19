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
                                                    <img v-if="foods.PicAddress" :src="getFullImageAddress(foods.PicAddress)" alt="Img">
                                                    <img v-else src="/src/images/foods/default.png" alt="Img">
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-xl-7">
                                        <!--=== Product Info ===-->
                                        <div class="product-info pl-lg-70 mb-50 wow fadeInRight">
                                            <h3 class="title">{{foods.Title}}</h3>

                                            <span class="price"><span class="curreny"></span>{{foods.Price}} تومان</span>
                                            <ul class="ratings">
                                                <li><i class="fas fa-star"></i></li>
                                                <li><i class="fas fa-star"></i></li>
                                                <li><i class="fas fa-star"></i></li>
                                                <li><i class="fas fa-star"></i></li>
                                                <li><i class="fas fa-star"></i></li>
                                                <li><span><a href="#">امتیاز کاربران   9 .3</a></span></li>
                                            </ul>
                                            <p>{{foods.Description}}</p>
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
                                            <a class="nav-link" data-bs-toggle="tab" href="#reviews">Review</a>
                                        </li>
                                    </ul>
                                </div>
                                <div class="tab-content">
                                    <div class="tab-pane fade show active" id="descrptions">
                                        <div class="content-box-gap">
                                            {{ foods.HtmlContent }}
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <FoodsComments :foodId="this.$route.params.id"/>
                            <!--=== Review Form ===-->

                            <div v-if="isLogin()" class="review-form-area wow fadeInUp">
                                <h3 class="title">لطفا نطر خود را در مورد این غذا بنویسید</h3>
                                <div class="review-form">
                                    <div class="row">
                                        <div class="col-lg-12">
                                            <div class="form_group">
                                                <textarea name="comment" v-model="comment" class="form_control" placeholder="متن نظر"></textarea>
                                            </div>
                                        </div>
                                        <button class="main-btn" @click="SubmitFeedback()">ثبت نظر</button>
                                    </div>
                                </div>
                            </div>
                            <div v-else>
                                <router-link to="/Login?RedirectTo=/Foods/{{this.$route.params.id}}" class="login-signup">برای ثبت نظر ابتدا باید وارد حساب کاربری خود شوید</router-link>
                            </div>
                        </div>
        
            </div>
        </section><!--====== End Products Details Section ======-->
        <!--=== Start Footer ===-->
    </div>
</template>

<script>
import axios from 'axios';
import FoodsComments from '../components/Home/FoodsComments.vue';
import {useRouter, useRoute} from "vue-router";

export default {
    data () {
        return {
            foods: [],
            foodId: "",
            apiBaseAddress: 'https://localhost:44324/api',
            imageBaseAddress : 'https://admin.mehrbanoo.restaurant',
            comment: ""
        }
    },
    components:{
        FoodsComments
    },
    computed:{
        foodApiAddress() {
            return this.apiBaseAddress + '/foods/' + this.$route.params.id
        },
        foodCommentPostApi(){
            return this.apiBaseAddress + '/FoodComments'
        },
        tokenCookieValue(){
            return document.cookie.split("; ").find((row) => row.startsWith("access_token="))?.split("=")[1];
        }
    },
    methods:{
        async getFoodInfo(){
            const foodsResponse = await axios.get(this.foodApiAddress)
            this.foods = foodsResponse.data
        },
        
        getFullImageAddress(relativeAddress){
            return this.imageBaseAddress + relativeAddress;
        },

        getPriceString(priceInt){
            var length = priceInt.toString().length;
            if(length <= 3){
                return priceInt;
            }else{
                var priceStr = priceInt;
                var numberOfSeparators = Math.floor(length/3);
                if(numberOfSeparators * 3 == length){
                    numberOfSeparators--;
                }
                for(let i=0; i < numberOfSeparators; i++){
                    priceStr = this.insertAtIndex(priceStr, ",", priceStr.length - (3 * (i + 1 ) + i))
                }

                return priceStr;
            }
        },

        SubmitFeedback(){
            if(!this.isLogin()){
                alert("ابتدا باید وارد حساب کاربری خود شوید.")
                return;
            }

            const config = {
                headers: { Authorization: `Bearer ${this.tokenCookieValue}` }
            };

            axios.post(this.foodCommentPostApi, {
                FoodID: this.$route.params.id,
                Comment: this.comment,
            }, config).then(function (response) {                  
                alert("نظر شما با موفقیت ثبت و به زودی در سایت نمایش داده خواهد شد.")
            }
            .bind(this)).catch(function (error) {
                if(error.response.status == 404){ //user not found
                    alert("ایمیل و یا کلمه عبور اشتباه است")
                }else{ // Exception
                    alert("خطای سرور لطفا ساعاتی دیگر مجددا اقدام فرمایید.")
                }
            });
        }, 
        insertAtIndex(str, substring, index) {
            return str.toString().slice(0, index) + substring + str.slice(index);
        },
        isLogin(){
            var token = this.tokenCookieValue;
            if(token) {
                return true
            }
            else {
                return false
            }
        }
    },
    async mounted(){
        await this.getFoodInfo()
    }
}
</script>
<style lang="">
    
</style>