@svelte lifecycle 

1. beforeUpdate : Mount되기전에 실행
2. onMount : HTML, CSS등 실행
3. afterUpdate : 변화후 실행
4. onDestroy : 파괴되기 직전에 실행
5. tick : 실행위치를 정할 수 있음

- 주의점 : beforeUpdate나 afterUpdate에 화면에 반영되는 반응성을 가진 함수가 들어갈시 무한루프에 빠질 위험이 있음.

- svelte는 모든 작업들을 처리를 하고 나서 화면을 갱신하는 방법이라 문제가 생길수있음.
- tick : 데이터가 갱신되고 나서 화면이 바뀌는 반응성을 가질때까지 잠시 기다려주게함, 비동기로 동작을 해야해서 async와 await를 사용해줘야함

@ Svelte반응성
1. 자바스크립트 데이터의 불변성과 가변성
불변성(immutable)
- 원시데이터 : Number, String, Boolean, Null, Undefined, Symbol등..

가변성(mutable)
- 객체 : Object, Array, Function, Map, Set, WeakMap등..

얕은복사(Shallow copy)
- 1뎁스의 데이터만 복사 (가변성데이터가 있을시 주의)

깊은복사(Deep copy)
- 가변성데이터가 있는 것도 복사

@ 할당
- Svelte의 반응성을 위해서는 할당해줘야 반응함, 메모리를 덜먹는 대신 수동으로
다른 프레임 워크는 이를 자동으로 해주는(가상돔) 대신 메모리를 사용함
- html태그에 보간법을 사용할 떄는 script 바로 아래에서 정의해야함

@ Javascript label
- Javascript label 이란 기능이 있는데 Svelte에서는 반응성을 가질 수 있음
- Svelte에서는 $: $표시의 label과 **반응형데이터**를 가져야 반응성을 가짐
- 대기 로직이 처리되고 화면이 갱신되어야 그 때 반응성구문($:)이 실행됨


@ 요소 binding
- querySelector나 querySelectorAll 을 통해 찾아하는방법은 전체 DOM을 한번 검색하기때문에 
  성능적으로 요소에 바로 Binding(bind:this)하는게 더 좋다고함


@ 키(key) 블록은 연결된 데이터의 값이 변경될 때마다 내용을 파괴하고 다시 생성
- {#key 변수}

@ 다른 프레임워크의 경우, 하나의 컴포넌트 내 최상위 요소를 1개만 가질 수 있음. 
컴포넌트 = 최상위요소가 성립하므로 컴포넌트에 사용하는 Props를 'title'과 같이 HTML에 존재하는 속성 이름으로 작성하는 경우, Props와 HTML 속성이 중복되는 문제가 발생함
따라서 2개 이상의 단어를 조합해 사용하는 커스텀 속성의 사용을 권장 (E.g. 'my-title')

그런데 Svelte 같은 경우는 하나의 컴포넌트 내 최상위 요소가 여러개기 때문에 
컴포넌트 = 최상위 요소가 성립하지 않아, 제약없이 Props 이름으로 지정할 수 있다고함.

@ ContextAPI(getContext, setContext)
props를 통해 자식에게 내려주는 데이터 이동이 아닌 setContext('변수명', 데이터)을 통해 데이터를 지정, getContext('변수명')을 통해 본인을 포함한 하위 컴포넌트에 데이터를 사용할 수 있는 방법. 현재 컴포넌트를 기준으로 부모이상의 상위컴포넌트나 같은 형제 컴포넌트는 사용 불가

@ 모듈 상황(Module Context)
<!--  <script context="module"> </script> -->
최초로 import될때만 초기화됨, 해당 컴포넌트가 사용하는 전역변수를 설정할 수 있음
반응성을 가지지 못함 === 데이터는 변경되지만 화면에 반영이 안됨


@ $$props & $$restProps
위에서 내려오는 모든 props데이터를 명시할 수 없으니깐 $$props와 $$restProps라는 내장객체로 처리가능
$$props는 모든 props를 담고있고,
$$restProps는 export let 변수 처럼 명시한 것을 제외한 props를 가지고 있다고함.


@ slot
#slot1
props 가 아닌 방식으로 Text를 아래에 내려줄 수 있는 방법으로 
컴포넌트의 컨텐츠에 값을 입력하고
<!-- <slot></slot> --> 을 하위 컴포넌트에서 사용하면됨
슬롯 사이에 넣은 텍스트는 Default 로 사용됨

#slot-2
slot에 name을 붙여 사용하는 방법으로 매칭시킬 수 도 있음.

slot을 사용한 컴포넌트에서의 name 순서에 따라 배치됨.
상위에서는 순서상관없이 name에 맞는 컨텐츠를 넣으면됨

style은 slot을 사용하는 컴포넌트가 아닌 해당 컴포넌트를 사용하는 부모컴포넌트에
적용해야함

#slot-3
slot에도 props처럼 속성데이터를 넣을 수 있음. 
ex) <slot name="email" doamin="@abc.com"></slot>
주의) 그러나 name은 예약어라 다르게 사용할 수 없음

#slot-4
내려받은 name slot을 다시 자식한테 보내기위해선 slot태그에 slot 속성을 넣어야함
ex) <slot name="named" slot="named-child"></slot>

#slot-5
$$slots 이름을 가진 객체로 slot들 및 default 을 표시, 내용이 있으면 true 표시

@ store & Writable = 쓰기가능스토어
store의 writable은 set, update, subscribe라는 함수를 가지고 있음, 수동구독에 쓰임 
ex)
export let count = writable(초기값, () => {
    // subscribe 마다 매번 실행되는게 아니라 한번실행됨
    console.log('구독자가 1명 이상일 때')
    // onDestory시 subscribe 해제
    return () => {
        console.log('count 구독자가 0명일 때...')
    }
})

set은 정해진 값으로 교체, update는 값을 받아 수정, subscribe는 데이터를 추적하여 변경시 바로 적용

.svelte 컴포넌트 내에서는 자동구독을 store 처럼 .js 같은다른 객체는 수동구독을 사용해야함

@ store & Readable = 읽기 전용 스토어
store의 readable은 subscribe만 있음, 값 수정 불가
writable과 달리 readble의 두번째 인자에 set함수를 넣을 수 있는데 
최초 구독시 데이터에서 원하는 값을 지우고 값 설정이 가능
ex)
export let user = readable(userData, (set) => {
    console.log('user 구독자가 1명 이상일 때')
    delete userData.token
    set(userData)
    return () => {
        console.log('user 구독자가 0명일 때')
    }
})


@ store & derived = 계산된 스토어
기존에 존재하는 writable, readable 변수를 기반으로 동작, subscribe만 있음, 읽기전용
연결된 스토어들이 변경되면 매번 실행되고, 구독이 초기화되고 다시 구독함.
derived(구독할변수, $구독할변수 return ..., 최초로 출력될 데이터 ) 
주의) $는 스토어의 데이터를 취급한다는 뜻으로 .svelte 환경의 자동구독을 의미하는게 아님
ex)
export let double = derived(count, $count => $count * 2)

// 두개 이상의 변수를 계산시 배열로
export let total = derived([count, double], ([$count, $double]) => {
    return $count + $double
})

// 매개변수부분에 readable과 같이 set 추가 가능
export let total = derived([count, double], ([$count, $double], set) => {
    set($count + $double)
})

@ store & get
구독하지 않고 값을 가져오는 방법

@ svelte-element & self
svelte:self = 컴포넌트 재귀 호출
꼭 break 할 수 있는 조건문이 있어야함 

@ svelte-element & component
동적 컴포넌트 랜더링
<!-- 
<svelte:component this = {props}>
 -->
 bind:this 가 아닌 this 임을 주의


@ svelte-element & window
기본 window요소 사용, script 태그 안
<!-- 
window.addEventListener('keydown', event => {
    key = event.key
})
-->

svelte:window 사용, html 태그 안
<!--
<svelte:window on:keydown{e => key = e.key} />
 -->

읽기 속성
inner는 viewport크기, outer는 브라우저 창의 크기
bind:innerWidth, bind:innerHeight, bind:outerWidth, bind:outerHeight, bind:online
쓰기 속성
bind:scrollX, bind:scrollY

@ svelte-element & head, body
svelte:head : html에서 쓰이는 head의 역할과 같음( meta, link, script 등),
              컴포넌트가 추가됐을때 head에 추가시켜줌(css경로는 public에)

svelte:body : html에 쓰이는 body에 이벤트를 추가하여 사용하라고 만들어놓은듯? 
              용도를 잘모르겠슴

