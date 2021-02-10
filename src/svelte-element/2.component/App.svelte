<script>
    import Heropy from './Heropy.svelte'
    import Neo from './Neo.svelte'

    let components = [
        { name : 'Heropy', comp: Heropy},
        { name : 'Neo', comp: Neo}
    ]

    let selected = components[0].comp

    let index = 1
</script>

{#each components as {name, comp}, i (name) }
    <label>
        <input type="radio" 
            value={comp}
            bind:group={selected}
            on:change={() => index = i + 1}
        />
    </label>    
{/each}


<svelte:component this = {selected} {index} />

<div>{selected}</div>

<!-- {#if selected === 'Heropy'}
    <Heropy />
{:else if selected === 'Neo'}
    <Neo />
{/if} -->

