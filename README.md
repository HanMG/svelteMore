svelte lifecycle 

1. beforeUpdate : Mount되기전에 실행
2. onMount : HTML, CSS등 실행
3. afterUpdate : 변화후 실행
4. onDestroy : 파괴되기 직전에 실행
5. tick : 실행위치를 정할 수 있음

@주의점 : beforeUpdate나 afterUpdate에 화면에 반영되는 반응성을 가진 함수가 들어갈시 무한루프에 빠질 위험이 있음.

svelte는 모든 작업들을 처리를 하고 나서 화면을 갱신하는 방법이라 문제가 생길수있음.
tick : 데이터가 갱신되고 나서 화면이 바뀌는 반응성을 가질때까지 잠시 기다려주게함, 비동기로 동작을 해야해서 async와 await를 사용해줘야함

