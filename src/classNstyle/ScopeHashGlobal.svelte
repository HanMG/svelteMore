<script>
    import Fruits from './Fruits.svelte'
</script>

<h2>App.svelte</h2>
<ul class="fruits">
    <li>Apple</li>
    <li>Banana</li>
    <li>Cherry</li>
</ul>

<Fruits />

<!-- 기본 스타일유효범위는 각각의 컴포넌트 안에서만 적용 -->
<!-- Svelte Hash가 자동으로 생김 / 컴포넌트 unique번호처럼 svelte-qwe2r 이런식으로 뜸 -->
<!-- :global(선택자)하면 전체에서 전용, bundle.css로 생김 -->
<!-- 사용하지 않는 스타일의 경우 작성되지 않지만 :global()로 전역화를 해주면 bundle에 포함됨 -->
<style>
    :global(.fruits) {
        color: red;
    }
</style>