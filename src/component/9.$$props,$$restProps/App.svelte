<script>
    import TextField from './TextField.svelte'

    let id = ''
    let pw = ''
</script>

<TextField 
    bind:value={id}
    type="email"
    color="yellowgreen"
    placeholder="ID!"
    maxlength="10"
    required
/>
<TextField
    bind:value={pw}
    type="password"
    color="red"
    placeholder="PASSWORD!"    
    required
/>