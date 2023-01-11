<script>
    export let data;
  </script>

<svelte:head>
    <title>My blog - {data.title}</title>
    <meta property="og:title" content={data.title} />
  </svelte:head>
   <!--
  <article>
    <h1>{ data.title }</h1>
    <p>Published: {data.date}</p>
    <svelte:component this={data.content} />
  </article>

 
  <p> #{JSON.stringify(data)} </p>
 -->

<article class="overflow-hidden">
  <!-- blog area -->
  <div class="blog_details">
      <div class="container">
          <div class="row justify-content-center">
              <div class="col-xl-11">
                  <div class="img_box">
                      <div class="tag">Tips</div>
                      <!-- <img src="/img/details.jpg" class="img-fluid" alt=""> -->
                      <img src= "{data.image}" class="img-fluid" alt="">
                  </div>
                  <div class="blog_pane">
                      <div class="date">{data.date}</div>
                      <h3>{ data.title }</h3>
                      <div class="social_icons">
                          <a href="#"><img src="/img/facebook.svg" class="img-fluid" alt=""></a>
                          <a href="#"><img src="/img/twitter.svg" class="img-fluid" alt=""></a>
                      </div>
                  </div>
                  <div class="img_box"> 
                    <svelte:component this={data.content} />
                  </div>
          </div>                
      </div>
  </div>
</article>

<!-- {#if data.categories && data.categories.length}
<aside>
  <h2>Posted in:</h2>
  <ul>
    {#each data.categories as category}
      <li>
        <a href="/blog/category/{category}">
          {category}
        </a>
      </li>
    {/each}
  </ul>
</aside>
{/if} -->