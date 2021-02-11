<script>
    import Heropy from './Heropy.svelte'

    let toggle = false
</script>

<button on:click={() => toggle = !toggle}>
    Toggle!
</button>

{#if toggle}
    <Heropy />
{/if}