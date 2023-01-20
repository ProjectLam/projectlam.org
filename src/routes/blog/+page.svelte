<script>
    export let data
    import { t } from '$lib/translations';
    
</script>


<!-- <ul>
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
  </ul> -->
 

    <main class="overflow-hidden">
      <!-- blog area -->
      <div class="blog_wrapper">
          <div class="container">
              <h1 class="title">{$t('blog.title')}</h1>
              <p class="lg_text mt_10 pb_30">{$t('blog.subtitle')}</p>
              <ul>
                {#each data.posts as post}
                    <div class="blog_card d-flex align-items-center" data-aos="fade-up">
                        <div class="img_box">
                            <div class="tag">Tips</div>
                            <img src="/img/blog{post.meta.blog}.png" class="img-fluid" alt="">
                        </div>
                        <div class="card_body">
                            <div class="date">{post.meta.date}</div>
                            <a href="{post.path}"><h2>{post.meta.title}</h2></a>
                            <p>{post.meta.desc}</p>
                            <a href="{post.path}" class="more_link">READ MORE</a>
                        </div>
                    </div>
                {/each}
            </ul>

            <!-- blog 2 -->
              <!-- <div class="blog_card d-flex align-items-center" data-aos="fade-up">
                <div class="img_box">
                    <div class="tag">Tips</div>
                    <img src="/img/blog2.png" class="img-fluid" alt="">
                </div>
                <div class="card_body">
                    <div class="date">16.01.2023</div>
                    <a href="/blog/2"><h2>Getting started with playing the guitar</h2></a>
                    <p>Starting anything is very challenging, but once you understand the techniques, pick up the language, and practice regularly, you can accomplish it</p>
                    <a href="/blog/2" class="more_link">READ MORE</a>
                </div>
            </div> -->

            
              <!-- pagination -->
              <!-- <ul class="pagination">
                  <li><a href="#" class="pg_icon"><img src="/img/prev.svg" class="img-fluid" alt=""></a></li>
                  <li><a href="#" class="active">1</a></li>
                  <li><a href="#">2</a></li>
                  <li><a href="#">3</a></li>
                  <li><a href="#" class="pg_icon"><img src="/img/next.svg" class="img-fluid" alt=""></a></li>
              </ul> -->
          </div>
      </div>
  </main>
