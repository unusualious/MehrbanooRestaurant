<template>
    <header class="header-area transparent-header mobile-header">
    <!--=== Header Navigation ===-->
    <div class="ham-menu-absolute">
        <div class="search-button">
                            <div class="search-btn" data-bs-toggle="modal" data-bs-target="#search-modal">    <font-awesome-icon :icon="['fas', 'magnifying-glass']" /></div>
                        </div>
    </div>
    <div class="mobile-top-head">

        <a href="index.html" class="brand-logo"><img src="/src/images/logo/logo.png" alt="Site Logo"></a>
        <div>
            <a href="tel:8665562570" class="call-btn "><span><font-awesome-icon :icon="['fas', 'phone']" /> تماس بگیرید</span></a>
        </div>
                 
                   
        <div class="hamber">
            <div class="bar top"></div>
            <div class="bar middle"></div>
            <div class="bar bottom"></div>
        </div>
    </div>
    <div class="qucik-call">
    </div>
</header><!--====== End Header ======-->
</template>
<script>

export default {
    name:"Header",
    data(){
        
    },
    methods:{
   
    },
}
</script>