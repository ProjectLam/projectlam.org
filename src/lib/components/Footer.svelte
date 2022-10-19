<script>
    import { t,locales } from '$lib/translations';
    import { onMount } from 'svelte';
    import jQuery from 'jquery';
    import AOS from 'aos';
  //  import { browser } from '$app/environment';
  //  import {tns} from 'tiny-slider?client';

    onMount(async () =>  {
      window.jQuery = jQuery; 
      window.AOS = AOS;
      await import('$lib/3rd/bootstrap.min.js?client')    
      await import('$lib/3rd/fontawesome.min.js?client')
      await import('$lib/3rd/bootstrap-select-country.min.js')
      await import('$lib/3rd/owl.carousel.min.js')
      await import('$lib/3rd/jquery.magnific-popup.js')
      await import('$lib/3rd/plugins.js');
      await import('$lib/3rd/main.js')
    });
</script>
    

<style>
</style>

<footer>
  <div class="footer-area pt-90 pb-60">
     <div class="container">
        <div class="row">
           <div class="col-md-5">
              <div class="footer-logo">
                 <a href="#"><img src="/img/logo.png" alt=""> Lam</a>
              </div>
           </div>
           <div class="col-md-7">
              <div class="footer-menu text-end">
                 <ul>
                    <li><a href="#">Home</a></li>
                    <li><a href="#">About</a></li>
                    <li><a href="#">Blog</a></li>
                    <li><a href="#">Contact</a></li>
                 </ul>
              </div>
              <div class="footer-socia text-end">
                 <a href="#"><img src="/img/h-icon-1.png" alt=""></a>
                 <a href="#"><img src="/img/h-icon-2.png" alt=""></a>
                 <a href="#"><img src="/img/h-icon-3.png" alt=""></a>
              </div>
           </div>
        </div>
        <div class="row">
           <div class="col-12">
              <div class="copy-text">
                 <p>&copy; 2022 Lam All Rights Reserved.</p>
              </div>
           </div>
        </div>
     </div>
  </div>
</footer>
<!--====== BACK TO TOP START ======-->
<a href="#" class="back-to-top"><img src="/img/backto-top.png" alt=""></a>
<!--====== BACK TO TOP ENDS ======-->