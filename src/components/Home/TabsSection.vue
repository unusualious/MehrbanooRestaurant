<template lang="">
    <div class="container-fluid tabs-section main-sections ">
        <div class="row ">
            <div class="parallax-sight one">
                <div class="tabs-menu col-12">
                    <ul class="nav nav-pills mb-3" id="pills-tab" role="tablist">
                        <li class="nav-item" role="presentation">
                            <button class="nav-link active" id="pills-home-tab" data-bs-toggle="pill" data-bs-target="#launchdinner" type="button" role="tab" aria-controls="pills-home" aria-selected="true">انواع غذا</button>
                        </li>
                        <li class="nav-item" role="presentation">
                            <button class="nav-link" id="pills-contact-tab" data-bs-toggle="pill" data-bs-target="#drinks" type="button" role="tab" aria-controls="pills-contact" aria-selected="false">نوشیدنی ها</button>
                        </li>
                        <li class="nav-item" role="presentation">
                            <button class="nav-link" id="pills-profile-tab" data-bs-toggle="pill" data-bs-target="#starter" type="button" role="tab" aria-controls="pills-profile" aria-selected="false">هم غذاها</button>
                        </li>
                        <li class="nav-item" role="presentation">
                            <button class="nav-link" id="pills-profile-tab" data-bs-toggle="pill" data-bs-target="#breakfast" type="button" role="tab" aria-controls="pills-profile" aria-selected="false"> صبحانه های لذیذ</button>
                        </li>
                    </ul>
                    <div class="tab-content" id="pills-tabContent">
                        <div class="tab-pane fade show active" id="launchdinner" role="tabpanel" aria-labelledby="pills-home-tab">
                            <div class="menu-item">
                                <div class="item-wrapper">
                                    <!-- items img start -->
                                    <div class="menu-img">
                                        <div class="menu-img-inner">
                                            <img src="/src/images/foods/chelojoojekababran.webp" alt="Img">
                                        </div>
                                    </div>
                                    <!-- items img end -->
                                    <!-- section title start -->
                                    <div>
                                        <h3>چلو جوجه کباب ران </h3>
                                        <p class="item-description">طبخ با 330 گرم ران مرغ</p>
                                        <span v-if="isMobile()" class="item-price">205,000 تومان</span>
                                    </div>
                              
                                    <span v-if="!isMobile()"  class="item-divider"></span>
                                    <span v-if="!isMobile()" class="item-price">205,000 تومان</span>
                                    <!-- section title end -->
                                </div>
                                <!-- divider start -->

                  
                                <!-- divider end -->
                                <!-- section txt start -->
                              
                                <!-- section txt end -->
                            </div>
                            <div class="menu-item">
                                <div class="item-wrapper">
                                    <!-- items img start -->
                                    <div class="menu-img">
                                        <div class="menu-img-inner">
                                            <img src="/src/images/foods/chelojoojekababsine.webp" alt="Img">
                                        </div>
                                    </div>
                                    <!-- items img end -->
                                    <!-- section title start -->
                                    <div>
                                        <h3>چلو جوجه کباب سینه </h3>
                                        <p class="item-description">طبخ با 330 گرم سینه مرغ</p>
                                        <span v-if="isMobile()" class="item-price">195,000 تومان</span>
                                    </div>
                                    <span v-if="!isMobile()"  class="item-divider"></span>
                                    <span v-if="!isMobile()"  class="item-price">195,000 تومان</span>
                                
                                    <!-- section title end -->
                                </div>
                                <!-- divider start -->
                                <div class="divider-m"></div>
                                <!-- divider end -->
                                <!-- section txt start -->
                           
                                <!-- section txt end -->
                            </div>
                            <div class="menu-item">
                                <div class="item-wrapper">
                                    <!-- items img start -->
                                    <div class="menu-img">
                                        <div class="menu-img-inner">
                                            <img src="/src/images/foods/default.png" alt="Img">
                                        </div>
                                    </div>
                                    <!-- items img end -->
                                    <!-- section title start -->
                                    <div>
                                        <h3>چلو فسنجان(ران)</h3>
                                        <p class="item-description">طبخ با ران مرغ</p>
                                        <span v-if="isMobile()" class="item-price">208,000 تومان</span>
                                    </div>
                                    <span v-if="!isMobile()"  class="item-divider"></span>
                                    <span v-if="!isMobile()" class="item-price">208,000 تومان</span>
                                    <!-- section title end -->
                                </div>
                                <!-- divider start -->
                                <div class="divider-m"></div>
                                <!-- divider end -->
                                <!-- section txt start -->
                          
                                <!-- section txt end -->
                            </div>
                            <div class="menu-item">
                                <div class="item-wrapper">
                                    <!-- items img start -->
                                    <div class="menu-img">
                                        <div class="menu-img-inner">
                                            <img src="/src/images/foods/default.png" alt="Img">
                                        </div>
                                    </div>
                                    <!-- items img end -->
                                    <!-- section title start -->
                                    <div>
                                        <h3>خورشت فسنجان(ران)</h3>
                                        <p class="item-description">طبخ با ران مرغ</p>
                                        <span v-if="isMobile()" class="item-price">145,000 تومان</span>
                                    </div>
                                    <span v-if="!isMobile()"  class="item-divider"></span>
                                    <span v-if="!isMobile()" class="item-price">145,000 تومان</span>
                                    <!-- section title end -->
                                </div>
                                <!-- divider start -->
                                <div class="divider-m"></div>
                                <!-- divider end -->
                                <!-- section txt start -->
                              
                                <!-- section txt end -->
                            </div>
                            <div class="menu-item">
                                <div class="item-wrapper">
                                    <!-- items img start -->
                                    <div class="menu-img">
                                        <div class="menu-img-inner">
                                            <img src="/src/images/foods/gheime-sibzamini.webp" alt="Img">
                                        </div>
                                    </div>
                                    <!-- items img end -->
                                    <!-- section title start -->
                                    <div>
                                        <h3>چلو قیمه سیب زمینی</h3>
                                        <p class="item-description">طبخ با 100 گرم گوشت گوسفندی</p>
                                        <span v-if="isMobile()" class="item-price">153,000 تومان</span>
                                    </div>
                                    <span v-if="!isMobile()"  class="item-divider"></span>
                                    <span v-if="!isMobile()" class="item-price">153,000 تومان</span>
                                    <!-- section title end -->
                                </div>
                                <!-- divider start -->
                                <div class="divider-m"></div>
                                <!-- divider end -->
                                <!-- section txt start -->

                                <!-- section txt end -->
                            </div>
                            <div class="menu-item">
                                <div class="item-wrapper">
                                    <!-- items img start -->
                                    <div class="menu-img">
                                        <div class="menu-img-inner">
                                            <img src="/src/images/foods/khoreshtgheymesibzamini.webp" alt="Img">
                                        </div>
                                    </div>
                                    <!-- items img end -->
                                    <!-- section title start -->
                                    <div>
                                        <h3>خورشت قیمه سیب زمینی</h3>
                                        <p class="item-description">طبخ با 100 گرم گوشت گوسفندی</p>
                                        <span v-if="isMobile()" class="item-price">93,000 تومان</span>
                                    </div>
                                    <span v-if="!isMobile()"  class="item-divider"></span>
                                    <span v-if="!isMobile()" class="item-price">93,000 تومان</span>
                                    <!-- section title end -->
                                </div>
                                <!-- divider start -->
                                <div class="divider-m"></div>
                                <!-- divider end -->
                                <!-- section txt start -->

                                <!-- section txt end -->
                            </div>
                            <div class="menu-item">
                                <div class="item-wrapper">
                                    <!-- items img start -->
                                    <div class="menu-img">
                                        <div class="menu-img-inner">
                                            <img src="/src/images/foods/chelogheimebademjan.webp" alt="Img">
                                        </div>
                                    </div>
                                    <!-- items img end -->
                                    <!-- section title start -->
                                    <div>
                                        <h3>چلو قیمه بادمجان</h3>
                                        <p class="item-description">طبخ با 100 گرم گوشت گوسفندی</p>
                                        <span v-if="isMobile()" class="item-price">158,000 تومان</span>
                                    </div>
                                    <span v-if="!isMobile()"  class="item-divider"></span>
                                    <span v-if="!isMobile()" class="item-price">158,000 تومان</span>
                                    <!-- section title end -->
                                </div>
                                <!-- divider start -->
                                <div class="divider-m"></div>
                                <!-- divider end -->
                                <!-- section txt start -->

                                <!-- section txt end -->
                            </div>
                            <div class="menu-item">
                                <div class="item-wrapper">
                                    <!-- items img start -->
                                    <div class="menu-img">
                                        <div class="menu-img-inner">
                                            <img src="/src/images/foods/khoreshtgheyme.webp" alt="Img">
                                        </div>
                                    </div>
                                    <!-- items img end -->
                                    <!-- section title start -->
                                    <div>
                                        <h3>خورشت قیمه بادمجان</h3>
                                        <p class="item-description">طبخ با 100 گرم گوشت گوسفندی</p>
                                        <span v-if="isMobile()" class="item-price">98,000  تومان</span>
                                    </div>
                                    <span v-if="!isMobile()"  class="item-divider"></span>
                                    <span v-if="!isMobile()" class="item-price">98,000 تومان</span>
                                    <!-- section title end -->
                                </div>
                                <!-- divider start -->
                                <div class="divider-m"></div>
                                <!-- divider end -->
                                <!-- section txt start -->
                   
                                <!-- section txt end -->
                            </div>
                            <div class="menu-item">
                                <div class="item-wrapper">
                                    <!-- items img start -->
                                    <div class="menu-img">
                                        <div class="menu-img-inner">
                                            <img src="/src/images/foods/ghormesabzi.webp" alt="Img">
                                        </div>
                                    </div>
                                    <!-- items img end -->
                                    <!-- section title start -->
                                    <div>
                                        <h3>چلو قورمه سبزی</h3>
                                        <p class="item-description">طبخ با 100 گرم گوشت گوسفندی</p>
                                              <span v-if="isMobile()" class="item-price">153,000 تومان</span>
                                    </div>
                                    <span v-if="!isMobile()"  class="item-divider"></span>
                                    <span v-if="!isMobile()" class="item-price">153,000 تومان</span>
                                    <!-- section title end -->
                                </div>
                                <!-- divider start -->
                                <div class="divider-m"></div>
                                <!-- divider end -->
                                <!-- section txt start -->

                                <!-- section txt end -->
                            </div>
                            <div class="menu-item">
                                <div class="item-wrapper">
                                    <!-- items img start -->
                                    <div class="menu-img">
                                        <div class="menu-img-inner">
                                            <img src="/src/images/foods/khoreshtghormesabzi.webp" alt="Img">
                                        </div>
                                    </div>
                                    <!-- items img end -->
                                    <!-- section title start -->
                                    <div>
                                        <h3>خورشت قورمه سبزی</h3>
                                        <p class="item-description">طبخ با 100 گرم گوشت گوسفندی</p>
                                        <span v-if="isMobile()" class="item-price">93,000 تومان</span>
                                    </div>
                                    <span v-if="!isMobile()"  class="item-divider"></span>
                                    <span v-if="!isMobile()" class="item-price">93,000 تومان</span>
                                    <!-- section title end -->
                                </div>
                                <!-- divider start -->
                                <div class="divider-m"></div>
                                <!-- divider end -->
                                <!-- section txt start -->
                                <!-- section txt end -->
                            </div>
                            <div class="menu-item">
                                <div class="item-wrapper">
                                    <!-- items img start -->
                                    <div class="menu-img">
                                        <div class="menu-img-inner">
                                            <img src="/src/images/foods/chelogheimenesar.webp" alt="Img">
                                        </div>
                                    </div>
                                    <!-- items img end -->
                                    <!-- section title start -->
                                    <div>
                                        <h3>چلو قیمه نثار</h3>
                                        <p class="item-description">طبخ با 200 گرم گوشت گوسفندی</p>
  <span v-if="isMobile()" class="item-price">248,000 تومان</span>
                                    </div>
                                    <span v-if="!isMobile()"  class="item-divider"></span>
                                    <span v-if="!isMobile()" class="item-price">248,000 تومان</span>
                                    <!-- section title end -->
                                </div>
                                <!-- divider start -->
                                <div class="divider-m"></div>
                                <!-- divider end -->
                                <!-- section txt start -->
                                <!-- section txt end -->
                            </div>
                            <div class="menu-item">
                                <div class="item-wrapper">
                                    <!-- items img start -->
                                    <div class="menu-img">
                                        <div class="menu-img-inner">
                                            <img src="/src/images/foods/zereshkpolobaranemorghs.webp" alt="Img">
                                        </div>
                                    </div>
                                    <!-- items img end -->
                                    <!-- section title start -->
                                    <div>
                                        <h3>زرشک پلو با مرغ(سینه)</h3>
                                        <p class="item-description">برنج ایرانی طبخ با سینه مرغ</p>
                                        <span v-if="isMobile()" class="item-price">158,000 تومان</span>
                                    </div>
                                    <span v-if="!isMobile()"  class="item-divider"></span>
                                    <span v-if="!isMobile()" class="item-price">158,000 تومان</span>
                                    <!-- section title end -->
                                </div>
                                <!-- divider start -->
                                <div class="divider-m"></div>
                                <!-- divider end -->
                                <!-- section txt start -->

                                <!-- section txt end -->
                            </div>
                            <div class="menu-item">
                                <div class="item-wrapper">
                                    <!-- items img start -->
                                    <div class="menu-img">
                                        <div class="menu-img-inner">
                                            <img src="/src/images/foods/zereshkpolobaranemorgh.webp" alt="Img">
                                        </div>
                                    </div>
                                    <!-- items img end -->
                                    <!-- section title start -->
                                    <div>
                                        <h3>زرشک پلو با مرغ(ران)</h3>
                                        <p class="item-description">برنج ایرانی طبخ با ران مرغ</p>
                                        <span v-if="isMobile()" class="item-price">148,000 تومان</span>
                                    </div>
                                    <span v-if="!isMobile()"  class="item-divider"></span>
                                    <span v-if="!isMobile()" class="item-price">148,000 تومان</span>
                                    <!-- section title end -->
                                </div>
                                <!-- divider start -->
                                <div class="divider-m"></div>
                                <!-- divider end -->
                                <!-- section txt start -->

                                <!-- section txt end -->
                            </div>
                            <div class="menu-item">
                                <div class="item-wrapper">
                                    <!-- items img start -->
                                    <div class="menu-img">
                                        <div class="menu-img-inner">
                                            <img src="/src/images/foods/tahchinkhoreshti.webp" alt="Img">
                                        </div>
                                    </div>
                                    <!-- items img end -->
                                    <!-- section title start -->
                                    <div>
                                        <h3>تهچین خورشتی</h3>
                                        <p class="item-description">قیمه - قورمه - ترکیبی</p>
                                        <span v-if="isMobile()" class="item-price">153,000 تومان</span>
                                    </div>
                                    <span v-if="!isMobile()"  class="item-divider"></span>
                                    <span v-if="!isMobile()" class="item-price">153,000 تومان</span>
                                    <!-- section title end -->
                                </div>
                                <!-- divider start -->
                                <div class="divider-m"></div>
                                <!-- divider end -->
                                <!-- section txt start -->
                                <!-- section txt end -->
                            </div>
                            <div class="menu-item">
                                <div class="item-wrapper">
                                    <!-- items img start -->
                                    <div class="menu-img">
                                        <div class="menu-img-inner">
                                            <img src="/src/images/foods/default.png" alt="Img">
                                        </div>
                                    </div>
                                    <!-- items img end -->
                                    <!-- section title start -->
                                    <div>
                                        <h3>تهچین ساده</h3>
                                        <span v-if="isMobile()" class="item-price">60,000 تومان</span>
                                    </div>
                                    <span v-if="!isMobile()"  class="item-divider"></span>
                                    <span v-if="!isMobile()" class="item-price">60,000 تومان</span>
                                    <!-- section title end -->
                                </div>
                                <!-- divider start -->
                                <div class="divider-m"></div>
                                <!-- divider end -->
                                <!-- section txt start -->
                                <p class="item-description"></p>
                                <!-- section txt end -->
                            </div>
                            <div class="menu-item">
                                <div class="item-wrapper">
                                    <!-- items img start -->
                                    <div class="menu-img">
                                        <div class="menu-img-inner">
                                            <img src="/src/images/foods/khorakjoojekabab.webp" alt="Img">
                                        </div>
                                    </div>
                                    <!-- items img end -->
                                    <!-- section title start -->
                                    <div>
                                        <h3>خوراک جوجه کباب</h3>
                                        <span v-if="isMobile()" class="item-price">155,000 تومان</span>
                                    </div>
                                    <span v-if="!isMobile()"  class="item-divider"></span>
                                    <span v-if="!isMobile()" class="item-price">155,000 تومان</span>
                                    <!-- section title end -->
                                </div>
                                <!-- divider start -->
                                <div class="divider-m"></div>
                                <!-- divider end -->
                                <!-- section txt start -->
                                <p class="item-description">طبخ با 330 گرم سینه یا ران مرغ و دورچین</p>
                                <!-- section txt end -->
                            </div>
                            <div class="menu-item">
                                <div class="item-wrapper">
                                    <!-- items img start -->
                                    <div class="menu-img">
                                        <div class="menu-img-inner">
                                            <img src="/src/images/foods/default.png" alt="Img">
                                        </div>
                                    </div>
                                    <!-- items img end -->
                                    <!-- section title start -->
                                    <div>
                                        <h3>خوراک مرغ با دورچین</h3>
                                        <span v-if="isMobile()" class="item-price">79,000 تومان</span>
                                    </div>
                                    <span v-if="!isMobile()"  class="item-divider"></span>
                                    <span v-if="!isMobile()" class="item-price">79,000 تومان</span>
                                    <!-- section title end -->
                                </div>
                                <!-- divider start -->
                                <div class="divider-m"></div>
                                <!-- divider end -->
                                <!-- section txt start -->
                                <p class="item-description"></p>
                                <!-- section txt end -->
                            </div>
                            <div class="menu-item">
                                <div class="item-wrapper">
                                    <!-- items img start -->
                                    <div class="menu-img">
                                        <div class="menu-img-inner">
                                            <img src="/src/images/foods/kashkebademjan.webp" alt="Img">                                                
                                        </div>
                                    </div>
                                    <!-- items img end -->
                                    <!-- section title start -->
                                    <div>
                                        <h3>کشک و بادمجان</h3>
                                        <span v-if="isMobile()" class="item-price">95,000 تومان</span>
                                    </div>
                                    <span v-if="!isMobile()"  class="item-divider"></span>
                                    <span v-if="!isMobile()" class="item-price">95,000 تومان</span>
                                    <!-- section title end -->
                                </div>
                                <!-- divider start -->
                                <div class="divider-m"></div>
                                <!-- divider end -->
                                <!-- section txt start -->
                                <p class="item-description">کشک محلی</p>
                                <!-- section txt end -->
                            </div>
                            <div class="menu-item">
                                <div class="item-wrapper">
                                    <!-- items img start -->
                                    <div class="menu-img">
                                        <div class="menu-img-inner">
                                            <img src="/src/images/foods/mirzaghasemi.Webp" alt="Img">
                                        </div>
                                    </div>
                                    <!-- items img end -->
                                    <!-- section title start -->
                                    <div>
                                        <h3>میرزاقاسمی</h3>
                                        <span v-if="isMobile()" class="item-price">95,000 تومان</span>
                                    </div>
                                    <span v-if="!isMobile()"  class="item-divider"></span>
                                    <span v-if="!isMobile()" class="item-price">110,000 تومان</span>
                                    <!-- section title end -->
                                </div>
                                <!-- divider start -->
                                <div class="divider-m"></div>
                                <!-- divider end -->
                                <!-- section txt start -->
                                <p class="item-description">سرو با نیمرو و نان</p>
                                <!-- section txt end -->
                            </div>
                            <div class="menu-item">
                                <div class="item-wrapper">
                                    <!-- items img start -->
                                    <div class="menu-img">
                                        <div class="menu-img-inner">
                                            <img src="/src/images/foods/shami3adad.webp" alt="Img">
                                        </div>
                                    </div>
                                    <!-- items img end -->
                                    <!-- section title start -->
                                    <div>
                                        <h3>شامی پوک</h3>
                                        <span v-if="isMobile()" class="item-price">115,000 تومان</span>
                                    </div>
                                    <span v-if="!isMobile()"  class="item-divider"></span>
                                    <span v-if="!isMobile()" class="item-price">115,000 تومان</span>
                                    <!-- section title end -->
                                </div>
                                <!-- divider start -->
                                <div class="divider-m"></div>
                                <!-- divider end -->
                                <!-- section txt start -->
                                <p class="item-description">سه عدد شامی، سرو با خیارشور گوجه و نان</p>
                                <!-- section txt end -->
                            </div>
                            <div class="menu-item">
                                <div class="item-wrapper">
                                    <!-- items img start -->
                                    <div class="menu-img">
                                        <div class="menu-img-inner">
                                            <img src="/src/images/foods/koofteberengi.webp" alt="Img">
                                        </div>
                                    </div>
                                    <!-- items img end -->
                                    <!-- section title start -->
                                    <div>
                                        <h3>کوفته برنجی</h3>
                                        <span v-if="isMobile()" class="item-price">115,000 تومان</span>
                                    </div>
                                    <span v-if="!isMobile()"  class="item-divider"></span>
                                    <span v-if="!isMobile()" class="item-price">115,000 تومان</span>
                                    <!-- section title end -->
                                </div>
                                <!-- divider start -->
                                <div class="divider-m"></div>
                                <!-- divider end -->
                                <!-- section txt start -->
                                <p class="item-description">یک عدد کوفته با نان</p>
                                <!-- section txt end -->
                            </div>
                            <div class="menu-item">
                                <div class="item-wrapper">
                                    <!-- items img start -->
                                    <div class="menu-img">
                                        <div class="menu-img-inner">
                                            <img src="/src/images/foods/chelokare.webp" alt="Img">
                                        </div>
                                    </div>
                                    <!-- items img end -->
                                    <!-- section title start -->
                                    <div>
                                        <h3>چلو کره زعفرانی</h3>
                                        <span v-if="isMobile()" class="item-price">60,000 تومان</span>
                                    </div>
                                    <span v-if="!isMobile()"  class="item-divider"></span>
                                    <span v-if="!isMobile()" class="item-price">60,000 تومان</span>
                                    <!-- section title end -->
                                </div>
                                <!-- divider start -->
                                <div class="divider-m"></div>
                                <!-- divider end -->
                                <!-- section txt start -->
                                <p class="item-description">برنج ایرانی و زعفرانی</p>
                                <!-- section txt end -->
                            </div>
                        </div>
                        <div class="tab-pane fade" id="starter" role="tabpanel" aria-labelledby="pills-profile-tab">
                            <div class="menu-item">
                                <div class="item-wrapper">
                                    <!-- items img start -->
                                    <div class="menu-img">
                                        <div class="menu-img-inner">
                                            <img src="/src/images/foods/mastbooranies.webp" alt="Img">
                                        </div>
                                    </div>
                                    <!-- items img end -->
                                    <!-- section title start -->
                                    <div>
                                        <h3>ماست بورانی اسنفاج</h3>
                                        <span v-if="isMobile()" class="item-price">38,000 تومان</span>
                                    </div>
                                    <span v-if="!isMobile()"  class="item-divider"></span>
                                    <span v-if="!isMobile()" class="item-price">38,000 تومان</span>
                                    <!-- section title end -->
                                </div>
                                <!-- divider start -->
                                <div class="divider-m"></div>
                                <!-- divider end -->
                            </div>
                            <div class="menu-item">
                                <div class="item-wrapper">
                                    <!-- items img start -->
                                    <div class="menu-img">
                                        <div class="menu-img-inner">
                                            <img src="/src/images/foods/mast.webp" alt="Img">
                                        </div>
                                    </div>
                                    <!-- items img end -->
                                    <!-- section title start -->
                                    <div>
                                        <h3>ماست سنتی</h3>
                                        <span v-if="isMobile()" class="item-price">28,000 تومان</span>
                                    </div>
                                    <span v-if="!isMobile()"  class="item-divider"></span>
                                    <span v-if="!isMobile()" class="item-price">28,000 تومان</span>
                                    <!-- section title end -->
                                </div>
                                <!-- divider start -->
                                <div class="divider-m"></div>
                                <!-- divider end -->
                            </div>
                            <div class="menu-item">
                                <div class="item-wrapper">
                                    <!-- items img start -->
                                    <div class="menu-img">
                                        <div class="menu-img-inner">
                                            <img src="/src/images/foods/default.png" alt="Img">
                                        </div>
                                    </div>
                                    <!-- items img end -->
                                    <!-- section title start -->
                                    <div>
                                        <h3>ماست شرکتی</h3>
                                        <span v-if="isMobile()" class="item-price">8,000 تومان</span>
                                    </div>
                                    <span v-if="!isMobile()"  class="item-divider"></span>
                                    <span v-if="!isMobile()" class="item-price">8,000 تومان</span>
                                    <!-- section title end -->
                                </div>
                                <!-- divider start -->
                                <div class="divider-m"></div>
                                <!-- divider end -->
                            </div>
                            <div class="menu-item">
                                <div class="item-wrapper">
                                    <!-- items img start -->
                                    <div class="menu-img">
                                        <div class="menu-img-inner">
                                            <img src="/src/images/foods/default.png" alt="Img">
                                        </div>
                                    </div>
                                    <!-- items img end -->
                                    <!-- section title start -->
                                    <div>
                                        <h3>زیتون پرورده</h3>
                                        <span v-if="isMobile()" class="item-price">38,000 تومان</span>
                                    </div>
                                    <span v-if="!isMobile()"  class="item-divider"></span>
                                    <span v-if="!isMobile()" class="item-price">38,000 تومان</span>
                                    <!-- section title end -->
                                </div>
                                <!-- divider start -->
                                <div class="divider-m"></div>
                                <!-- divider end -->
                            </div>
                            <div class="menu-item">
                                <div class="item-wrapper">
                                    <!-- items img start -->
                                    <div class="menu-img">
                                        <div class="menu-img-inner">
                                            <img src="/src/images/foods/zeytoon.webp" alt="Img">
                                        </div>
                                    </div>
                                    <!-- items img end -->
                                    <!-- section title start -->
                                    <div>
                                        <h3>زیتون ساده</h3>
                                        <span v-if="isMobile()" class="item-price">30,000 تومان</span>
                                    </div>
                                    <span v-if="!isMobile()"  class="item-divider"></span>
                                    <span v-if="!isMobile()" class="item-price">30,000 تومان</span>
                                    <!-- section title end -->
                                </div>
                                <!-- divider start -->
                                <div class="divider-m"></div>
                                <!-- divider end -->
                            </div>
                            <div class="menu-item">
                                <div class="item-wrapper">
                                    <!-- items img start -->
                                    <div class="menu-img">
                                        <div class="menu-img-inner">
                                            <img src="/src/images/foods/default.png" alt="Img">
                                        </div>
                                    </div>
                                    <!-- items img end -->
                                    <!-- section title start -->
                                    <div>
                                        <h3>سبزی خوردن</h3>
                                        <span v-if="isMobile()" class="item-price">10,000 تومان</span>
                                    </div>
                                    <span v-if="!isMobile()"  class="item-divider"></span>
                                    <span v-if="!isMobile()" class="item-price">10,000 تومان</span>
                                    <!-- section title end -->
                                </div>
                                <!-- divider start -->
                                <div class="divider-m"></div>
                                <!-- divider end -->
                            </div>
                            <div class="menu-item">
                                <div class="item-wrapper">
                                    <!-- items img start -->
                                    <div class="menu-img">
                                        <div class="menu-img-inner">
                                            <img src="/src/images/foods/default.png" alt="Img">
                                        </div>
                                    </div>
                                    <!-- items img end -->
                                    <!-- section title start -->
                                    <div>
                                        <h3>شور و ترشی</h3>
                                        <span v-if="isMobile()" class="item-price">10,000 تومان</span>
                                    </div>
                                    <span v-if="!isMobile()"  class="item-divider"></span>
                                    <span v-if="!isMobile()" class="item-price">10,000 تومان</span>
                                    <!-- section title end -->
                                </div>
                                <!-- divider start -->
                                <div class="divider-m"></div>
                                <!-- divider end -->
                            </div>
                            <div class="menu-item">
                                <div class="item-wrapper">
                                    <!-- items img start -->
                                    <div class="menu-img">
                                        <div class="menu-img-inner">
                                            <img src="/src/images/foods/saladshirazi.webp" alt="Img">
                                        </div>
                                    </div>
                                    <!-- items img end -->
                                    <!-- section title start -->
                                    <div>
                                        <h3>سالاد شیرازی</h3>
                                        <span v-if="isMobile()" class="item-price">18,000 تومان</span>
                                    </div>
                                    <span v-if="!isMobile()"  class="item-divider"></span>
                                    <span v-if="!isMobile()" class="item-price">18,000 تومان</span>
                                    <!-- section title end -->
                                </div>
                                <!-- divider start -->
                                <div class="divider-m"></div>
                                <!-- divider end -->
                            </div>
                        </div>
                        <div class="tab-pane fade" id="breakfast" role="tabpanel" aria-labelledby="pills-profile-tab">
                            <div class="menu-item">
                                <div class="item-wrapper">
                                    <!-- items img start -->
                                    <div class="menu-img">
                                        <div class="menu-img-inner">
                                            <img src="/src/images/foods/default.png" alt="Img">
                                        </div>
                                    </div>
                                    <!-- items img end -->
                                    <!-- section title start -->
                                    <div>
                                        <h3>املت </h3>
                                        <span v-if="isMobile()" class="item-price">00,000 تومان</span>
                                    </div>
                                    <span v-if="!isMobile()"  class="item-divider"></span>
                                    <span v-if="!isMobile()" class="item-price">00,000 تومان</span>
                                    <!-- section title end -->
                                </div>
                                <!-- divider start -->
                                <div class="divider-m"></div>
                                <!-- divider end -->
                            </div>
                            <div class="menu-item">
                                <div class="item-wrapper">
                                    <!-- items img start -->
                                    <div class="menu-img">
                                        <div class="menu-img-inner">
                                            <img src="/src/images/foods/default.png" alt="Img">
                                        </div>
                                    </div>
                                    <!-- items img end -->
                                    <!-- section title start -->
                                    <div>
                                        <h3>نیمرو </h3>
                                        <span v-if="isMobile()" class="item-price">00,000 تومان</span>
                                    </div>
                                    <span v-if="!isMobile()"  class="item-divider"></span>
                                    <span v-if="!isMobile()" class="item-price">؟؟؟,۰۰۰ تومان</span>
                                    <!-- section title end -->
                                </div>
                                <!-- divider start -->
                                <div class="divider-m"></div>
                                <!-- divider end -->
                            </div>
                            <div class="menu-item">
                                <div class="item-wrapper">
                                    <!-- items img start -->
                                    <div class="menu-img">
                                        <div class="menu-img-inner">
                                            <img src="/src/images/foods/default.png" alt="Img">
                                        </div>
                                    </div>
                                    <!-- items img end -->
                                    <!-- section title start -->
                                    <div>
                                        <h3>سوسیس تخم مرغ </h3>
                                        <span v-if="isMobile()" class="item-price">00,000 تومان</span>
                                    </div>
                                    <span v-if="!isMobile()"  class="item-divider"></span>
                                    <span v-if="!isMobile()" class="item-price">؟؟؟,۰۰۰ تومان</span>
                                    <!-- section title end -->
                                </div>
                                <!-- divider start -->
                                <div class="divider-m"></div>
                                <!-- divider end -->
                            </div>
                            <div class="menu-item">
                                <div class="item-wrapper">
                                    <!-- items img start -->
                                    <div class="menu-img">
                                        <div class="menu-img-inner">
                                            <img src="/src/images/foods/default.png" alt="Img">
                                        </div>
                                    </div>
                                    <!-- items img end -->
                                    <!-- section title start -->
                                    <div>
                                        <h3>املت سوسیس </h3>
                                        <span v-if="isMobile()" class="item-price">00,000 تومان</span>
                                    </div>
                                    <span v-if="!isMobile()"  class="item-divider"></span>
                                    <span v-if="!isMobile()" class="item-price">؟؟؟,۰۰۰ تومان</span>
                                    <!-- section title end -->
                                </div>
                                <!-- divider start -->
                                <div class="divider-m"></div>
                                <!-- divider end -->
                            </div>
                            <div class="menu-item">
                                <div class="item-wrapper">
                                    <!-- items img start -->
                                    <div class="menu-img">
                                        <div class="menu-img-inner">
                                            <img src="/src/images/foods/default.png" alt="Img">
                                        </div>
                                    </div>
                                    <!-- items img end --> 
                                    <!-- section title start -->
                                    <div>
                                        <h3>کره پنیر با نون تازه </h3>
                                        <span v-if="isMobile()" class="item-price">00,000 تومان</span>
                                    </div>
                                    <span v-if="!isMobile()"  class="item-divider"></span>
                                    <span v-if="!isMobile()" class="item-price">؟؟؟,۰۰۰ تومان</span>
                                    <!-- section title end -->
                                </div>
                                <!-- divider start -->
                                <div class="divider-m"></div>
                                <!-- divider end -->
                            </div>
                            <div class="menu-item">
                                <div class="item-wrapper">
                                    <!-- items img start -->
                                    <div class="menu-img">
                                        <div class="menu-img-inner">
                                            <img src="/src/images/foods/default.png" alt="Img">
                                        </div>
                                    </div>
                                    <!-- items img end -->
                                    <!-- section title start -->
                                    <div>
                                        <h3>چای تازه دم </h3>
                                        <span v-if="isMobile()" class="item-price">00,000 تومان</span>
                                    </div>
                                    <span v-if="!isMobile()"  class="item-divider"></span>
                                    <span v-if="!isMobile()" class="item-price">؟؟؟,۰۰۰ تومان</span>
                                    <!-- section title end -->
                                </div>
                                <!-- divider start -->
                                <div class="divider-m"></div>
                                <!-- divider end -->
                            </div>
                        </div>
                        <div class="tab-pane fade" id="drinks" role="tabpanel" aria-labelledby="pills-contact-tab">
                            <div class="menu-item">
                                <div class="item-wrapper">
                                    <!-- items img start -->
                                    <div class="menu-img">
                                        <div class="menu-img-inner">
                                            <img src="/src/images/foods/sharbatezaferani.webp" alt="Img">
                                        </div>
                                    </div>
                                    <!-- items img end -->
                                    <!-- section title start -->
                                    <div>
                                        <h3>شربت زعفرانی</h3>
                                        <span v-if="isMobile()" class="item-price">38,000 تومان</span>
                                    </div>
                                    <span v-if="!isMobile()"  class="item-divider"></span>
                                    <span v-if="!isMobile()" class="item-price">38,000 تومان</span>
                                    <!-- section title end -->
                                </div>
                                <!-- divider start -->
                                <div class="divider-m"></div>
                                <!-- divider end -->
                            </div>
                            <div class="menu-item">
                                <div class="item-wrapper">
                                    <!-- items img start -->
                                    <div class="menu-img">
                                        <div class="menu-img-inner">
                                            <img src="/src/images/foods/sharbatlimo.webp" alt="Img">
                                        </div>
                                    </div>
                                    <!-- items img end -->
                                    <!-- section title start -->
                                    <div>
                                        <h3>شربت لیمو</h3>
                                        <span v-if="isMobile()" class="item-price">33,000 تومان</span>
                                    </div>
                                    <span v-if="!isMobile()"  class="item-divider"></span>
                                    <span v-if="!isMobile()" class="item-price">33,000 تومان</span>
                                    <!-- section title end -->
                                </div>
                                <!-- divider start -->
                                <div class="divider-m"></div>
                                <!-- divider end -->
                            </div>
                            <div class="menu-item">
                                <div class="item-wrapper">
                                    <!-- items img start -->
                                    <div class="menu-img">
                                        <div class="menu-img-inner">
                                            <img src="/src/images/foods/dooghsonati.webp" alt="Img">
                                        </div>
                                    </div>
                                    <!-- items img end -->
                                    <!-- section title start -->
                                    <div>
                                        <h3>دوغ سنتی</h3>
                                        <span v-if="isMobile()" class="item-price">20,000 تومان</span>
                                    </div>
                                    <span v-if="!isMobile()"  class="item-divider"></span>
                                    <span v-if="!isMobile()" class="item-price">20,000 تومان</span>
                                    <!-- section title end -->
                                </div>
                                <!-- divider start -->
                                <div class="divider-m"></div>
                                <!-- divider end -->
                            </div>
                            <div class="menu-item">
                                <div class="item-wrapper">
                                    <!-- items img start -->
                                    <div class="menu-img">
                                        <div class="menu-img-inner">
                                            <img src="/src/images/foods/default.png" alt="Img">
                                        </div>
                                    </div>
                                    <!-- items img end -->
                                    <!-- section title start -->
                                    <div>
                                        <h3>نوشابه قوطی</h3>
                                        <span v-if="isMobile()" class="item-price">12,000 تومان</span>  
                                    </div>
                                    <span v-if="!isMobile()"  class="item-divider"></span>
                                    <span v-if="!isMobile()" class="item-price">12,000 تومان</span>
                                    <!-- section title end -->
                                </div>
                                <!-- divider start -->
                                <div class="divider-m"></div>
                                <!-- divider end -->
                            </div>
                            <div class="menu-item">
                                <div class="item-wrapper">
                                    <!-- items img start -->
                                    <div class="menu-img">
                                        <div class="menu-img-inner">
                                            <img src="/src/images/foods/default.png" alt="Img">
                                        </div>
                                    </div>
                                    <!-- items img end -->
                                    <!-- section title start -->
                                    <div>
                                        <h3>نوشابه زیرو</h3>
                                        <span v-if="isMobile()" class="item-price">11,000 تومان</span>
                                    </div>
                                    <span v-if="!isMobile()"  class="item-divider"></span>
                                    <span v-if="!isMobile()" class="item-price">11,000 تومان</span>
                                    <!-- section title end -->
                                </div>
                                <!-- divider start -->
                                <div class="divider-m"></div>
                                <!-- divider end -->
                            </div>
                            <div class="menu-item">
                                <div class="item-wrapper">
                                    <!-- items img start -->
                                    <div class="menu-img">
                                        <div class="menu-img-inner">
                                            <img src="/src/images/foods/default.png" alt="Img">
                                        </div>
                                    </div>
                                    <!-- items img end -->
                                    <!-- section title start -->
                                    <div>
                                        <h3>دلستر</h3>
                                        <span v-if="isMobile()" class="item-price">12,000 تومان</span>
                                    </div>
                                    <span v-if="!isMobile()"  class="item-divider"></span>
                                    <span v-if="!isMobile()" class="item-price">12,000 تومان</span>
                                    <!-- section title end -->
                                </div>
                                <!-- divider start -->
                                <div class="divider-m"></div>
                                <!-- divider end -->
                            </div>
                            <div class="menu-item">
                                <div class="item-wrapper">
                                    <!-- items img start -->
                                    <div class="menu-img">
                                        <div class="menu-img-inner">
                                            <img src="/src/images/foods/default.png" alt="Img">
                                        </div>
                                    </div>
                                    <!-- items img end -->
                                    <!-- section title start -->
                                    <div>
                                        <h3>آب معدنی</h3>
                                        <span v-if="isMobile()" class="item-price">5,000 تومان</span>
                                    </div>
                                    <span v-if="!isMobile()"  class="item-divider"></span>
                                    <span v-if="!isMobile()" class="item-price">5,000 تومان</span>
                                    <!-- section title end -->
                                </div>
                                <!-- divider start -->
                                <div class="divider-m"></div>
                                <!-- divider end -->
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    methods: {
    isMobile() {
   if(/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
     return true
   } else {
     return false
   }
 }
  },
}
</script>
<style scoped lang="scss">
.tabs-section {
    padding: 0;
    margin-top: -50px;

    .tabs-banner {
        text-align: center;
    }

    .tabs-menu {
        padding: 50px;
        margin-right: 15px;

        @media (max-width : 750px) {
            padding: 0;
            margin-right: 0;

        }

        .nav {
            display: flex;
            justify-content: center !important;
            flex-wrap: nowrap;
            align-items: flex-end;
            padding: 6px 2px;
            border-radius: 5px;

            li {
                text-align: center;

                button {
                    color: #000;
                    font-weight: 200;
                    font-family: 'mehrit';
                    border-radius: 0;
                    font-size: 18px;
                    border-bottom: 3px solid #556b2f;
                    letter-spacing: -0.5px;

                    &.active {
                        border-bottom: none !important;
                        background-color: transparent;
                        color: #e97451;
                        border-radius: 6px 6px 0 0;
                        border: 2px solid #556b2f;
                        position: relative;
                        font-weight: 600;

                        &::after {
                            content: " ";
                            width: 25px;
                            height: 2px;
                            background-color: #556b2f;
                            position: absolute;
                            bottom: 0;
                            right: -25px;
                        }

                        &::before {
                            content: " ";
                            width: 25px;
                            height: 2px;
                            background-color: #556b2f;
                            position: absolute;
                            bottom: 0;
                            left: -25px;
                        }
                    }
                }
            }
        }

        .tab-content {
            .tab-pane {
                &.active {


                    padding-top: 15px;
                    display: grid;

                    @media (min-width: 768px) {
                        grid-column-gap: 40px;
                        grid-template-columns: repeat(2, 1fr);
                    }

                    .menu-item {
                        margin: 25px 14px;
                        padding: 15px;
                        border-radius: 14px;
                        background: rgb(255 255 255 / 70%);
                        box-shadow: rgb(100 100 111 / 20%) 0px 7px 29px 0px;


                        @media (max-width: 768px) {
                            margin: 20px 0;
                        }

                        &:hover {
                            outline: 3px solid #556b2f;
                            cursor: pointer;

                            img {
                                transform: scale(1.05) !important;
                            }
                        }

                        .item-wrapper {
                            display: flex;
                            align-items: center;
                            min-height: 90px;

                            @media (max-width: 768px) {
                                .menu-img-inner {
                                    width: 110px;
                                    height: 110px;
                                }

                                h3 {
                                    font-size: 21px !important;
                                    letter-spacing: -0.5px;
                                    margin-top: -10px!important;
                                }
                                .item-description {
                            font-size: 15px;
                        }
                            }

                            .menu-img {
                                position: relative;
                                padding: 0 0 0 145px;
                                width: 130px;
                                height: 130px;

                                .menu-img-inner {
                                    width: 130px;
                                    height: 130px;
                                    -webkit-border-radius: 50%;
                                    -moz-border-radius: 50%;
                                    -ms-border-radius: 50%;
                                    -o-border-radius: 50%;
                                    border-radius: 50%;
                                    overflow: hidden;

                                    img {
                                        width: 100%;
                                        height: 100%;
                                        left: 0;
                                        top: 0;
                                        transition: all 0.6s ease-in;
                                        // -webkit-transform: translate(-50%, -50%);
                                        // -moz-transform: translate(-50%, -50%);
                                        // -ms-transform: translate(-50%, -50%);
                                        // -o-transform: translate(-50%, -50%);
                                        // transform: translate(-50%, -50%);
                                        object-fit: cover;
                                        object-position: center;
                                    }
                                }
                            }

                            .item-price {
                                font-size: 19px;
                                font-weight: 800;
                                text-align: center;
                                font-family: "marr";
                                line-height: 1.5;
                                letter-spacing: 0.06em;

                            }

                            h3 {
                                color: #e1734a;
                                font-family: "marr";
                                font-size: 22px;
                                margin-bottom: 10px;
                                margin-top: -20px;
                                text-shadow: 0px 1px 0 #e1734a;
                            }
                        }

                        .item-description {
                            font-size: 17px;
                        }
                    }

                    .item-divider {
                        flex: 1;
                        border-bottom: 1px dashed #2c2121;
                        margin: 0 15px;
                    }
                }
            }
        }
    }



}</style>