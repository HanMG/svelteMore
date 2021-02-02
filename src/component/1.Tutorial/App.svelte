<script>
    import { onMount } from 'svelte'
    import Hmg from '../Hmg.svelte'     

    let hmg

    onMount(() => {
        console.log(hmg)        
    })
</script>

<Hmg title="Good!" bind:this={hmg} />