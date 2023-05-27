<template lang="">
        <!--=== Start Blog Section ===-->
        <section class="blog-portion">
            <div class="container">
                <div class="row justify-content-center">
                    <div class="col-xl-6 col-lg-12">
                        <div class="section-title text-center mb-50 wow fadeInDown">
                            <span class="sub-title">مجله آشپزی مهربانو</span>
                            <h2>آموزش و اخبار</h2>
                        </div>
                    </div>
                </div>
                <div class="row justify-content-center">
                    <div v-for="blog in blogs" class="col-lg-4 col-md-6 col-sm-12">
                        <div class="blog-portion-part fadeInUp">
                            <div class="post-thumbnail">
                                <img :src="getFullImageAddress(blog.picAddress)" alt="Post Image">
                            </div>
                            <div class="entries">
                                <span class="tag-btn">{{blog.tag.text}}</span>
                                <h3 class="title"><a href="">{{blog.title}}</a></h3>
                                <p>{{blog.description}}</p>
                            </div>
                        </div>
                    </div>
                    <div class="blog-more">
                        <router-link class="main-btn green" to="/blog"><span>نمایش همه</span></router-link>
                    </div>
                </div>
            </div>
        </section><!--=== End Blog Section ===-->
        
        </template>
<script>
import axios from 'axios';

export default {
    methods: {
        getAllBlogs(){
            axios.get(this.blogApiAddress)
                .then(function (response) {
                    // handle success
                    this.blogs = response.data.Collection
                }.bind(this));
        },        
        getFullImageAddress(relativeAddress){
            return this.imageBaseAddress + relativeAddress;
        }
    },
    data () {
        return {
            blogs: [],
            apiBaseAddress: 'https://services.mehrbanoo.restaurant/api',
            //apiBaseAddress: 'https://localhost:44324/api',
            imageBaseAddress : 'https://admin.mehrbanoo.restaurant'
        }
    },
    computed: {
        blogApiAddress() {
            return this.apiBaseAddress + '/Blogs'
        }
    },
    mounted(){
        this.getAllBlogs()
    }
}
</script>
<style lang="">
    
</style>