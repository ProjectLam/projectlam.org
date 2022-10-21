<script>	
import { t } from '$lib/translations';

  </script>
<!--
<h1>{$t('home.title')}</h1>
-->

  <!-- hero area start -->
  <div class="hero-area fix d-flex align-items-center">
     <!-- hero shape -->
     <div class="hero-shape">
        <div class="hero-shape-1">
           <img src="/img/h-shape-1.png" alt="">
        </div>
        <div class="hero-shape-2">
           <img src="/img/h-shape-1.png" alt="">
        </div>
        <div class="hero-shape-3">
           <img src="/img/h-shape-2.png" alt="">
        </div>
        <div class="hero-shape-4">
           <img src="/img/h-shape-1.png" alt="">
        </div>
        <div class="hero-shape-5">
           <img src="/img/h-shape-3.png" alt="">
        </div>
     </div>
     <!-- hero shape -->
     <div class="container">
        <div class="row align-items-center">
           <div class="col-lg-7 order-lg-2">
              <div class="hero-img">
                 <img class="vert-move" src="/img/hero-man.png" alt="">
              </div>
           </div>
           <div class="col-lg-5 order-lg-1">
              <div class="hero-text">
               <h2><span> {$t('home.opensource')} </span><br>  {$t('home.learning')} <br> {$t('home.worlds')} <br> {$t('home.instruments')}</h2>           
               <p><span> {$t('home.sec1_title')} </span> {$t('home.sec1_working')} <span>{$t('home.sec1_heritage')}</span> {$t('home.sec1_from')}</p>                 
               <div class="hero-play">
                    <div class="center">
                       <div class="circle pulse rose"></div>
                       <a class="video-popup" href="https://www.youtube.com/watch?v=u31qwQUeGuM"><span><img src="/img/play-btn.png" alt=""></span> {$t('home.sec1_learnmore')}</a>
                    </div>
                 </div>
              </div>
           </div>
        </div>
     </div>
  </div>
  <!-- hero area end -->
  <!-- play area start -->
  <div class="play-area d-flex align-items-center">
     <!-- shape -->
     <div class="play-shape">
        <div class="play-shape-1">
           <img src="/img/play-shape.png" alt="">
        </div>
        <div class="play-shape-2" data-aos="fade-right" data-aos-duration="1000">
           <img src="/img/play-gutter.png" alt="">
        </div>
        <div class="play-shape-3">
           <img src="/img/music-shape-1.png" alt="">
        </div>
     </div>
     <!-- shape -->
     <div class="container">
        <div class="row">
           <div class="col-lg-10 offset-lg-1">
              <div class="play-text">
                 <h2> {$t('home.sec2_title')} <br> {$t('home.sec2_instruments')}</h2>
                 <p> {$t('home.sec2_desc')} </p>
              </div>
           </div>
        </div>
     </div>
  </div>
  <!-- play area end -->
  <!-- music area start -->
  <div class="music-area pt-80 pb-120">
     <div class="container-fluid">
        <div class="row align-items-center">
           <div class="col-md-6">
              <div class="music-img" data-aos="fade-right" data-aos-duration="1000">
                 <img src="/img/music.png" alt="">
              </div>
           </div>
           <div class="col-md-6">
              <div class="music-wrapper">
                 <div class="music-text">
                    <h3> {$t('home.sec3.1_title')} <br> {$t('home.sec3.1_plugins')} </h3>
                    <p> {$t('home.sec3.1_desc')} </p>
                 </div>
                 <div class="music-text music-text-color">
                    <h3> {$t('home.sec3.2_title')} <br> {$t('home.sec3.2_types')}</h3>
                    <p> {$t('home.sec3.1_desc')} </p>
                 </div>
              </div>
           </div>
        </div>
     </div>
  </div>
  <!-- music area end -->
  <!-- comuinity area start -->
  <div class="comuinity-area fix">
     <div class="container-fluid">
        <div class="row align-items-center">
           <div class="col-md-6 order-md-2">
              <div class="comuinity-img text-end" data-aos="fade-left" data-aos-duration="1000">
                 <img src="/img/guitter-man.png" alt="">
              </div>
           </div>
           <div class="col-md-6 order-md-1">
              <div class="comuinity-text">
                 <h2> {$t('home.sec4_title')} <br> {$t('home.sec4_around')} </h2>
                 <p> {$t('home.sec4_desc')} </p>
              </div>
           </div>
        </div>
     </div>
  </div>
  <!-- comuinity area end -->
  <!-- realise area start -->
  <div class="realise-area pt-140 pb-140">
     <div class="container">
        <div class="row">
           <div class="col-12" data-aos="fade-up" data-aos-duration="1000">
              <div class="section-title text-center">
                 <h3> {$t('home.sec5_title')} </h3>
                 <p> {$t('home.sec5_desc1')} <br> {$t('home.sec5_desc2')} </p>
              </div>
           </div>
        </div>
        <div class="row">
           <div class="col-lg-12">
              <div class="realise-wrapper" data-aos="fade-up" data-aos-duration="1400">
                 <div class="realise-box">
                    <div class="realise-img">
                       <img src="/img/rea-1.png" alt="">
                       <div class="realise-text">
                          <h4> {$t('home.sec5_gen1')} </h4>
                          <img src="/img/re-music.png" alt="">
                       </div>
                    </div>
                    <div class="realise-btn">
                       <a href="#">{$t('home.sec5_play')}</a>
                       <a class="real-btn-border" href="#">{$t('home.sec5_share')}</a> 
                    </div>
                 </div>
                 <div class="realise-box">
                    <div class="realise-img">
                       <img src="/img/rea-2.png" alt="">
                       <div class="realise-text">
                          <h4> {$t('home.sec5_gen2')}</h4>
                          <img src="/img/re-music.png" alt="">
                       </div>
                    </div>
                    <div class="realise-btn">
                       <a href="#">{$t('home.sec5_play')}</a>
                       <a class="real-btn-border" href="#">{$t('home.sec5_share')}</a>
                    </div>
                 </div>
                 <div class="realise-box">
                    <div class="realise-img">
                       <img src="/img/rea-3.png" alt="">
                       <div class="realise-text">
                          <h4>{$t('home.sec5_gen3')}</h4>
                          <img src="/img/re-music.png" alt="">
                       </div>
                    </div>
                    <div class="realise-btn">
                       <a href="#">{$t('home.sec5_play')}</a>
                       <a class="real-btn-border" href="#">{$t('home.sec5_share')}</a>
                    </div>
                 </div>
              </div>
           </div>
        </div>
     </div>
  </div>
  <!-- realise area end -->
  <!-- slider area start -->
  <div class="slider-area">
     <div class="slider-shape">
        <img src="/img/music-shape-2.png" alt="">
     </div>
     <div class="container">
        <div class="row align-items-center">
           <div class="col-md-5">
              <div class="slider-actives owl-carousel">
                 <div class="item">
                    <div class="slider-img"><img src="/img/slider-1.png" alt=""></div>
                 </div>
                 <div class="item">
                    <div class="slider-img"><img src="/img/slider-2.png" alt=""></div>
                 </div>
                 <div class="item">
                    <div class="slider-img"><img src="/img/slider-3.png" alt=""></div>
                 </div>
                 <div class="item">
                    <div class="slider-img"><img src="/img/slider-1.png" alt=""></div>
                 </div>
                 <div class="item">
                    <div class="slider-img"><img src="/img/slider-2.png" alt=""></div>
                 </div>
                 <div class="item">
                    <div class="slider-img"><img src="/img/slider-3.png" alt=""></div>
                 </div>
              </div>
           </div>
           <div class="col-md-7">
              <div class="slider-text">
                 <h2> {$t('home.sec6_what')} <br> {$t('home.sec6_happeningin')} <br> {$t('home.sec6_music')} <br> {$t('home.sec6_world')} </h2>
                 <p> {$t('home.sec5_desc')} </p>
              </div>
           </div>
        </div>
     </div>
  </div>
  <!-- slider area end -->
