<template>
    <section class="container ">
        <div class="user-profile row">
            <div class="col-6 profile-pict">
                <img src="/src/images/profielsd.webp" alt="">
            </div>
            <div class="col-6 profile-comn">
                <div class="profile-title">
                    <h1>کاربر گرامی، به مهربانو خوش آمدید</h1>
                    <h3> شهرام بوستانی عزیز</h3>
                    <p>
                        شما می توانید در مهربانو انواع غذاهای اصیل ایرانی را با کیفیتی مناسب خریداری و میل نمایید . تمام
                        تلاش تیم مهربانو رضایت و خوشنودی شماست که امیدواریم بتوانیم تجربه ای لذیذ را برایتان پدید آوریم .
                    </p>
                </div>
            </div>
        </div>
    </section>
</template>
<script>
export default {

}
</script>
<style lang="scss">
.user-profile {
    padding: 140px 20px;

    .profile-pict {}

    .profile-comn {
        margin-top: 20px;

        .profile-title {
            padding: 30px 50px;
            background-color: #a8ad64;
            margin-right: -100px;
            border-radius: 50px 50px 0 50px;

            h1,
            h3 {
                font-family: 'marr';
                letter-spacing: 0.5px;
                margin: 20px 10px;
                color: #fff;
            }
        }
    }
}
</style>