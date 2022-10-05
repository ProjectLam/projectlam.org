<script>
    export let data
    import { t } from '$lib/translations';
    
</script>
   
    <h1>{$t('blog.title')}</h1>
    
    <ul>
      {#each data.posts as post}
        <li>
          <h2>
            <a href={post.path}>
              {post.meta.title}
            </a>
          </h2>
          Published {post.meta.date}
        </li>
      {/each}
    </ul>