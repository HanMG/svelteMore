<script>
    import Heropy from './Heropy.svelte'

    let heropy

    function handler() {
        console.log(heropy)
        console.log(heropy.name)
        console.log(heropy.getAge())
    }
</script>

<button on:click={handler}>
    Toggle!
</button> 
<Heropy bind:this={heropy} />