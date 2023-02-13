<template lang="">
    <div class="container-fluid tabs-section">
        <div class="row">
        <div class="tabs-banner col-6">
            <img src="/src/images/hero/01foodstocks.png" alt="">
        </div>
        <div class="tabs-menu col-6">
            <ul class="nav nav-pills mb-3" id="pills-tab" role="tablist">
  <li class="nav-item" role="presentation">
    <button class="nav-link active" id="pills-home-tab" data-bs-toggle="pill" data-bs-target="#breakfast" type="button" role="tab" aria-controls="pills-home" aria-selected="true">صبحانه</button>
  </li>
  <li class="nav-item" role="presentation">
    <button class="nav-link" id="pills-profile-tab" data-bs-toggle="pill" data-bs-target="#starter" type="button" role="tab" aria-controls="pills-profile" aria-selected="false">دسر ها</button>
  </li>
  <li class="nav-item" role="presentation">
    <button class="nav-link" id="pills-profile-tab" data-bs-toggle="pill" data-bs-target="#launch" type="button" role="tab" aria-controls="pills-profile" aria-selected="false">نهار</button>
  </li>
  <li class="nav-item" role="presentation">
    <button class="nav-link" id="pills-contact-tab" data-bs-toggle="pill" data-bs-target="#dinner" type="button" role="tab" aria-controls="pills-contact" aria-selected="false">شام</button>
  </li>
  <li class="nav-item" role="presentation">
    <button class="nav-link" id="pills-contact-tab" data-bs-toggle="pill" data-bs-target="#drinks" type="button" role="tab" aria-controls="pills-contact" aria-selected="false">نوشیدنی ها</button>
  </li>
</ul>
<div class="tab-content" id="pills-tabContent">
  <div class="tab-pane fade show active" id="breakfast" role="tabpanel" aria-labelledby="pills-home-tab">
    <div class="menu-item">
        <h3>
        صبحانه سنتی
    </h3>
    <p>
        پنیر، مربا، کره، گوجه، خیار، گردو، میوه های فصل، خرما
    </p>
    <span>۱۴,۰۰۰ تومان</span>
    </div>
    <div class="menu-item">
        <h3>
            صبحانه انگلیسی   
         </h3>
         <p>
        لوبیا، قارچ، سوسیس، نیمرو، لیمو یا نارنج، زیتون، گوجه گیلاسی، اسنک بیکن
    </p>
    <span>۱۴,۰۰۰ تومان</span>
    </div>
    <div class="menu-item">
        <h3>
            صبحانه آمریکایی
    </h3>
    <p>
        نیمرو، پنکیک عسل یا نوتلا، اسنک بیکن، گوجه گیلاسی، لیمو یا نارنج
    </p>
    <span>۱۴,۰۰۰ تومان</span>
    </div>
  </div>
  <div class="tab-pane fade" id="starter" role="tabpanel" aria-labelledby="pills-profile-tab">
    <h3>
        صبحانه انگلیسی
    </h3>
    <p>
        لوبیا، قارچ، سوسیس، نیمرو، لیمو یا نارنج، زیتون، گوجه گیلاسی، اسنک بیکن
    </p>
    <span>۱۴,۰۰۰ تومان</span>
  </div>
  <div class="tab-pane fade" id="launch" role="tabpanel" aria-labelledby="pills-profile-tab">
    <h3>
        صبحانه آمریکایی
    </h3>
    <p>
        نیمرو، پنکیک عسل یا نوتلا، اسنک بیکن، گوجه گیلاسی، لیمو یا نارنج
    </p>
    <span>۱۴,۰۰۰ تومان</span>
  </div>
  <div class="tab-pane fade" id="dinner" role="tabpanel" aria-labelledby="pills-contact-tab">
    <h3>
        صبحانه فرانسوی
    </h3>
    <p>
        پنکیک عسل، کره، اسنک نوتلا، میوه فصل
    </p>
    <span>۱۴,۰۰۰ تومان</span>
</div>
<div class="tab-pane fade" id="drinks" role="tabpanel" aria-labelledby="pills-contact-tab">
    <h3>
        صبحانه سنتی
    </h3>
    <p>
        پنیر، مربا، کره، گوجه، خیار، گردو، میوه های فصل، خرما
    </p>
    <span>۱۴,۰۰۰ تومان</span>

  </div>
        </div>

    </div>
</div>
    </div>
</template>
<script>
export default {

}
</script>
<style scoped lang="scss">
.tabs-section {
    background: #f3f0f0;
    padding: 70px 0;
    border-radius: 29px;
    margin-top: -60px;
    z-index: 9;

    .tabs-banner {
        text-align: center;
    }

    .tabs-menu {
        .nav {
            width: 95%;
            display: flex;
            justify-content: space-around;
            padding: 6px 2px;
            border-bottom: 4px solid #9c9992;
            border-radius: 5px;

            li {
                flex: 1 1 auto;

                button {
                    color: #464646;
                    // font-family: mehrit;
                    font-family: 'marr';
    font-weight: 800;
    font-size: 22px;
                    &.active {
                        background-color: #d2a842;
                        color: white;
                        border-radius: 6px;
                        font-weight: 600;

                        // &::after {
                        //     content: " ";
                        //     width: 0;
                        //     height: 0;
                        //     border-width: 21px 11px 0 11px;
                        //     border-color: #d2a842 transparent transparent transparent;
                        //     border-style: solid;
                        //     position: absolute;
                        //     bottom: -20px;
                        //     right: 29px;
                        // }
                    }
                }
            }
        }
    }
}
</style>