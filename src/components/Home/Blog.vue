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
                                <img :src="getFullImageAddress(blog.PicAddress)" alt="Post Image">
                            </div>
                            <div class="entries">
                                <span class="tag-btn">{{blog.Tag.Text}}</span>
                                <h3 class="title"><a href="">{{blog.Title}}</a></h3>
                                <p>{{blog.Description}}</p>
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
        getLast3Blogs(){
            axios.get(this.recentBlogsApiAddress)
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
            //imageBaseAddress : 'https://localhost:51034'
        }
    },
    computed: {
        recentBlogsApiAddress() {
            return this.apiBaseAddress + '/Blogs/GetRecent/3'
        }
    },
    mounted(){
        this.getLast3Blogs()
    }
}
</script>
<style lang="">
    
</style>