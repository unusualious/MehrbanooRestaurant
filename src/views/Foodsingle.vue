<template lang="">
    <div>
        <section class="page-banner light-red-bg p-r z-1 bg_cover" v-bind:style="{ backgroundImage: 'url(' + this.backgroundImageUrl + ')' }">
            <div class="container">
                <div class="row justify-content-center">
                    <div class="col-lg-12">
                        <div class="page-banner-content text-center">
                            <h1 class="page-title">{{food.Title}}</h1>
                        </div>
                    </div>
                </div>
            </div>
        </section><!--====== End Breadcrumb Section ======-->
        <section class="products-details-section">
            <div class="container-fluid">
                        <div class="product-details-wrapper">
                            <div class="product-info-wrapper">
                                <div class="row">
                                    <div class="col-md-5">
                                        <!--=== Product Gallery ===-->
                                        <div class="product-gallery-area">
                                            <div class="product-big-slider">
                                                <div class="product-img gallery__wrapper">
                                                        <inner-image-zoom  :src="getFullImageAddress(mainPic)" :zoomSrc="mainPic" />
                                                        <!-- <img v-if="food.PicAddress" :src="getFullImageAddress(food.PicAddress)" alt="Img"> -->
                                                    <!-- <img v-else src="/src/images/foods/default.png" alt="Img">      -->
                                                    <div class="galleryview">
                                                        <a :href="getFullImageAddress(mainPic)"  class="glightbox">
                                                  نمایش گالری
                                                  </a>

                                                    </div>
                                                </div>
                                                <div class="shop-single-thumb">
                                                <a  v-for="foodUrl,index in this.mainImages"
                                                         :key="foodUrl"
                                                         @click="changeImage(foodUrl,index)"
                                                          :class="{ 'active': index === picIndex }"
                                                          class="single-thumb-item">
                                                <img :src="getFullImageAddress(foodUrl)" alt="">
                                                </a>
                                                </div>
                                                    
                                                <div class="hidden-gallery"  >
                                                         <a v-for="foodUrl,index in this.mainImages"
                                                         :href="getFullImageAddress(foodUrl)"  class="glightbox" style="display:none">
                                                          <img :src="getFullImageAddress(foodUrl)" alt="" />
                                                        </a>
                                                </div>
                                            </div>

                                        </div>

                                    </div>
                                    <div class="col-md-7">
                                        <!--=== Product Info ===-->
                                        <div class="product-info pl-lg-70 mb-50 wow fadeInRight">
                                            <h3 class="title">{{food.Title}}</h3>

                                            <span class="price"><span class="curreny"></span>{{food.Price}} تومان</span>
                                            <ul class="ratings">
                                                <li><span><a href="#">امتیاز کاربران 
                                                    <star-rating v-model:rating="totalRating" 
                                                        v-bind:read-only="true"
                                                        v-bind:rtl="true"
                                                        v-bind:round-start-rating="false">
                                            </star-rating></a></span></li>
                                            </ul>
                                            <p>{{food.Description}}
                                            کیفیت مواد اولیه استفاده شده در مهربانو برای این غذا به شرح ذیل میباشد :

کباب جوجه کباب مخصوص ران  از گوشت ران بدون استخوان  مرغ تازه  تهیه میشود .

این گوشت ازشرکت های معتبر و صاحب نام خریداری میشود .

برنج استفاده شده برنج هاشمی درجه یک میباشد .

برای غذاهای بدون برنج ، حداقل از چهار قلم دورچین مناسب آن غذا استفاده میشود .
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
        </section><!--====== End Products Details Section ======-->
        <!--=== Start Footer ===-->
    </div>
                            <!--=== Description Area ===-->
                            <section class="description-area main-sections ">
                                <div class="section-title section-title-left">
                                    <span class="sub-title">مهربانو چه می گوید ؟ </span>
                                </div>
                                <div class="mehrbanoo-desc">
                                        مهربانو با تمام تلاش برای یک تجربه شادی آور برای شما مشتریان عزیز تمام تلاشش را می کند تا بتواند کیفیت مناسب را با تنوع بالا ترکیب کرده و شما را از یک تصمیم خوب، راضی نگه دارد. 
                                        در ادامه توضیحات بیشتری درباره 
                                        <b>
                                            {{food.Title}}
                                        </b>
                                         خدمتتان ارائه خواهیم داد 

                                         <div id="htmlContentDiv" class="content-box-gap" :innerHTML="food.HtmlContent">         
                                            </div>
                                        </div>                                
                            </section>
                            <div class="parallax-sight mehrbanoo-desc-parallax" v-bind:style="{ backgroundImage: 'url(' + this.backgroundImageUrl + ')' }">

                                    <div class="desc-parallax-box">
              جوجه کباب یکی از انواع کباب های خوشمزه و بسیار محبوب ایرانی است که علاوه بر اینکه دستور پخت آن بسیار آسان است خیلی سریع نیز آماده می شود. جالب است بدانید این کباب خوشمزه در کنار کباب هایی مثل کباب کوبیده از مجلسی ترین کباب ها محسوب می شود.

جوجه کباب از جمله غذاهایی محسوب می شود که دستورهای بسیار متنوعی دارد و تقریبا هر کَس برای طعم دار کردن گوشت مرغ برای خود روشی متفاوت دارد و از مواد متفاوتی استفاده می کند. مواد متداول برای طعم دار کردن جوجه کباب پیاز ، زعفران و آبلیمو هستند.

جوجه کباب انواع پخت مختلفی نیز دارد که از مهم ترین روش های پخت جوجه کباب می توان به جوجه کباب ذغالی و جوجه کباب تابه ای اشاره کرد. جوجه کباب ذغالی بیشتر برای بیرون از منزل و جوجه کباب تابه ای بیشتر در منزل تهیه می شود.
                              ای اشاره کرد. جوجه کباب ذغالی بیشتر برای بیرون از منزل و جوجه کباب تابه ا
                                    </div>
                            </div>  
                            <FoodsComments :foodId="this.$route.params.id"/>
                            <!--=== Review Form ===-->

                            <div v-if="isLogin()" class="review-form-area">
                                <star-rating v-model:rating="userRating" 
                                            v-bind:increment="0.5" 
                                            v-bind:animate="true"
                                            v-bind:rtl="true"
                                            @update:rating ="submitRating" >
                                </star-rating>
                                <h3 >لطفا نطر خود را در مورد این غذا بنویسید</h3>
                                <Form class="review-form" @submit="SubmitFeedback">
                                    <div class="row">
                                        <div class="col-lg-12">
                                            <div class="form_group">
                                                <Field :rules="validateComment" name="comment" as="textarea" type="text" v-model="comment" class="form_control" placeholder="متن نظر" />
                                                <ErrorMessage name="comment" />
                                            </div>
                                        </div>
                                        <button class="main-btn yellow"><span>ثبت نظر<i class="far fa-arrow-right"></i></span></button>
                                        
                                    </div>
                                </Form>
                            </div>
                            <div v-else>
                                <router-link to="/Login/Foods/{{this.$route.params.id}}" class="login-signup">برای ثبت نظر ابتدا باید وارد حساب کاربری خود شوید</router-link>
                            </div>
                   
        

</template>

<script>
import axios from "axios";
import FoodsComments from "../components/Home/FoodsComments.vue";
import { useRouter, useRoute } from "vue-router";
import { Form, Field, ErrorMessage } from "vee-validate";
import StarRating from "vue-star-rating";
import InnerImageZoom from "vue-inner-image-zoom";
import "glightbox/dist/css/glightbox.css";
import "glightbox/dist/js/glightbox.js";
import GLightbox from "glightbox";

export default {
  components: {
    StarRating,
    FoodsComments,
    Form,
    Field,
    ErrorMessage,
    "inner-image-zoom": InnerImageZoom,
  },
  computed: {
    foodApiAddress() {
      return this.apiBaseAddress + "/foods/" + this.$route.params.id;
    },
    foodCommentPostApi() {
      return this.apiBaseAddress + "/FoodComments";
    },
    tokenCookieValue() {
      return document.cookie
        .split("; ")
        .find((row) => row.startsWith("access_token="))
        ?.split("=")[1];
    },
    submitFoodRatingAddress() {
      return this.apiBaseAddress + "/FoodRatings";
    },
    userFoodsRatingAddress() {
      return (
        this.apiBaseAddress +
        "/FoodRatings/GetUserFoodsRating/" +
        this.$route.params.id
      );
    },
  },
  methods: {
    async getFoodInfo() {
      const foodsResponse = await axios.get(this.foodApiAddress);
      this.food = foodsResponse.data;
      this.totalRating = this.getRating(foodsResponse.data.FoodRatings);
      this.userRating = await this.getUserRating();
      this.mainPic = foodsResponse.data.FoodImages.filter(d => d.FoodImageType == 1 && d.Order == 1)[0].Address;
      this.mainImages = this.getFoodImageAddressList(foodsResponse.data.FoodImages.filter(d => d.FoodImageType == 1).sort(m => m.Order));
      this.wideImages = this.getFoodImageAddressList(foodsResponse.data.FoodImages.filter(d => d.FoodImageType == 2).sort(m => m.Order));
      this.backgroundImageUrl = this.getFullImageAddress(this.wideImages[0]);
      console.log(this.food);
    },
    async getUserRating() {
      if (this.isLogin()) {
        const config = {
          headers: { Authorization: `Bearer ${this.tokenCookieValue}` },
        };

        const ratingResponse = await axios.get(
          this.userFoodsRatingAddress,
          config
        );
        return ratingResponse.data.Rating;
      }
    },
    getFoodImageAddressList(images){
      var imageList = []
      for(let i = 0; i < images.length; i ++){
        imageList.push(images[i].Address)
      }

      return imageList;
    },

    getFullImageAddress(relativeAddress) {
      return this.imageBaseAddress + relativeAddress;
    },

    getPriceString(priceInt) {
      var length = priceInt.toString().length;
      if (length <= 3) {
        return priceInt;
      } else {
        var priceStr = priceInt;
        var numberOfSeparators = Math.floor(length / 3);
        if (numberOfSeparators * 3 == length) {
          numberOfSeparators--;
        }
        for (let i = 0; i < numberOfSeparators; i++) {
          priceStr = this.insertAtIndex(
            priceStr,
            ",",
            priceStr.length - (3 * (i + 1) + i)
          );
        }

        return priceStr;
      }
    },
    submitRating(rating) {
      if (!this.isLogin()) {
        alert("ابتدا باید وارد حساب کاربری خود شوید.");
        return;
      }

      const config = {
        headers: { Authorization: `Bearer ${this.tokenCookieValue}` },
      };

      axios
        .post(
          this.submitFoodRatingAddress,
          {
            FoodID: this.$route.params.id,
            Rating: rating,
          },
          config
        )
        .then(
          function (response) {
            alert("از شما برای امتیاز دهی به این غذا سپاسگزاریم");
          }.bind(this)
        )
        .catch(function (error) {
          alert("خطای سرور لطفا ساعاتی دیگر مجددا اقدام فرمایید.");
        });
    },
    SubmitFeedback(values) {
      if (!this.isLogin()) {
        alert("ابتدا باید وارد حساب کاربری خود شوید.");
        return;
      }

      if (this.comment == null || this.comment.length == 0) {
        alert("متن نظر نمی تواند خالی باشد");
        return;
      }

      const config = {
        headers: { Authorization: `Bearer ${this.tokenCookieValue}` },
      };

      axios
        .post(
          this.foodCommentPostApi,
          {
            FoodID: this.$route.params.id,
            Comment: this.comment,
          },
          config
        )
        .then(
          function (response) {
            alert(
              "نظر شما با موفقیت ثبت و به زودی در سایت نمایش داده خواهد شد."
            );
            location.reload();
          }.bind(this)
        )
        .catch(function (error) {
          alert("خطای سرور لطفا ساعاتی دیگر مجددا اقدام فرمایید.");
        });
    },

    validateComment(value) {
      if (!value) {
        return "متن نظر نمی تواند خالی باشد";
      }
      if (value.lenght > 800) {
        return "نظر نمی تواند بیشتر از 800 کاراکتر باشد";
      }

      return true;
    },
    insertAtIndex(str, substring, index) {
      return str.toString().slice(0, index) + substring + str.slice(index);
    },
    isLogin() {
      var token = this.tokenCookieValue;
      if (token) {
        return true;
      } else {
        return false;
      }
    },
    getRating(collection) {
      if (collection == null) {
        return 0;
      }
      var sum = 0;
      for (let i = 0; i < collection.length; i++) {
        sum += collection[i].Rating;
      }
      return sum / collection.length;
    },
    changeImage(e,i){
        this.mainPic = e;
        this.picIndex = i;
    }
  },
  async mounted() {
    await this.getFoodInfo();

    //lightbox settings
    this.lightbox = GLightbox({
      selector: ".glightbox",
    });
  },
  data() {
    return {
      food: [],
      picIndex: 0,
      mainPic:"",
      backgroundImageUrl: "",
      mainImages:[],
      wideImages:[],
      apiBaseAddress: "https://services.mehrbanoo.restaurant/api",
      //apiBaseAddress: 'https://localhost:44324/api',
      imageBaseAddress: "https://admin.mehrbanoo.restaurant",

      comment: "",
      totalRating: 5,
      userRating: 1,
      items: [
        "https://cosmos-images2.imgix.net/file/spina/photo/20565/191010_nature.jpg?ixlib=rails-2.1.4&auto=format&ch=Width%2CDPR&fit=max&w=835",
        "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/nature-quotes-1557340276.jpg?crop=0.666xw:1.00xh;0.168xw,0&resize=640:*",
      ],
      index: null,
    };
  },
};
</script>
<style lang="">
</style>