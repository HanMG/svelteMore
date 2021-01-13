<script>
    let name = 'HMG'
    let index = 0    
</script>

<!-- 내용이 변경될때마다 실행,
    변수 추적,
    개발자도구가 켜있는 경우 실행되면 일시정지 -->
{@debug index, name}
<h1 on:click={() => {index += 1}}>Hello {name}!</h1>