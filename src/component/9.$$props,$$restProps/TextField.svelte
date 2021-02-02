<script>
    export let value
    export let color
    // $$props
</script>

<div class="my-custom-input">
    <input 
        bind:value
        style="color: {color}"
        {...$$restProps} />
</div>

<style>
    .my-custom-input {
        border-radius: 100px;
        padding: 10px 20px;
    }
</style>