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

<!-- update area -->
	<section id="mailing">
		<div class="update_area" data-aos="fade-up">
			<div class="container text-center">
				<h2 class="title">Stay Updated</h2>
				<p>Keep up with our new updates and annoucement</p>
				<form method="POST" action="https://2d72ee66.sibforms.com/serve/MUIEAJ0NXsKh8YXUMXKLUmWWSY3WTaZlwpN8DZgpykIMLKGPIuFpULi7_gA02X603gV2b0-gi_VUwYgqCGA9AM1QDpvscvtoUYsXspwwJByhr2w5A0M9PT94npKIZkHU-WfubD9IK3kYOLq1dfEJkFmsNsoiVQ9G8BY-OMnz2irb8A3ygJI-Se4agFbRtM1XSmJNfQOKx5ZrbnCl" class="email_form">
					<input class="input" type="email" id="EMAIL" name="EMAIL" autocomplete="off" placeholder="Email" data-required="true" required />                <button type="submit">
						<img src="/img/arrow.png" class="img-fluid" alt="">
					</button>
				</form>
			</div>
		</div>
	</section>
