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
                                                    <img v-if="food.PicAddress" :src="getFullImageAddress(food.PicAddress)" alt="Img">
                                                    <img v-else src="/src/images/foods/default.png" alt="Img">
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-xl-7">
                                        <!--=== Product Info ===-->
                                        <div class="product-info pl-lg-70 mb-50 wow fadeInRight">
                                            <h3 class="title">{{food.Title}}</h3>

                                            <span class="price"><span class="curreny"></span>{{food.Price}} تومان</span>
                                            <ul class="ratings">
                                                <li><i class="fas fa-star"></i></li>
                                                <li><i class="fas fa-star"></i></li>
                                                <li><i class="fas fa-star"></i></li>
                                                <li><i class="fas fa-star"></i></li>
                                                <li><i class="fas fa-star"></i></li>
                                                <li><span><a href="#">امتیاز کاربران 
                                                    <star-rating v-model:rating="totalRating" 
                                                        v-bind:read-only="true"
                                                        v-bind:rtl="true"
                                                        v-bind:round-start-rating="false">
                                            </star-rating></a></span></li>
                                            </ul>
                                            <p>{{food.Description}}</p>
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
                                        <div id="htmlContentDiv" class="content-box-gap" :innerHTML="food.HtmlContent">                                            
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <FoodsComments :foodId="this.$route.params.id"/>
                            <!--=== Review Form ===-->

                            <div v-if="isLogin()" class="review-form-area wow fadeInUp">
                                <star-rating v-model:rating="userRating" 
                                            v-bind:increment="0.5" 
                                            v-bind:animate="true"
                                            v-bind:rtl="true"
                                            @update:rating ="submitRating" >
                                </star-rating>
                                <h3 class="title">لطفا نطر خود را در مورد این غذا بنویسید</h3>
                                <Form class="review-form" @submit="SubmitFeedback">
                                    <div class="row">
                                        <div class="col-lg-12">
                                            <div class="form_group">
                                                <Field :rules="validateComment" name="comment" as="textarea" type="text" v-model="comment" class="form_control" placeholder="متن نظر" />
                                                <ErrorMessage name="comment" />
                                            </div>
                                        </div>
                                        <button class="main-btn">ثبت نظر</button>
                                    </div>
                                </Form>
                            </div>
                            <div v-else>
                                <router-link to="/Login/Foods/{{this.$route.params.id}}" class="login-signup">برای ثبت نظر ابتدا باید وارد حساب کاربری خود شوید</router-link>
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
import { Form, Field, ErrorMessage } from 'vee-validate';
import StarRating from 'vue-star-rating'

export default {
    components:{
        StarRating,
        FoodsComments,
        Form,
        Field,
        ErrorMessage
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
        },
        submitFoodRatingAddress(){
            return this.apiBaseAddress + '/FoodRatings'
        },
        userFoodsRatingAddress(){
            return this.apiBaseAddress + '/FoodRatings/GetUserFoodsRating/' + this.$route.params.id
        }
    },
    methods:{
        async getFoodInfo(){
            const foodsResponse = await axios.get(this.foodApiAddress)
            this.food = foodsResponse.data
            this.totalRating = this.getRating(foodsResponse.data.FoodRatings)
            this.userRating = await this.getUserRating()
        },
       async getUserRating(){
            if(this.isLogin()) {
                const config = {
                    headers: { Authorization: `Bearer ${this.tokenCookieValue}` }
                };

                const ratingResponse = await axios.get(this.userFoodsRatingAddress, config)
                return ratingResponse.data.Rating
            }
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
        submitRating(rating){
            if(!this.isLogin()){
                alert("ابتدا باید وارد حساب کاربری خود شوید.")
                return;
            }

            const config = {
                headers: { Authorization: `Bearer ${this.tokenCookieValue}` }
            };

            axios.post(this.submitFoodRatingAddress, {
                FoodID: this.$route.params.id,
                Rating: rating,
            }, config).then(function (response) {                  
                alert("از شما برای امتیاز دهی به این غذا سپاسگزاریم")
            }
            .bind(this)).catch(function (error) {
                alert("خطای سرور لطفا ساعاتی دیگر مجددا اقدام فرمایید.")
            });
        },
        SubmitFeedback(values){
            if(!this.isLogin()){
                alert("ابتدا باید وارد حساب کاربری خود شوید.")
                return;
            }

            if(this.comment == null || this.comment.length==0){
                alert("متن نظر نمی تواند خالی باشد")
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
                location.reload();
            }
            .bind(this)).catch(function (error) {
                alert("خطای سرور لطفا ساعاتی دیگر مجددا اقدام فرمایید.")
            });
        }, 

        validateComment(value) {
            if (!value) {
                return 'متن نظر نمی تواند خالی باشد';
            }
            if(value.lenght > 800){
                return 'نظر نمی تواند بیشتر از 800 کاراکتر باشد';          
            }

            return true;
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
        },
        getRating(collection){
            if(collection == null){
                return 0;
            }
            var sum = 0;
            for (let i = 0; i < collection.length; i++) {
                sum += collection[i].Rating
            }
            return sum/collection.length
        }
    },
    async mounted(){
        await this.getFoodInfo()
     },
    data () {
        return {
            food: [],
            foodId: "",
            apiBaseAddress: 'https://services.mehrbanoo.restaurant/api',      
            //apiBaseAddress: 'https://localhost:44324/api',
            imageBaseAddress : 'https://admin.mehrbanoo.restaurant',
            
            comment: "",
            totalRating: 5,
            userRating: 1
        }
    }
}
</script>
<style lang="">
    
</style>