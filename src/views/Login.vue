<template lang="">  
  <section class='login'>
    <div class='login--wrap clearfix'>
      <div class="row clearfix">
        <div class="col col-6 login--l">
          <div class="title"><span class='text'>ورود به حساب</span></div>
          <div class='login--body'>
              <label class='label'>آدرس ایمیل</label>
              <input  type='text' v-model="emailToLogin" placeholder='آدرس ایمیل' required />

              <label class='label'>کلمه عبور</label>
              <input type='password' v-model="pass" placeholder='*********' required />
              
            <div class='sbmt'>
              <vue-recaptcha :sitekey="siteKey"
              :language ="lang"
              @verify="verifyForLogin"
              @expired="expiredMethod">
              <button class='main-btn'> <span> ورود </span></button>
            </vue-recaptcha>
            </div>
          </div>
        </div>
        <div class="col col-6 login--s">
          <div class="title"><span class='text'>ثبت نام</span></div>
          <div class='login--body'>
              <label class='label'>آدرس ایمیل</label>
              <input type='email' v-model="emailToSubmit" placeholder='john@doe.com' required />
            <div class='sbmt'>
              <vue-recaptcha :sitekey="siteKey"
                :language ="lang"
                @verify="verifyForSubmit"
                @expired="expiredMethod">
                <button class='main-btn'><span> ثبت نام </span></button>
              </vue-recaptcha>
            </div>
          </div>
        </div>
      </div>
      <div>
    </div>
    </div>
  </section>
</template>

<script >
import axios from 'axios';
import { Alert } from 'bootstrap';
import { useRouter } from 'vue-router';
import { VueRecaptcha } from 'vue-recaptcha';

export default {
  components: {
    VueRecaptcha
  },
   methods: {
    SendEmailActivationRequest(token){
      if(!token){
        alert("خطا در برقراری ارتباط")
        location.reload()
      }

      axios.post(this.EmailActivationAddress, {
        email: this.emailToSubmit,
        token: token
      }).then(function (response) {                  
        alert("ایمیل فعال سازی برای شما ارسال شد لطفا صندوق ورودی ایمیل خود و یا فولدر اسپن را چک کنید.")}
        .bind(this))
        .catch(function (error) {
          if(error.response.status == 409){ //User already exists
            alert("ایمیل وارد شده قبلا ثبت شده است")
          }else if(response.status == 503){ //Activation link already has been sent and not yet expired
            alert(".ایمیل فعالسازی قبلا ارسال شده است. برای دریافت مجدد باید 5 دقیقه از زمان ارسال ایمیل آخر گذشته باشد")
          }else{ // Exception
            alert("خطای سرور لطفا ساعاتی دیگر مجددا اقدام فرمایید.")
          }
        });
    },
    SendLogingRequest(token){
      if(!token){
        alert("خطا در برقراری ارتباط")
        location.reload()
      }

      axios.post(this.LoginAddress, {
        username: this.emailToLogin,
        password: this.pass,
        token: token
      }).then(function (response) {                  
        alert("با موفقیت وارد سیستم شدید")

        let d = new Date();
        d.setTime(response.data.expire_in);
        let expires = "expires=" + d.toUTCString();
        document.cookie = "access_token=" + response.data.access_token + ";" + expires + ";path=/";
        location.replace("/")}
        .bind(this)).catch(function (error) {
          if(error.response.status == 404){ //user not found
            alert("ایمیل و یا کلمه عبور اشتباه است")
          }else{ // Exception
            alert("خطای سرور لطفا ساعاتی دیگر مجددا اقدام فرمایید.")
          }
        });
    },    
    verifyForSubmit(response){
      this.SendEmailActivationRequest(response)
    },
    verifyForLogin(response){
      this.SendLogingRequest(response)
    },
    expiredMethod(){
      console.log(response)
    }
  },
    data () {
      return {
        baseAddress: 'https://localhost:44324/',
        apiBaseAddress: 'https://localhost:44324/api/',
        siteKey: "6LdOU_QlAAAAADdv6_gT1QLKuphLbRakmzE0L3fP",
        lang: "fa",
      }
    },
    computed: {
        EmailActivationAddress() {
            return this.apiBaseAddress + 'Account/SendActivationEmail'
        },
        LoginAddress() {
          return this.apiBaseAddress + 'Account/UserLogin'
        }
    },
    mounted(){
    }
  }
</script>
<style lang="">
    
</style>