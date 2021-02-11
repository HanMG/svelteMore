<!-- document.head -->
<svelte:head>
    <link rel="stylesheet" href="./main.css">
</svelte:head>


<svelte:body on:mousemove = {
    e => console.log(e.clientX, e.clientY)
} />

<h1>Heropy!</h1>