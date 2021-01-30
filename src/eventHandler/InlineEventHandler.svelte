<script>
    // vue에서는 인라인핸들러를 권장하지 않지만 svelte는 권장함
    let fruits = [
        { id: 1, name: 'Apple'},
        { id: 2, name: 'Banana'},
        { id: 3, name: 'Cherry'}
    ]

    function  assign(fruit) {
        fruit.name += '!'
        fruits = fruits
        // $$invalidate(0, fruits)
    }
</script>

<section>
    {#each fruits as fruit (fruit.id)}
        <div on:click={() => assign(fruit)}>
            {fruit.name}
        </div>
    {/each}
</section>

<section>
    {#each fruits as fruit(fruit.id)}
        <div on:click={() => fruit.name += '!'}>
            {fruit.name}
        </div>
    {/each}
</section>
<!-- $$invalidate(0, each_value_1[fruit_index].name += "!", fruits) -->

<!-- 구조분해 -->
<section>
    {#each fruits as {id, name} (id)}
        <div on:click={() => name += '!'}>
            {name}
        </div>
    {/each}    
</section>
<!-- $$invalidate(0, each_value[each_index].name += "!", fruits) -->

<style>
    section {
        border: 1px solid orange;
        margin-bottom: 10px;
    }
</style>