<template lang="">
    <div class="testimonial-wrapper-one wow fadeInRight mr-lg-100">
        <!--=== Testimonial Slider ===-->
        <div class="testimonial-slider-one">
            <!--=== Single Testimonial ===-->
            <div v-for="foodComment in foodComments" class="single-testimonial-one">
                <div class="testimonial-inner-content">
                    <p>{{foodComment.Comment}}</p>
                    <div class="author-quote-box d-flex justify-content-between">
                        <div class="author-title-thumb d-flex">
                            <div class="author-thumb">
                                <img src="/src/images/testimonial/author-thumb-1.png" alt="Author Thumb">
                            </div>
                            <div class="author-title">

                                <p class="position">{{foodComment.User.Name, foodComment.User.Sirname}}</p>
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
</template>
<script>
import axios from 'axios';
import { useRouter } from 'vue-router';
export default {
    props:{
        foodId: Number
    },
    methods: {
        getLast2FoodComments(){
            axios.get(this.foodsCommentApiAddress)
                .then(function (response) {
                    // handle success
                    this.foodComments = response.data.Collection
                }.bind(this));
            },
    },
    data () {
        return {
            foodComments: [],
            apiBaseAddress: 'https://localhost:44324/api'
        }
    },
    computed: {
        foodsCommentApiAddress() {
            return this.apiBaseAddress + '/FoodComments/' + this.foodId
        }
    },
    mounted(){
        this.getLast2FoodComments()
    }
}
</script>