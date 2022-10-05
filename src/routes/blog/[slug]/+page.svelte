<script>
    export let data;
  </script>
  
  <article>
    <h1>{ data.title }</h1>
    <p>Published: {data.date}</p>
    <svelte:component this={data.content} />
  </article>

  <p> #{JSON.stringify(data)} </p>
  {#if data.categories && data.categories.length}
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
{/if}