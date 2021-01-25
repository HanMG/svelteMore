<script>
    import {tick} from 'svelte'

    let isShow = false
    // querySelector나 querySelectorAll 을 통해 찾아하는방법은 전체 DOM을 한번 검색하기때문에 
    // 성능적으로 요소에 바로 Binding하는게 더 좋다고함
    let inputEl

    async function toggle() {
        isShow = !isShow
        await tick()
        // const inputEl = document.querySelector('input')
        inputEl && inputEl.focus()
    }
</script>

<button on:click={toggle}>Edit!</button>

{#if isShow}
    <input type="text" bind:this = {inputEl} />
{/if}