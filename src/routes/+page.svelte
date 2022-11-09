<script>	
import { t } from '$lib/translations';

  </script>
<!--
<h1>{$t('home.title')}</h1>
-->
<main class="overflow-hidden">
   <!-- hero section -->
   <div class="hero_area">
       <div class="container">
           <div class="row justify-content-center">
               <div class="col-xl-11">
                   <h1>OPEN-SOURCE SOFTWARE FOR LEARNING THE WORLD'S INSTRUMENTS</h1>

                   <p>Lam Project is working on building software that helps people learn heritage instruments from all around the world. We have an open source program that lets people</p>
               </div>
           </div>
       </div>
       <img src="/img/wave.gif" class="w-100" alt="">
       <div class="container btn_wrap text-center">
           <a href="#mailing" class="button">LEARN NOW</a>
       </div>
   </div>
   <div class="bg_img position-relative">
       <img src="/img/bg1.png" class="w-100 b_imges" alt="">
       <!-- learn section -->
       <div class="learn_area position-relative" data-aos="fade-up">
           <div class="container">
               <div class="row gx-5 justify-content-end align-items-center">
                   <div class="col-lg-6 col-md-5 mt_40 ab1">
                       <img src="/img/img1.png" class="img-fluid" alt="">
                   </div>
                   <div class="col-lg-6 col-md-7 mt_40">
                       <h2 class="title">Learn how to play instruments</h2>
                       <p class="lg_text mt_50">We have a group of built in instruments you can learn how to play various <span class="pink">heritage instruments.</span> Incremental progress on how to play. You can connect electric instruments into the computer, or use a microphone to record them.</p>

                       <h3 class="title_md mt_45">50,000</h3>
                       <p class="lg_text mt_10">People will learn this year</p>
                   </div>
               </div>
           </div>
       </div>
       <!-- instrument area -->
       <div class="instrument_area" data-aos="fade-up">
           <div class="container position-relative">
               <div class="row">
                   <div class="col-md-5 order-md-2 mt_40 ab2">
                       <img src="/img/dj.svg" class="w-100" alt="">
                   </div>
                   <div class="col-md-7 order-md-1 mt_40">
                       <h2 class="title yellow">Build new<br> instrument Plugins</h2>
                       <p class="lg_text mt_100">Platform allows for creating new instruments, that you can add as plugins, or submit pull requests to integrate back into the main platform.</p>
                   </div> 
               </div>
           </div>
       </div>        

       <!-- integrate area -->
       <div class="integrate_area" data-aos="fade-up">
           <div class="container position-relative">
               <div class="row gx-5 align-items-center">
                   <div class="col-lg-6 col-md-5 mt_40">
                       <img src="/img/head.svg" class="img-fluid" alt="">
                   </div>
                   <div class="col-lg-6 col-md-7 mt_40">
                       <h2 class="title">Integrate various types of music</h2>
                       <p class="lg_text mt_100">Platform allows for creating new instruments, that you can add as plugins, or submit pull requests to integrate back into the main platform.</p>
                   </div> 
               </div>
           </div>
       </div>
   </div>

   <!-- community area -->
   <div class="community_area pt_80" data-aos="fade-up">
       <div class="container">
           <div class="community_box">
               <img src="/img/line.svg" class="line line2" alt="">
               <div class="community_content">
                   <h4>COMMUNITY AROUND THE WORLD</h4>
                   <p class="mt_40">We have a community of people learning various heritage music from around the world. See what other players are learning, what are the most popular songs. We will soon have tools to convert music from one instrument to another</p>
                   <a href="#" class="button mt_45 pink_btn">GET INVOLVED</a>
               </div>
               <img src="/img/line.svg" class="line" alt="">
           </div>
       </div>
   </div>

   <!-- blog area -->
   <div class="blog_area">
       <div class="container">
           <h2 class="title pb_100">Blog & News</h2>
           <div class="row justify-content-center">
               <div class="col-lg-11">
                   <div class="row g-5" data-aos="fade-up">
                       <div class="col-md-6">
                           <div class="blog_box">
                               <div class="date">22.10.2022</div>
                               <a href="#"><h3>HOW TO START PLAYING PHIN</h3></a>
                               <p>Use these tips and tricks to make the most of your first weeks with the instrument.</p>
                           </div>
                       </div>                            
                       <div class="col-md-6">
                           <div class="blog_box">
                               <div class="date">10.10.2022</div>
                               <a href="#"><h3>WHAT’S THAT SOUND: FUZZ</h3></a>
                               <p>Imagine playing in an otherwise ordinary recording session when a piece of studio equipment fails</p>
                           </div>
                       </div>                            
                       <div class="col-md-6">
                           <div class="blog_box">
                               <div class="date">22.10.2022</div>
                               <a href="#"><h3>THREE EXTREME FLUTE TECHNIQUES YOU NEED TO KNOW</h3></a>
                               <p>Use these tips and tricks to make the most of your first weeks with the instrument.</p>
                           </div>
                       </div>                            
                       <div class="col-md-6">
                           <div class="blog_box">
                               <div class="date">22.10.2022</div>
                               <a href="#"><h3>WHAT'S THAT SOUND: CHORUS</h3></a>
                               <p>Imagine playing in an otherwise ordinary recording session when a piece of studio equipment fails</p>
                           </div>
                       </div>
                       <div class="col-12 text-end">
                           <a href="#" class="see_link">
                               See more
                               <img src="/img/arrow.png" alt="">
                           </a>
                       </div>
                   </div>
               </div>
           </div>
       </div>
   </div>

   <!-- get started area -->
   <div class="get_started" data-aos="fade-up">
       <div class="container">
           <h2 class="title">Ready to get started?</h2>
           <div class="row justify-content-center">
               <div class="col-lg-11">
                   <ul class="nav nav-pills">
                       <li class="nav-item">
                           <button class="nav-link" data-bs-toggle="pill" data-bs-target="#video" type="button">Video</button>
                       </li>
                       <li class="nav-item">
                           <button class="nav-link active" data-bs-toggle="pill" data-bs-target="#screen" type="button">Screenshots</button>
                       </li>
                   </ul>
                   <div class="tab-content">
                       <div class="tab-pane fade" id="video">
                           <div id="carousel2" class="carousel slide" data-bs-ride="false">
                               <div class="carousel-inner">
                                   <div class="carousel-item active">
                                       <div class="row g-4">
                                           <div class="col-md-6">
                                               <img src="/img/screenshot1.png" class="w-100" alt="">
                                           </div>                                        
                                           <div class="col-md-6">
                                               <img src="/img/screenshot2.png" class="w-100" alt="">
                                           </div>                                        
                                           <div class="col-md-4">
                                               <img src="/img/screenshot3.png" class="w-100" alt="">
                                           </div>                                        
                                           <div class="col-md-4">
                                               <img src="/img/screenshot4.png" class="w-100" alt="">
                                           </div>                                        
                                           <div class="col-md-4">
                                               <img src="/img/screenshot5.png" class="w-100" alt="">
                                           </div>
                                       </div>
                                   </div>
                                   <div class="carousel-item">
                                       <div class="row g-4">
                                           <div class="col-md-6">
                                               <img src="/img/screenshot1.png" class="w-100" alt="">
                                           </div>                                        
                                           <div class="col-md-6">
                                               <img src="/img/screenshot2.png" class="w-100" alt="">
                                           </div>                                        
                                           <div class="col-md-4">
                                               <img src="/img/screenshot3.png" class="w-100" alt="">
                                           </div>                                        
                                           <div class="col-md-4">
                                               <img src="/img/screenshot4.png" class="w-100" alt="">
                                           </div>                                        
                                           <div class="col-md-4">
                                               <img src="/img/screenshot5.png" class="w-100" alt="">
                                           </div>
                                       </div>
                                   </div>
                               </div>
                               <button class="carousel-control-prev" type="button" data-bs-target="#carousel2" data-bs-slide="prev">
                                   <img src="/img/prev.svg" class="img-fluid" alt="">
                               </button>
                               <button class="carousel-control-next" type="button" data-bs-target="#carousel2" data-bs-slide="next">
                                   <img src="/img/next.svg" class="img-fluid" alt="">
                               </button>
                           </div>
                           <div class="text-center mt_60">
                               <a href="#" class="button">LEARN NOW</a>
                           </div>
                       </div>
                       <div class="tab-pane fade show active" id="screen">
                           <div id="carousel" class="carousel slide" data-bs-ride="false">
                               <div class="carousel-inner">
                                   <div class="carousel-item active">
                                       <div class="row g-4">
                                           <div class="col-md-6">
                                               <img src="/img/screenshot1.png" class="w-100" alt="">
                                           </div>                                        
                                           <div class="col-md-6">
                                               <img src="/img/screenshot2.png" class="w-100" alt="">
                                           </div>                                        
                                           <div class="col-md-4">
                                               <img src="/img/screenshot3.png" class="w-100" alt="">
                                           </div>                                        
                                           <div class="col-md-4">
                                               <img src="/img/screenshot4.png" class="w-100" alt="">
                                           </div>                                        
                                           <div class="col-md-4">
                                               <img src="/img/screenshot5.png" class="w-100" alt="">
                                           </div>
                                       </div>
                                   </div>
                                   <div class="carousel-item">
                                       <div class="row g-4">
                                           <div class="col-md-6">
                                               <img src="/img/screenshot1.png" class="w-100" alt="">
                                           </div>                                        
                                           <div class="col-md-6">
                                               <img src="/img/screenshot2.png" class="w-100" alt="">
                                           </div>                                        
                                           <div class="col-md-4">
                                               <img src="/img/screenshot3.png" class="w-100" alt="">
                                           </div>                                        
                                           <div class="col-md-4">
                                               <img src="/img/screenshot4.png" class="w-100" alt="">
                                           </div>                                        
                                           <div class="col-md-4">
                                               <img src="/img/screenshot5.png" class="w-100" alt="">
                                           </div>
                                       </div>
                                   </div>
                               </div>
                               <button class="carousel-control-prev" type="button" data-bs-target="#carousel" data-bs-slide="prev">
                                   <img src="/img/prev.svg" class="img-fluid" alt="">
                               </button>
                               <button class="carousel-control-next" type="button" data-bs-target="#carousel" data-bs-slide="next">
                                   <img src="/img/next.svg" class="img-fluid" alt="">
                               </button>
                           </div>
                           <div class="text-center mt_60">
                               <a href="#mailing" class="button">LEARN NOW</a>
                           </div>
                       </div>
                   </div>
               </div>
           </div>
       </div>
   </div>

   <!-- update area -->
    <!-- <div class="update_area" data-aos="fade-up">
        <div class="container text-center">
            <h2 class="title">Stay Updated111</h2>
            <p>Keep up with our new updates and annoucement</p>
            <form method="POST" action="https://2d72ee66.sibforms.com/serve/MUIEAJ0NXsKh8YXUMXKLUmWWSY3WTaZlwpN8DZgpykIMLKGPIuFpULi7_gA02X603gV2b0-gi_VUwYgqCGA9AM1QDpvscvtoUYsXspwwJByhr2w5A0M9PT94npKIZkHU-WfubD9IK3kYOLq1dfEJkFmsNsoiVQ9G8BY-OMnz2irb8A3ygJI-Se4agFbRtM1XSmJNfQOKx5ZrbnCl" class="email_form">
                    <input class="input" type="email" id="EMAIL" name="EMAIL" autocomplete="off" placeholder="Email" data-required="true" required />                <button type="submit">
                    <img src="/img/arrow.png" class="img-fluid" alt="">
                </button>
            </form>
        </div>
    </div> -->
   
</main>

