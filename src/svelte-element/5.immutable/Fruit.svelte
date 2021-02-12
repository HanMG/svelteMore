<script>
    import { afterUpdate } from 'svelte'

    export let name

    let updateCount = 0

    afterUpdate( () => {
        updateCount += 1
    })
</script>

<div>{name} {updateCount}</div>