<template lang="">
    <section class='login'>
    <div class='login--wrap clearfix'>
      <div class="row clearfix">
        <div class="col col-12 login--l">
          <div class="title"><span class='text'>ثبت نام</span></div>
          <Form id="submit_form"  v-slot="{ meta }" class='login--body row' @submit="">
            <div class="form-item col-md-6">
              <label class='label'>نام</label>
              <Field :rules="validateText" name="name" type='text' v-model="name" placeholder='نام' />
              <ErrorMessage name="name" />
            </div>
            <div class="form-item col-md-6">
              <label class='label'>نام خانوادگی</label>
              <Field :rules="validateText" name="sirname" type='text' v-model="sirname" placeholder='نام خانوادگی' />
              <ErrorMessage name="sirname" />
            </div>
            <div class="form-item col-md-6">
              <label class='label'>آدرس ایمیل</label>
              <Field :rules="validateEmail" type='email' name="email" v-model="Email" disabled readonly='true' value="{{this.Email}}" placeholder='آدرس ایمیل'/>
              <ErrorMessage name="email" />
            </div>
            <div class="form-item col-md-6">
              <label class='label'>تلفن همراه</label>
              <Field :rules="validateMobile" name="mobile" type='phone' v-model="mobile" placeholder='تلفن همراه' />
              <ErrorMessage name="mobile" />
            </div>
            <div class="form-item col-md-6">
              <label class='label'>کلمه عبور</label>
              <Field :rules="validatePass" name="pass" type='password' v-model="password" placeholder='*********' />
              <ErrorMessage name="pass" />
            </div>
            <div class="form-item col-md-6">
              <label class='label'>تکرار کلمه عبور</label>
              <Field :rules="validateConfPass" name="confpass" type='password' v-model="confirmPassword" placeholder='*********' />
              <ErrorMessage name="confpass" />
            </div>
            <div class='sbmt'>
              <vue-recaptcha :sitekey="siteKey" :language ="lang" @verify="verifyMethod">
                <button :disabled="!meta.valid" class='main-btn black'> <span class="main-btn-span"> ثبت نام </span></button>
              </vue-recaptcha>
            </div>
          </Form>
        </div>
      </div>
    </div>
  </section>

</template>
<script>
import axios from 'axios';
import { Alert } from 'bootstrap';
import { useRouter } from 'vue-router';
import { VueRecaptcha } from 'vue-recaptcha';
import { Form, Field, ErrorMessage, useIsFormValid, useForm } from 'vee-validate';

export default {
  components: {
    VueRecaptcha , Form, Field, ErrorMessage
  },
   methods: {
      ValidateEmailActivationCode(){
          axios.post(this.EmailActivationAddress, {
              encryptedEmail: this.$route.params.email,
              code: this.$route.params.code
          }).then(function (response) {                  
            this.Email = response.data.email
 
                }.bind(this))
              .catch(function (error) {
                if(error.response.status == 404){ //User not found
                  alert("کد فعال سازی منقضی شده است لطفاجهت دریافت لینک جدید ایمیل خود را در بخش ثبت نام وارد کنید.")
                  location.replace('/login');
                }else{ // Exception
                  alert("خطای سرور لطفا ساعاتی دیگر مجددا اقدام فرمایید.")
                }
              })
              .finally(function () {
                  // always executed
              }
            );
          },
      SendRegisterRequest(token){
        if(!token){
          alert("خطا در برقراری ارتباط")
          location.reload()
        }
        axios.post(this.RegisterationAddress, {
            EncryptedEmail: this.$route.params.email,
            Code: this.$route.params.code,
            Password: this.password,
            ConfirmPassword: this.confirmPassword,
            Name: this.name,
            Sirname: this.sirname,
            Phonenumber: this.mobile,
            RecapToken: token
        }).then(function (response) {                  
              alert("باموفقیت ثبت نام شدید.")
              this.$router.push('/login')
              }.bind(this))
            .catch(function (error) {
                console.log(error);
            })
            .finally(function () {
                // always executed
            }
          );
        },
        verifyMethod(response){
          this.SendRegisterRequest(response)
        },
        expiredMethod(){
          console.log(response)
        },
        validateEmail(value) {
          if (!value) {
            return 'این فیلد نمی تواند خالی باشد';
          }
          if(value.lenght > 100){
            return 'ایمیل نباید بیشتر از 100 کاراکتر باشد';          
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
            if(value.lenght > 100){
              return 'پسورد نباید بیشتر از 100 کاراکتر باشد';          
            }
            const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[A-Za-z\d@$!%*?&]{8,}$/;
            if(!passwordRegex.test(value)){
              return 'طول پسورد باید 8 کاراکتر شامل حرف کوچک، حرف بزرگ و عدد باشد';          
            }
            return true;
        },
        validateConfPass(value){
          if (!value) {
              return 'این فیلد نمی تواند خالی باشد';
            }

            if(this.password != value){
              return 'با کلمه عبور مغایرت دارد';
            }
            return true;
        },
        validateText(value){
          if (!value) {
                return 'این فیلد نمی تواند خالی باشد';
            }

          if(value.lenght > 100){
            return 'این فیلد نمی تواند بیشتر از 100 کاراکتر باشد';          
          }

            return true;
        },
        validateMobile(value){
          if (!value) {
            return 'این فیلد نمی تواند خالی باشد';
          }

          const regex = /^09\d{9}$/;
          if (!regex.test(value)) {
            return 'لطفا شماره موبایل خود را صحیح وارد کنید';
          }

          return true;
        }
    },
    data () {
        return {
            //apiBaseAddress: 'https://services.mehrbanoo.restaurant/api',
            apiBaseAddress: 'https://localhost:7267/api',
            Email: '',
            password: '',
            confirmPassword: '',
            name: '',
            sirname: '',
            mobile: null,
            siteKey: "6LdOU_QlAAAAADdv6_gT1QLKuphLbRakmzE0L3fP",
            lang: "fa"
        }
    },
    computed: {
        EmailActivationAddress() {
            return this.apiBaseAddress + '/Account/ValidateActivationCode'
        },
        RegisterationAddress() {
            return this.apiBaseAddress + '/Account/Register'
        }
    },
    mounted(){
        this.ValidateEmailActivationCode()
    }
}
</script>
<style lang="">
    
</style>