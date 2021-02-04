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
props 가 아닌 방식으로 Text를 아래에 내려줄 수 있는 방법으로 
컴포넌트의 컨텐츠에 값을 입력하고
<!-- <slot></slot> --> 을 하위 컴포넌트에서 사용하면됨
슬롯 사이에 넣은 텍스트는 Default 로 사용됨

slot에 name을 붙여 사용하는 방법으로 매칭시킬 수 도 있음.

slot을 사용한 컴포넌트에서의 name 순서에 따라 배치됨.
상위에서는 순서상관없이 name에 맞는 컨텐츠를 넣으면됨

style은 slot을 사용하는 컴포넌트가 아닌 해당 컴포넌트를 사용하는 부모컴포넌트에
적용해야함

slot에도 props처럼 속성데이터를 넣을 수 있음. 
ex) <slot name="email" doamin="@abc.com"></slot>
주의) 그러나 name은 예약어라 다르게 사용할 수 없음


