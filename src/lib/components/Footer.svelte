<script>
   import { t,locales } from '$lib/translations';
   import { onMount } from 'svelte';
   import AOS from 'aos';

   onMount(async () =>  {
     window.AOS = AOS;
     AOS.init();
     await import('$lib/3rd/plugins.js');
     await import('$lib/3rd/main.js')
   });
</script>

<!-- footer area -->
<footer>
	<div class="container">
		<div class="row">
			<div class="col-md-6 mt_50">
				<h2 class="title yellow">Learn and contribute with us</h2>
				<ul class="social_link">
					<li><a href="https://github.com/ProjectLam" target="_blank">Github</a></li>
					<li><a href="https://twitter.com/ProjectLamHQ" target="_blank">Twitter</a></li>
					<li><a href="https://youtube.com/@projectlamhq"target="_blank">Youtube</a></li>
				</ul>
			</div>
			<div class="col-md-3 col-sm-6 mt_50">
				<h4>Get Started</h4>
				<ul class="link_menu">
					<li><a href="/blog">Blog</a></li>
					<li><a href="#">Game</a></li>
					<li><a href="#">Careers</a></li>
					<li><a href="#">Help</a></li>
				</ul>
			</div>
			<div class="col-md-3 col-sm-6 mt_50">
				<h4>Community</h4>
				<ul class="link_menu">
					<li><a href="#">Community Overview</a></li>
					<li><a href="#mailing">Get Involved</a></li>
					<li><a href="#">Showcase</a></li>
					<li><a href="#">Events</a></li>
				</ul>
			</div>
			<div class="col-12 mt_50">
				<a class="navbar-brand" href="/">
					<img src="/img/logo.svg" alt="" />
					Project Lam
				</a>
			</div>
		</div>
		<div class="row footer_bottom pt_15 align-items-center">
			<div class="col-md-5 order-md-2 text-md-end mt_20">
				<ul>
					<li><a href="/privacy-policy">Privacy Policy</a></li>
					<li><a href="/cookies">Cookies</a></li>
					<li><a href="/terms">Terms</a></li>
				</ul>
			</div>
			<div class="col-md-7 order-md-1 mt_20">
				<p>© Copyright 2022 Project Lam All Right Reserved</p>
			</div>
		</div>
	</div>
</footer>