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
                      <img src="/img/details.jpg" class="img-fluid" alt="">
                  </div>
                  <div class="blog_pane">
                      <div class="date">22.10.2022</div>
                      <h3>THREE FLUTE TECHNIQUES YOU NEED TO KNOW</h3>
                      <div class="social_icons">
                          <a href="#"><img src="/img/facebook.svg" class="img-fluid" alt=""></a>
                          <a href="#"><img src="/img/twitter.svg" class="img-fluid" alt=""></a>
                      </div>
                  </div>

                  <p>Everyone who plays guitar remembers the magic of picking up an instrument for the first time: the possibilities, the excitement to try your favorite songs, the potential to join a band and play for people. What many also remember is the frustration: the sore fisngers the slowness of getting the first few concepts, and mastering the dreaded barre chords.<br> It can be daunting to begin but the rewards - and the journey itself - make learning worth it.</p>

                  <p>Here are some tips and tricks to help keep you motivated and making progress, even during the first few weeks.</p>

                  <h2>FIRST, DEFINE YOUR GOALS.</h2>
                  <p>What made you decide to pick up your instrument in the first place? Do you want to play a particular song, or play in a band, or go to music school, or write an award winning album? No matter how big your dreams are, you can break the process down into manageable steps if you know what your goal is. Set something attainable to start - maybe you want to play an open mic within a year and need to learn three songs to fill the time slot. Or you want to learn a loved one's favorite song and surprise them on their birthday. Once you have a goal, you can set a deadline and work backward to see how much time and effort you'll need to put in on a regular basis to see results. If you know why you're practicing, you'll be able to keep going even on days when you don't really want to.</p>

                  <h2>BE CONSISTENT.</h2>
                  <p>Just like studying for a test over the course of a week instead of cramming the night before will get you better results, practicing every day (or as consistently as possible) will speed up your progress. Even if you can only pick up your instrument for a few minutes a day, if you make a point of doing it every day, you're more likely to keep going. Once you've made practicing a habit you enjoy, it becomes easier to practice longer and work on more ambitious skills. It might not seem like you're making huge strides from one day to the next, but you'll be amazed at how far you can progress in a month or two alone a year. And if you miss a day, remember - in terms of the big picture, missing one day won't ruin your progress, so don't stress about it. Start again the next day and keep going from there. That way, you can keep the joy alive and avoid burnout.</p>

                  <div class="img_box">
                      <img src="/img/img2.png" class="img-fluid" alt="">
                  </div>

                  <h2>REDUCE FRICTION.</h2>
                  <p>Anything that stands between you and your guitar will make it harder to practice. If possible, leave the guitar out of its case when it's at home, and if you can leave your practice space set up, do it! A guitar you can see is a guitar you will play, and without having to set up your practice space and tear it down again, you can sneak in more moments throughout the day where you're actually getting your fingertips on the strings. Similarly, keep any supplies you might need on a regular basis on hand so you aren't waiting on a trip to the store or for a shipment to come before you can comfortably play again.<br> <a href="https://www.ubisoft.com/en-us/game/rocksmith/plus/news-updates">https://www.ubisoft.com/en-us /game/rocksmith/plus /news-updates</a><br> Keep these tools handy so you always have what you need to practice. </p>

                  <h2>MAKE YOURSELF COMFORTABLE.</h2>
                  <p>It might seem obvious, but you don't need to suffer to learn an instrument. Use a comfortable chair that's a good height for playing and consider a guitar strap even if you play sitting down. It will help to hold the instrument steady so there's one less worry while you're figuring out where the notes are. Practicing for longer stretches, just like anything else, can also cause muscle aches and sore joints, so be sure to take regular breaks and stretch so practicing doesn't literally become a pain.</p>
              </div>
          </div>                
      </div>
  </div>

  <!-- update area -->
  <!-- <div class="update_area animation">
      <div class="container text-center">
          <h2 class="title">Stay Updated</h2>
          <p>Keep up with our new updates and annoucement</p>
          <form action="#" class="email_form">
              <input type="email" placeholder="Email">
              <button type="submit">
                  <img src="/img/arrow.png" class="img-fluid" alt="">
              </button>
          </form>
      </div>
  </div> -->
</article>

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