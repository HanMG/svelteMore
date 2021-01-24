<script>
    let active = true
    let valid = false
    let camelCase = true

    function multi() {
        return 'active multiple-class'
    }
</script>

<div class={active ? 'active': ''}>
    3항 연산자 보간
</div>

<!-- class:클래스명={데이터값} -->
<div class:active={active}>
    Class 지시어(Directive) 바인딩
</div>

<!-- 위와 같은 동작, 클래스명과 데이터변수명이 같을때 가능 -->
<div class:active>
    Class 지시어 바인딩 단축 형태
</div>

<!-- DashCase(-)로 해야할때 아래와 같이 사용 -->
<div class:active
    class:valid
    class:camelCase
    class:camel-case={camelCase}>
    다중(Multiple) Class 지시어 바인딩
</div>

<div class={multi()}>
    함수실행
</div>

<style>
    .active {
        color: red;
    }
</style>