<template lang="">  
  <section class='login'>
    <div class='login--wrap clearfix'>
      <div class="row clearfix">
        <div class="col col-6 login--l">
          <div class="title"><span class='text'>ورود به حساب</span></div>
          <Form id="login_form" v-slot="{ meta }" class='login--body' @submit="" >
              <label class='label'>آدرس ایمیل</label>
              <Field :rules="validateEmail" type='email' name="emailToLogin" v-model="emailToLogin" placeholder='آدرس ایمیل'/>
              <ErrorMessage name="emailToLogin" />

              <label class='label'>کلمه عبور</label>
              <Field :rules="validatePass" name="pass" type='password' v-model="pass" placeholder='*********' />
              <ErrorMessage name="pass" />

              <div class='sbmt'>
                <vue-recaptcha :sitekey="siteKey"
                  :language ="lang"
                  @verify="verifyForLogin">
                  <button :disabled="!meta.valid" class='main-btn'> <span> ورود </span></button>
                </vue-recaptcha>
              </div>
          </Form>
        </div>
        <div class="col col-6 login--s">
          <div class="title"><span class='text'>ثبت نام</span></div>
          <Form id="submit_form" v-slot="{ meta }" class='login--body' @submit="" >
              <label class='label'>آدرس ایمیل</label>
              <Field :rules="validateEmail" type='email' name="emailToSubmit" v-model="emailToSubmit" placeholder='john@doe.com' />
              <ErrorMessage name="emailToSubmit" />

            <div class='sbmt'>
              <vue-recaptcha :sitekey="siteKey"
                :language ="lang"
                @verify="verifyForSubmit">
                <button :disabled="!meta.valid" class='main-btn'><span> ثبت نام </span></button>
              </vue-recaptcha>
            </div>
          </Form>
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
import { useRouter, useRoute } from 'vue-router';
import { VueRecaptcha } from 'vue-recaptcha';
import { Form, Field, ErrorMessage, useIsFormValid, useForm } from 'vee-validate';

export default {
  components: {
    VueRecaptcha, Form, Field, ErrorMessage
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
        alert("ایمیل فعال سازی برای شما ارسال شد لطفا صندوق ورودی ایمیل خود و یا فولدر اسپن را چک کنید.")
        location.replace('/')
      }.bind(this))
        .catch(function (error) {
          if(error.response.status == 409){ //User already exists
            alert("ایمیل وارد شده قبلا ثبت شده است")
          }else if(error.response.status == 503){ //Activation link already has been sent and not yet expired
            alert(".ایمیل فعالسازی قبلا ارسال شده است. برای دریافت مجدد باید 5 دقیقه از زمان ارسال ایمیل آخر گذشته باشد")
          }else{ // Exception
            alert("خطای سرور لطفا ساعاتی دیگر مجددا اقدام فرمایید.")
          }
        });
    },
    SendLogingRequest(){
      if(!this.token){
        alert("خطا در برقراری ارتباط")
        location.reload()
      }

      axios.post(this.LoginAddress, {
        username: this.emailToLogin,
        password: this.pass,
        token: this.token
      }).then(function (response) {                  
        alert("با موفقیت وارد سیستم شدید")

        let d = new Date()
        d.setTime(response.data.expire_in)
        let expires = "expires=" + d.toUTCString()
        document.cookie = "access_token=" + response.data.access_token + ";" + expires + ";path=/"

        if(this.$route.params.action){
          var redirectURL = "/" + this.$route.params.action + "/" + this.$route.params.id
          location.replace(redirectURL)
        }else{
          location.replace("/")
        }
      }.bind(this)).catch(function (error) {
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
      this.token = response
      this.SendLogingRequest()    
    },
    expiredMethod(){
      console.log(response)      
    },

    validateEmail(value) {
      if (!value) {
        return 'این فیلد نمی تواند خالی باشد';
      }

      const regex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;
      if (!regex.test(value)) {
        return 'لطفا آدرس ایمیل معتبر وارد کنید';
      }

      return true;
    },
    validatePass(value) {
        if (!value) {
            return 'این فیلد نمی تواند خالی باشد';
        }

        return true;
    },
  },
    data () {
      return {
        apiBaseAddress: 'https://services.mehrbanoo.restaurant/api',
        baseAddress : 'https://services.mehrbanoo.restaurant/',

        siteKey: "6LdOU_QlAAAAADdv6_gT1QLKuphLbRakmzE0L3fP",
        lang: "fa",
        token: ""
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