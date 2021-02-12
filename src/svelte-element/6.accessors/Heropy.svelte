<script>
    let age = 85
    let name = 'Heropy'
    function getAge() {
        console.log(age)
    }
</script>

<svelte:options accessors />

<h1 on:click={getAge}>{name}!</h1>