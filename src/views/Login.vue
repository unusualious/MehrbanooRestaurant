<template lang="">
    <section class='login'>
    <div class='login--wrap clearfix'>
      <div class="row clearfix">
        <div class="col col-6 login--l">
          <div class="title"><span class='text'>ورود به حساب</span></div>
          <div class='login--body'>
              <label class='label'>آدرس ایمیل</label>
              <input  type='text' placeholder='آدرس ایمیل' required />

              <label class='label'>کلمه عبور</label>
              <input type='password' placeholder='*********' required />

            <div class='sbmt'>
              <button class='main-btn'> <span> ورود </span></button>
            </div>
          </div>
        </div>
        <div class="col col-6 login--s">
          <div class="title"><span class='text'>ثبت نام</span></div>
          <div class='login--body'>
              <label class='label'>نام کاربری</label>
              <input type='text' placeholder='نام کاربری' required />

              <label class='label'>آدرس ایمیل</label>
              <input type='text' placeholder='john@doe.com' required />
              <label class='label'>کلمه عبور</label>
              <input type='password' placeholder='*********' required />
              <div class='label'>تایید کلمه عبور</div>
              <input type='password' placeholder='*********' required />
            <div class='sbmt'>
              <button class='main-btn'><span> ثبت نام </span></button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>

</template>
<script>
export default {
    
}
</script>
<style lang="">
    
</style>