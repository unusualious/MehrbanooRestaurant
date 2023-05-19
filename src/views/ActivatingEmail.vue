<template lang="">
    <section class='login'>
    <div class='login--wrap clearfix'>
      <div class="row clearfix">
        <div class="col col-6 login--l">
          <div class="title"><span class='text'>ثبت نام</span></div>
          <div class='login--body'>
              <label class='label'>آدرس ایمیل</label>
              <input  type='text' placeholder='آدرس ایمیل' v-model="Email" readonly='true' required />
              <label class='label'>کلمه عبور</label>
              <input type='password' v-model="password" placeholder='*********' required />
              <label class='label'>تکرار کلمه عبور</label>
              <input type='password' v-model="confirmPassword" placeholder='*********' required />
              <label class='label'>نام</label>
              <input type='text' v-model="name" placeholder='نام' required />
              <label class='label'>نام خانوادگی</label>
              <input type='text' v-model="sirname" placeholder='نام خانوادگی' required />

            <div class='sbmt'>
              <vue-recaptcha :sitekey="siteKey"
              :language ="lang"
              @verify="verifyMethod"
              @expired="expiredMethod">
                <button class='main-btn'> <span> ثبت نام </span></button>
              </vue-recaptcha>
            </div>
          </div>
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

export default {
  components: {
    VueRecaptcha 
  },
   methods: {
      ValidateEmailActivationCode(){
          axios.post(this.EmailActivationAddress, {
              encryptedEmail: this.$route.params.email,
              code: this.$route.params.code
          }).then(function (response) {                  
                if(response.status == 200){ //Email has been sent
                  this.Email = response.data.Email
                }else if(response.status == 404){ //User not found
                  alert("کد فعالسازی اشتباه است")
                }else{ // Exception
                  alert("خطای سرور لطفا ساعاتی دیگر مجددا اقدام فرمایید.")
                }
                }.bind(this))
              .catch(function (error) {
                  console.log(error);
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
            encryptedEmail: this.$route.params.email,
            code: this.$route.params.code,
            password: this.password,
            confirmPassword: this.confirmPassword,
            name: this.name,
            sirname: this.sirname,
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
        }
    },
    data () {
        return {
            apiBaseAddress: 'https://localhost:44324/api/',
            Email: '',
            password: '',
            confirmPassword: '',
            name: '',
            sirname: '',
            siteKey: "6LdOU_QlAAAAADdv6_gT1QLKuphLbRakmzE0L3fP",
            lang: "fa"
        }
    },
    computed: {
        EmailActivationAddress() {
            return this.apiBaseAddress + 'Account/ValidateActivationCode'
        },
        RegisterationAddress() {
            return this.apiBaseAddress + 'Account/Register'
        }
    },
    mounted(){
        this.ValidateEmailActivationCode()
    }
}
</script>
<style lang="">
    
</style>