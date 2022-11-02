<script>
    export let data
    import { t } from '$lib/translations';

</script>
   
  <section class="blogs_index">
    <div class="container">
      <h1 class="blog_index_title">{$t('blog.title')}</h1>
      <p class="h3 blog_index_subtitle"> Insights from our team, user success stories, and how to get started. </p>

    <ul>
      <div class="customer_container">
        <div class="blogs_section_box">
          {#each data.posts as post}
            <div class="home_section_single_box_main blogs-colour">         
            
              <li>
                <div class="home_section_single_box_figure">
                  <img src="img/blogs/cover/{post.meta.slug}.png">
                </div>
                <h3 class="home_section_single_box_topic">
                  <a href={post.path}>
                    {post.meta.title}
                  </a>
                </h3>
                <div class="home_section_single_box_published">
                Published {post.meta.date}
                </div>
              </li>        
            </div>
            {/each}
        </div>
      </div>
    </ul>
  </div>
</section>



