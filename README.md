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


