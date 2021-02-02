<script context="module">
    export let count = 0
    console.log('Moudle context!')
</script>

<script>
    export let fruit   
    console.log('Each Component Init')
</script>

<div on:click={() => count += 1 }>
    {fruit}
</div>