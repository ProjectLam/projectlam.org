<script>
    import Header from '$lib/components/Header.svelte'
    import Footer from '$lib/components/Footer.svelte'

    import '$lib/styles/style.scss'

    import '$lib/styles/bootstrap.min.css'
//    import '$lib/styles/fontawesome.min.css'
    import '$lib/styles/aos.css'
//    import '$lib/styles/bootstrap-select-country.min.css'
//    import '$lib/styles/helper.css'
    import '$lib/styles/style.css'
    import '$lib/styles/responsive.css'

    import { fade } from 'svelte/transition'

    export let data


</script>


    <Header />
    
    {#key data.currentRoute}
      <main in:fade={{ duration: 150, delay: 150 }} out:fade={{ duration: 150 }}>
        <slot />
      </main>
    {/key}

    <Footer />


