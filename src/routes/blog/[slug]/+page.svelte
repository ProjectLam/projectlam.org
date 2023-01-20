<script>
    export let data;
  </script>
<svelte:head>
    <title>My blog - {data.title}</title>
    <meta property="og:title" content={data.title} />
    <meta name="twitter:card" content="summary_large_image"/>
    <meta name="twitter:site" content="@ProjectLamHQ"/>
    <meta name="twitter:title" content="{data.title}"/>
    <meta name="twitter:image" content="{data.image}"/>
    <meta property="og:url"     content="https://projectlam.org/blog/{data.blog}" />
    <meta property="og:type"    content="website" />
    <meta property="og:image"   content="https://projectlam.org/img/blog{data.image}.png" />
  </svelte:head>
  <!-- <p> #{JSON.stringify(data)} </p>  -->
<article class="overflow-hidden">
  <!-- blog area -->
  <div class="blog_details">
      <div class="container">
          <div class="row justify-content-center">
              <div class="col-xl-11">
                  <div class="img_box">
                      <div class="tag">Tips</div>
                      <img src= "{data.image}" class="img-fluid" alt="">
                  </div>
                  <div class="blog_pane">
                      <div class="date">{data.date}</div>
                      <h3>{data.title}</h3>
                      <div class="social_icons"> 
                      <a href="https://www.facebook.com/sharer/sharer.php?u=https://projectlam.org/blog/{data.blog}">
                        <img src="/img/facebook.svg" class="img-fluid" alt="Share on Facebook">
                      </a>
                      <a href="https://twitter.com/intent/tweet?text=Check out this website!&url=https://projectlam.org/blog/{data.blog}&hashtags=Projectlam,Guitar">
                        <img src="/img/twitter.svg" class="img-fluid" alt="Share on Twitter">
                      </a>
                      </div>
                  </div>
                  <div class="img_box"> 
                    <svelte:component this={data.content} />
                  </div>
          </div>                
      </div>
  </div>
</article>

{#if data.categories && data.categories.length}
<aside>
  <!-- <h2>Posted in:</h2> -->
  <ul>
    {#each data.categories as category}
      <li>
        <a href="/blog/category/{category}">
          <!-- {category} -->
        </a>
      </li>
    {/each}
  </ul>
</aside>
{/if}