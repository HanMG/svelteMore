<script>
    import Card from './Card.svelte'
</script>

<Card>
    <div slot="age">85</div>
    <h2 slot="name">HMG1</h2>
    <div slot="email" let:domain>
        hanmoongoo{domain}
    </div>
</Card>
<Card>
    <span slot="email"
        let:domain
        let:hello>
        mg{domain} / {hello}
    </span>    
    <h3 slot="name">HMG2</h3>   
</Card>

<style>
    h3 {
        color: red;
    }
</style>