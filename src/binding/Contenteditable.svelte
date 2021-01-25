<script>
    // HTML 구조까지 출력
    let innerHTML = ''
    // text만 출력
    let textContent = 'Hello world!'
</script>

<div contenteditable
    bind:innerHTML
    bind:textContent>        
</div>

<div>{innerHTML}</div>

<div>{textContent}</div>

<!-- innerHTML을 사용하는데 HTML구조는 안나오게 -->
<div> {@html innerHTML }</div>

<style>
    div {
        border: 1px solid red;
        margin-bottom: 10px;
    }
</style>