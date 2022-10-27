<script>
    export let data;
  </script>

<svelte:head>
    <title>My blog - {data.title}</title>
    <meta property="og:title" content={data.title} />
  </svelte:head>
  
  <div class="container blog_content"> 
    <article>
      <h1 class="blog_content_head">{ data.title } </h1>
      <p class="blog_content_date">Published: {data.date}</p>
      <svelte:component this={data.content} />
    </article>


    <p> #{JSON.stringify(data)} </p>
    {#if data.categories && data.categories.length}
    <aside>
      <h2 class="blog_content_post">Posted in:</h2>
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
  {/if}
</div>