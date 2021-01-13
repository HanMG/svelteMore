<script>
    let href = 'https://heropy.blog'
    let name = 'Heropy'
    let value = 'New input value!'
    let isUpperCase = false
</script>

<a {href}>{name}</a>

<input {value} on:input={e=> value = e.target.value} />
<input bind:value />

<div>{isUpperCase ? 'DIV' : 'div'}</div>