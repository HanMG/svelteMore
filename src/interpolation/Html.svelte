<script>
    let h1 ='<h1>Hello HMG</h1>'

    // XSS(Cross Site Scripting, 사이트 간 스크립팅)은 웹 취약점의 하나로, 웹사이트 관리자가 아닌 제3자가 웹에 악성 스크립트를 삽입할 수 있는 것을 말함
    let xss = '<iframe onload="alert(1)"></iframe>'
    
</script>

{@html h1}
{@html xss}

