<template>
    <section class="container ">
        <div class="user-profile row">
            <div class="col-6 profile-pict">
                <img src="/src/images/profielsd.webp" alt="">
            </div>
            <div class="col-6 profile-comn">
                <div class="profile-title">
                    <h1>کاربر گرامی، به مهربانو خوش آمدید</h1>
                    <h3> {{userInfo.name}} {{userInfo.sirname}} عزیز</h3>
                    <p>
                        شما می توانید در مهربانو انواع غذاهای اصیل ایرانی را با کیفیتی مناسب خریداری و میل نمایید . تمام
                        تلاش تیم مهربانو رضایت و خوشنودی شماست که امیدواریم بتوانیم تجربه ای لذیذ را برایتان پدید آوریم .
                    </p>
                </div>
            </div>
        </div>
    </section>
</template>
<script >
import axios from 'axios';
import { Alert } from 'bootstrap';
import { useRouter, useRoute } from 'vue-router';
import { VueRecaptcha } from 'vue-recaptcha';
import { Form, Field, ErrorMessage, useIsFormValid, useForm } from 'vee-validate';

export default {
    components: {
        VueRecaptcha, Form, Field, ErrorMessage
    },
    computed: {
        tokenCookieValue() {
            return document.cookie
                .split("; ")
                .find((row) => row.startsWith("access_token="))
                ?.split("=")[1];
        },
        UserAccountAddress() {
            return this.apiBaseAddress + '/Account/UserInfo'
        }
    },
  methods: {
    isLogin() {
        var token = this.tokenCookieValue;
        if (token) {
            return true;
        } else {
            return false;
        }
    },
    async getUserInfo(){
        if (this.isLogin()) {            
            const config = {                
                headers: { Authorization: `Bearer ${this.tokenCookieValue}` },
            };

            const userInfoRequest = await axios.get(this.UserAccountAddress, config);
            this.userInfo = userInfoRequest.data;
        }
        else {
            location.replace("/login")
        }
    },
},
  data() {
    return {
        userInfo: [],
        //apiBaseAddress: 'https://services.mehrbanoo.restaurant/api',
        //baseAddress: 'https://services.mehrbanoo.restaurant/',

        apiBaseAddress: 'https://localhost:7267/api',
        baseAddress : 'https://localhost:7267/',

        siteKey: "6LdOU_QlAAAAADdv6_gT1QLKuphLbRakmzE0L3fP",
        lang: "fa",
        token: ""
    }
  },
  async mounted() {
    await this.getUserInfo()
  }
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