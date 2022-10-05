<script>
    import { t,locales } from '$lib/translations';
</script>
    

<style>
    footer {
      padding: 1rem;
      background: lightskyblue;
      display: flex;
      flex-wrap: wrap;
      justify-content: space-between;
    }
    
    ul {
      margin: 0;
      list-style-type: none;
      display: flex;
      gap: 1rem;
    }
    
    a {
      text-decoration: none;
      color: inherit;
    }
</style>

<footer>
    <a href="/">Home</a>
  
    <nav>
      <ul>
        <li>
            <a href="/blog">{$t('site.header.blog')}</a>
        </li>
        <li>
          <a href="/about">About</a>
        </li>
        <li>
          <a href="/contact">Contact</a>
        </li>
      </ul>
    </nav>
</footer>

