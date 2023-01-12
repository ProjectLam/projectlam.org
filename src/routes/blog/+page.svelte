<script>
    export let data
    import { t } from '$lib/translations';
    
</script>
   
    <h1>{$t('blog.title')}</h1>
<!--    
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
  -->

    <main class="overflow-hidden">
      <!-- blog area -->
      <div class="blog_wrapper">
          <div class="container">
              <h2 class="title">Blogs & News</h2>
              <p class="lg_text mt_10 pb_30">Find new ideas to learn with our news and blogposts</p>

              <div class="blog_card d-flex align-items-center" data-aos="fade-up">
                  <div class="img_box">
                      <div class="tag">Tips</div>
                      <img src="/img/blog1.png" class="img-fluid" alt="">
                  </div>
                  <div class="card_body">
                      <div class="date">22.10.2022</div>
                      <a href="/blog/1"><h2>Successful Tips to Learn Guitar for Busy People</h2></a>
                      <p>Don't fret, though; these simple tips will help you enjoy learning while still managing your time.</p>
                      <a href="/blog/1" class="more_link">READ MORE</a>
                  </div>
              </div>                
              <div class="blog_card d-flex align-items-center" data-aos="fade-up">
                  <div class="img_box">
                      <div class="tag">Random</div>
                      <img src="/img/blog2.png" class="img-fluid" alt="">
                  </div>
                  <div class="card_body">
                      <div class="date">22.10.2022</div>
                      <a href="#"><h2>WHAT’S THAT SOUND: FUZZ</h2></a>
                      <p>Imagine playing in an otherwise ordinary recording session when a piece of studio equipment fails</p>
                      <a href="#" class="more_link">READ MORE</a>
                  </div>
              </div>
              <div class="blog_card d-flex align-items-center" data-aos="fade-up">
                  <div class="img_box">
                      <div class="tag">Tips</div>
                      <img src="/img/blog3.png" class="img-fluid" alt="">
                  </div>
                  <div class="card_body">
                      <div class="date">22.10.2022</div>
                      <a href="#"><h2>THREE FLUTE TECHNIQUES YOU NEED TO KNOW</h2></a>
                      <p>Imagine playing in an otherwise ordinary recording session when a piece of studio equipment fails</p>
                      <a href="#" class="more_link">READ MORE</a>
                  </div>
              </div>                 
              <div class="blog_card d-flex align-items-center" data-aos="fade-up">
                  <div class="img_box">
                      <div class="tag">Tips</div>
                      <img src="/img/blog4.png" class="img-fluid" alt="">
                  </div>
                  <div class="card_body">
                      <div class="date">22.10.2022</div>
                      <a href="#"><h2>WHAT'S THAT SOUND: CHORUS</h2></a>
                      <p>Imagine playing in an otherwise ordinary recording session when a piece of studio equipment fails</p>
                      <a href="#" class="more_link">READ MORE</a>
                  </div>
              </div>                 
              <div class="blog_card d-flex align-items-center" data-aos="fade-up">
                  <div class="img_box">
                      <div class="tag">Tips</div>
                      <img src="/img/blog3.png" class="img-fluid" alt="">
                  </div>
                  <div class="card_body">
                      <div class="date">22.10.2022</div>
                      <a href="#"><h2>THREE FLUTE TECHNIQUES YOU NEED TO KNOW</h2></a>
                      <p>Imagine playing in an otherwise ordinary recording session when a piece of studio equipment fails</p>
                      <a href="#" class="more_link">READ MORE</a>
                  </div>
              </div>
              <div class="blog_card d-flex align-items-center" data-aos="fade-up">
                  <div class="img_box">
                      <div class="tag">Tips</div>
                      <img src="/img/blog4.png" class="img-fluid" alt="">
                  </div>
                  <div class="card_body">
                      <div class="date">22.10.2022</div>
                      <a href="#"><h2>WHAT'S THAT SOUND: CHORUS</h2></a>
                      <p>Imagine playing in an otherwise ordinary recording session when a piece of studio equipment fails</p>
                      <a href="#" class="more_link">READ MORE</a>
                  </div>
              </div>   
              <!-- pagination -->
              <ul class="pagination">
                  <li><a href="#" class="pg_icon"><img src="/img/prev.svg" class="img-fluid" alt=""></a></li>
                  <li><a href="#" class="active">1</a></li>
                  <li><a href="#">2</a></li>
                  <li><a href="#">3</a></li>
                  <li><a href="#" class="pg_icon"><img src="/img/next.svg" class="img-fluid" alt=""></a></li>
              </ul>
          </div>
      </div>

  
  </main>