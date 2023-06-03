<template lang="">
    <div class="container-fluid tabs-section main-sections ">
        <div class="row ">
            <div class="parallax-sight one">
                <div class="tabs-menu col-12">
                    <ul class="nav nav-pills mb-3" id="pills-tab" role="tablist">
                        <li v-for="category in foodCategories" class="nav-item" role="presentation">
                            <button class="nav-link" :class="{'active': category.IsActive}" id="pills-home-tab" data-bs-toggle="pill" :data-bs-target="'#category_' + category.FoodCategoryID" type="button" role="tab" aria-controls="pills-home" :aria-selected="category.IsActive">{{category.Title}}</button>
                        </li>
                    </ul>
                    <div class="tab-content" id="pills-tabContent" >
                        <div v-for="category in foodCategories" class="tab-pane fade" :class="{'show active': category.IsActive}" :id="'category_' + category.FoodCategoryID"  role="tabpanel" aria-labelledby="pills-home-tab">
                            <div v-for="food in foodsOfCategory(category.FoodCategoryID)" class="menu-item">
                                <!-- <div class="item-wrapper" @click="goToFood(food.foodID)"> -->
                                <div v-if="food.HasSinglePage" class="item-wrapper">
                                    <!-- items img start -->
                                    <div class="menu-img">
                                        <div class="menu-img-inner">
                                            <router-link :to="'/foods/' + (food.FoodID)">
                                                <img v-if="food.FoodImages[0]" :src="getFullImageAddress(food.FoodImages[0].Address)" alt="Img">
                                                <img v-else src="/src/images/foods/default.png" alt="Img">
                                            </router-link>
                                        </div>
                                    </div>
                                    <!-- items img end -->
                                    <!-- section title start -->
                                    <div>                               
                                        <router-link :to="'/foods/' + (food.FoodID)">
                                            <h3>{{food.Title}}</h3>
                                        </router-link>
                                        <p class="item-description">{{food.MenuDescription}}</p>
                                        <span v-if="isMobile()" class="item-price">{{getPriceString(food.Price)}} تومان</span>
                                    </div>
                              
                                    <span v-if="!isMobile()"  class="item-divider"></span>
                                    <span v-if="!isMobile()" class="item-price">{{getPriceString(food.Price)}} تومان</span>
                                    <!-- section title end --> 
                                </div>
                                <div v-else class="item-wrapper">
                                    <!-- items img start -->
                                    <div class="menu-img">
                                        <div class="menu-img-inner">
                                            <img v-if="food.FoodImages[0]" :src="getFullImageAddress(food.FoodImages[0].Address)" alt="Img">
                                            <img v-else src="/src/images/foods/default.png" alt="Img">
                                        </div>
                                    </div>
                                    <!-- items img end -->
                                    <!-- section title start -->
                                    <div>                               
                                        <h3>{{food.Title}}</h3>
                                        <p class="item-description">{{food.MenuDescription}}</p>
                                        <span v-if="isMobile()" class="item-price">{{getPriceString(food.Price)}} تومان</span>
                                    </div>
                              
                                    <span v-if="!isMobile()"  class="item-divider"></span>
                                    <span v-if="!isMobile()" class="item-price">{{getPriceString(food.Price)}} تومان</span>
                                    <!-- section title end -->
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import axios from 'axios';
import { useRouter } from 'vue-router';
export default {
    methods: {
        isMobile() {
            if(/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
                return true
            } else {
                return false
            }
        },
        getAllFoods(){
            axios.get(this.foodApiAddress)
                .then(function (response) {
                    // handle success
                    this.foods = response.data.Collection
                }.bind(this));
            },
        
        getAllFoodCategory(){
                        axios.get(this.foodCategoryApiAddress)
                .then(function (response) {
                    // handle success
                    this.foodCategories = response.data.Collection
                }.bind(this));
               
        },
        getFullImageAddress(relativeAddress){
            return this.imageBaseAddress + relativeAddress;
        },
        foodsOfCategory(id) {
            return this.foods.filter(d => d.FoodCategoryID === id)
        },
        getPriceString(priceInt){
            var length = priceInt.toString().length;
            if(length <= 3){
                return priceInt;
            }else{
                var priceStr = priceInt.toString();
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
        insertAtIndex(str, substring, index) {
            return str.toString().slice(0, index) + substring + str.slice(index);
        }
    },
    data () {
        return {
            foods: [],
            foodCategories: [],
            apiBaseAddress: 'https://services.mehrbanoo.restaurant/api',
            //apiBaseAddress: 'https://localhost:44324/api',
            imageBaseAddress : 'https://admin.mehrbanoo.restaurant'
        }
    },
    computed: {
        foodApiAddress() {
            return this.apiBaseAddress + '/Foods/Menu'
        },
        foodCategoryApiAddress() {
            return this.apiBaseAddress + '/FoodCategories'
        }
    },
    mounted(){
        this.getAllFoods()
        this.getAllFoodCategory()
    }
}
</script>
<style scoped lang="scss">
.tabs-section {
    padding: 0;
    margin-top: -50px;

    .tabs-banner {
        text-align: center;
    }

    .tabs-menu {
        padding: 50px;
        margin-right: 15px;

        @media (max-width : 750px) {
            padding: 0;
            margin-right: 0;

        }

        .nav {
            display: flex;
            justify-content: center !important;
            flex-wrap: nowrap;
            align-items: flex-end;
            padding: 6px 2px;
            border-radius: 5px;

            li {
                text-align: center;

                button {
                    color: #000;
                    font-weight: 200;
                    font-family: 'mehrit';
                    border-radius: 0;
                    font-size: 18px;
                    border-bottom: 3px solid #556b2f;
                    letter-spacing: -0.5px;

                    &.active {
                        border-bottom: none !important;
                        background-color: transparent;
                        color: #e97451;
                        border-radius: 6px 6px 0 0;
                        border: 2px solid #556b2f;
                        position: relative;
                        font-weight: 600;

                        &::after {
                            content: " ";
                            width: 25px;
                            height: 2px;
                            background-color: #556b2f;
                            position: absolute;
                            bottom: 0;
                            right: -25px;
                        }

                        &::before {
                            content: " ";
                            width: 25px;
                            height: 2px;
                            background-color: #556b2f;
                            position: absolute;
                            bottom: 0;
                            left: -25px;
                        }
                    }
                }
            }
        }

        .tab-content {
            .tab-pane {
                &.active {


                    padding-top: 15px;
                    display: grid;

                    @media (min-width: 768px) {
                        grid-column-gap: 40px;
                        grid-template-columns: repeat(2, 1fr);
                    }

                    .menu-item {
                        margin: 25px 14px;
                        padding: 15px;
                        border-radius: 14px;
                        background: rgb(255 255 255 / 70%);
                        box-shadow: rgb(100 100 111 / 20%) 0px 7px 29px 0px;


                        @media (max-width: 768px) {
                            margin: 20px 0;
                        }

                        &:hover {
                            outline: 3px solid #556b2f;
                            cursor: pointer;

                            img {
                                transform: scale(1.05) !important;
                            }
                        }

                        .item-wrapper {
                            display: flex;
                            align-items: center;
                            min-height: 90px;

                            @media (max-width: 768px) {
                                .menu-img-inner {
                                    width: 110px;
                                    height: 110px;
                                }

                                h3 {
                                    font-size: 21px !important;
                                    letter-spacing: -0.5px;
                                    margin-top: -10px!important;
                                }
                                .item-description {
                            font-size: 15px;
                        }
                            }

                            .menu-img {
                                position: relative;
                                padding: 0 0 0 145px;
                                width: 130px;
                                height: 130px;

                                .menu-img-inner {
                                    width: 130px;
                                    height: 130px;
                                    -webkit-border-radius: 50%;
                                    -moz-border-radius: 50%;
                                    -ms-border-radius: 50%;
                                    -o-border-radius: 50%;
                                    border-radius: 50%;
                                    overflow: hidden;

                                    img {
                                        width: 100%;
                                        height: 100%;
                                        left: 0;
                                        top: 0;
                                        transition: all 0.6s ease-in;
                                        // -webkit-transform: translate(-50%, -50%);
                                        // -moz-transform: translate(-50%, -50%);
                                        // -ms-transform: translate(-50%, -50%);
                                        // -o-transform: translate(-50%, -50%);
                                        // transform: translate(-50%, -50%);
                                        object-fit: cover;
                                        object-position: center;
                                    }
                                }
                            }

                            .item-price {
                                font-size: 19px;
                                font-weight: 800;
                                text-align: center;
                                font-family: "marr";
                                line-height: 1.5;
                                letter-spacing: 0.06em;

                            }

                            h3 {
                                color: #e1734a;
                                font-family: "marr";
                                font-size: 22px;
                                margin-bottom: 10px;
                                margin-top: -20px;
                                text-shadow: 0px 1px 0 #e1734a;
                            }
                        }

                        .item-description {
                            font-size: 17px;
                        }
                    }

                    .item-divider {
                        flex: 1;
                        border-bottom: 1px dashed #2c2121;
                        margin: 0 15px;
                    }
                }
            }
        }
    }



}</style>