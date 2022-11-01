<script>
import { t,locales,locale } from '$lib/translations';
</script>

<style>
</style>


    <!-- start header -->
    <header class="navbar navbar-expand-lg">
      <div class="container">
          <a class="navbar-brand" href="index.html">
              <img src="img/logo.svg" alt="">
              Lam Project
          </a>
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#nav" aria-expanded="false">
              <img src="img/bars.svg" class="img-fluid" alt="">
          </button>
          <div class="collapse navbar-collapse" id="nav">
              <ul class="navbar-nav mx-auto mb-2 mb-lg-0">
                  <li class="nav-item">
                      <a class="nav-link" href="index.html">Home</a>
                  </li>
                  <li class="nav-item">
                      <a class="nav-link" href="#">Tutorials</a>
                  </li>                    
                  <li class="nav-item">
                      <a class="nav-link" href="blog.html">Blog</a>
                  </li>                    
                  <li class="nav-item">
                      <a class="nav-link" href="#">Community</a>
                  </li>
                  <li class="nav-item dropdown">
                      <a class="nav-link dropdown-toggle" href="#" data-bs-toggle="dropdown" aria-expanded="false">
                          More
                      </a>
                      <ul class="dropdown-menu">
                          <li><a class="dropdown-item" href="#">Action</a></li>
                          <li><a class="dropdown-item" href="#">Another action</a></li>
                          <li><a class="dropdown-item" href="#">Something</a></li>
                      </ul>
                  </li>
              </ul>
              <div class="right_content d-flex align-items-center">
                  <div class="dropdown">
                      <a class="dropdown-toggle" href="#" data-bs-toggle="dropdown" aria-expanded="false">
                          EN
                      </a>

                      <ul class="dropdown-menu">
                          <li><a class="dropdown-item" href="#">EN</a></li>
                          <li><a class="dropdown-item" href="#">NL</a></li>
                          <li><a class="dropdown-item" href="#">EO</a></li>
                      </ul>
                  </div>
                  <a href="#" class="head_btn">Get help</a>
              </div>
          </div>
      </div>
  </header>



  <!--
              <a href="/blog">{$t('site.header.blog')}</a>
    <a href="/">Home</a>

            <select bind:value="{$locale}">
                {#each $locales as locale}
                <option value="{locale}">{$t(`lang.${locale}`)}</option>
                {/each}
              </select>         
            -->
