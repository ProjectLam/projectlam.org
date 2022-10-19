<script>
import { t,locales,locale } from '$lib/translations';
</script>

<style>
</style>
     <!-- header strat -->
     <header>
        <div class="header-area">
           <div class="container-fluid">
              <div class="row align-items-center header-padding">
                 <div class="col-lg-2">
                    <div class="logo">
                       <a href="index.html"><img src="img/logo.png" alt=""> Lam</a>
                    </div>
                 </div>
                 <div class="col-lg-7">
                    <ul id="menu">
                       <li><a href="#">Home</a></li>
                       <li><a href="#">About</a></li>
                       <li><a href="#">Music</a></li>
                       <li><a href="#">Project</a></li>
                       <li><a href="#">Album</a></li>
                       <li><a href="#">Contact</a></li>
                    </ul>
                 </div>
                 <div class="col-lg-3">
                    <div class="header-right navbar-nav f-right">
                       <!-- Menu -->
                       <!-- Flag Picker -->
                       <div id="options" class="input_box" data-input-name="country2" data-selected-country="GB"></div>
                       <div class="header-right-social">
                          <a href="#"><img src="img/h-icon-1.png" alt=""></a>
                          <a href="#"><img src="img/h-icon-2.png" alt=""></a>
                          <a href="#"><img src="img/h-icon-3.png" alt=""></a>
                       </div>
                    </div>
                 </div>
              </div>
              <!-- hamburger menu -->
              <div class="hamburger-menu">
                 <span class="line-top"></span>
                 <span class="line-center"></span>
                 <span class="line-bottom"></span>
              </div>
           </div>
        </div>
     </header>
     <!-- header end -->

  <!--
              <a href="/blog">{$t('site.header.blog')}</a>
    <a href="/">Home</a>

            <select bind:value="{$locale}">
                {#each $locales as locale}
                <option value="{locale}">{$t(`lang.${locale}`)}</option>
                {/each}
              </select>         
            -->
