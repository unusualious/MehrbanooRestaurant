<template>
    <header class="header-area transparent-header mobile-header">
        <!--=== Header Navigation ===-->
        <div class="mobile-top-head">
            <router-link  class="mobile-top-head-item brand-logo" to="/"><img src="/src/images/logo/logo.png" alt="Site Logo"></router-link>
                        <div class="mobile-top-head-item call-btn-sec">
                <a href="tel:02126850157" class="call-btn "><span><font-awesome-icon :icon="['fas', 'phone-flip']" /> تماس
                        بگیرید</span></a>
            </div>


            <div class="hamber mobile-top-head-item" @click="hamClick">
                <div class="bar top"></div>
                <div class="bar middle"></div>
                <div class="bar bottom"></div>
            </div>
        </div>
        <nav class="menu-elements">
            <div class="search-button">
                <div class="search-btn" data-bs-toggle="modal" data-bs-target="#search-modal"> <font-awesome-icon
                        :icon="['fas', 'magnifying-glass']" /></div>
            </div>
            <ul>
                <li class="menu-item has-children"> <router-link to="/">خانه</router-link>
                </li>
                <!-- <div class="accordion" id="accordionPanelsStayOpenExample">
                    <div class="accordion-item">
                        <h2 class="accordion-header" id="panelsStayOpen-headingOne">
                            <button class="accordion-button" type="button" data-bs-toggle="collapse"
                                data-bs-target="#panelsStayOpen-collapseOne" aria-expanded="true"
                                aria-controls="panelsStayOpen-collapseOne">
                                خوشمزه ها
                            </button>
                        </h2>
                        <div id="panelsStayOpen-collapseOne" class="accordion-collapse collapse show"
                            aria-labelledby="panelsStayOpen-headingOne">
                            <div class="accordion-body">
                                <ul class="sub-menu">
                        <li><a href="">نوشیدنی ها</a></li>
                        <li><a href="">غذاهای خانگی</a></li>
                        <li><a href="">دسرها</a></li>
                        <li><a href="">صبخانه های لذیذ</a></li>
                    </ul>
                            </div>
                        </div>
                    </div>
                </div> -->
                <li class="menu-item"><a href="">نوشیدنی ها</a></li>
                <li class="menu-item"><a href="">غذاهای خانگی</a></li>
                <li class="menu-item"><a href="">دسرها</a></li>
                <li class="menu-item"><a href="">صبخانه های لذیذ</a></li>
                <li class="menu-item"> <router-link to="/aboutus">درباره ما</router-link></li>
                <li class="menu-item"><router-link to="/blog">بلاگ</router-link>
                </li>
                <li class="menu-item"><router-link to="/contact">تماس با ما</router-link>
                </li>
            </ul>
        </nav>
    </header><!--====== End Header ======-->
</template>
<script>

export default {
    name: "Header",
    data() {

    },
    methods: {
        hamClick() {
            document.querySelector('.mobile-top-head').classList.toggle('active')
            document.querySelector('.menu-elements').classList.toggle('active')
        },
    },
}
</script>
<style lang="scss"></style>