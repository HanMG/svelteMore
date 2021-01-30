<script>
    let count = 0

    function increase() {
        count += 1
    }

    function current(e) {
        console.log(e.currentTarget)
    }
</script>

<button 
    on:click={increase}
    on:click={current}    
    on:click={() => console.log('click!')}
>
    Click!
</button>

<h1>{count}</h1>