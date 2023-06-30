<template lang="">
    <div>
        <section class="page-banner  bg_cover" style="background-image: url(/src/images/hero/banner-1-ripose-darken.webp);">
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
                </div>
            </div>
        </section><!--=== End Blog Section ===-->
        
    </div>
</template>
<script>
import axios from 'axios';

export default {
    methods: {
        getAllBlogs(){
            axios.get(this.blogApiAddress)
                .then(function (response) {
                    // handle success
                    this.blogs = response.data.collection
                }.bind(this));
        },        
        getFullImageAddress(relativeAddress){
            return this.imageBaseAddress + relativeAddress;
        }
    },
    data () {
        return {
            blogs: [],
            //apiBaseAddress: 'https://services.mehrbanoo.restaurant/api',
            apiBaseAddress: 'https://localhost:7267/api',
            //imageBaseAddress : 'https://admin.mehrbanoo.restaurant'
            imageBaseAddress : 'https://localhost:51034'
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