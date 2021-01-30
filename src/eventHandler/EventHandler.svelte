<script>
    function clickHandler(e) {
        console.log(e.currentTarget)
    }

    function wheelHandler(e) {
        console.log(e)
    }
</script>

<section>
    <!-- 기본동작방지 -->
    <!-- el.addEventListener('click', e => e.preventDefault()) -->
    <h2>preventDefault</h2>
    <a href="https://naver.com"
        target="_blank"
        on:click|preventDefault = {clickHandler}
    >
        Naver
    </a>
</section>

<section>
    <!-- 최초 실행 후 핸들러 삭제 -->    
    <h2>Once</h2>
    <a href="https://naver.com"
        target="_blank"
        on:click|preventDefault|once = {clickHandler}
    >
        Naver
    </a>
</section>

<section>
    <!-- 이벤트 버블링 방지 -->
    <!-- 이벤트 버블링 : 자식요소를 눌렀을때 감싼 부모요소까지 눌리면서 
         자식이벤트 후 부모이벤트가 연달아 실행되는 것 -->
    <!-- el.addEventListener('click', e => e.stopPropagation()) -->
    <h2>stopPropagation</h2>
    <div class="parent"
         on:click={clickHandler}>
         <div class="child"
                on:click|stopPropagation={clickHandler}>
         </div>
    </div>
</section>

<section>
    <!-- 캡처링에서 핸들러 실행 -->
    <!-- 이벤트 버블링의 반대로 부모부터 실행되고 자식이 실행 -->
    <!-- .addEventListener('click', e => {}, true) -->
    <!-- .addEventListener('click', e => {}, {capture: true}) -->
    <h2>capture</h2>
    <div class="parent"
         on:click|capture={clickHandler}>
         <div class="child"
                on:click|stopPropagation={clickHandler}>
         </div>
    </div>
</section>

<section>
    <!-- event의 target과 currentTarget이 일치하는 경우 핸들러 실행 -->
    <h2>self</h2>
    <div class="parent"
         on:click|self={clickHandler}>
         <div class="child"></div>                
    </div>    
</section>

<section>
    <!-- 이벤트 처리를 완료하지 않고도 기본 속도로 화면을 스크롤 -->
    <!-- .addEventListener('wheel', e => {}, {passive: true}) -->
    <h2>passive</h2>
    <div class="parent wheel"
        on:wheel|passive={wheelHandler}>
        <div class="child"></div>
    </div>
</section>

<style>
    section {
        border: 1px solid orange;
        padding: 10px;
        margin-bottom: 10px;
    }
    h2 {
        margin: 0;
        margin-bottom: 10px;
    }

    .parent {
        width: 160px;
        height: 120px;
        background: royalblue;
        padding: 20px;        
    }
    .child {
        width: 100px;
        height: 100px;
        background: orange;        
    }
    .wheel.parent {
        overflow: auto;
    }
    .wheel .child {
        height: 1000px;
    }
</style>