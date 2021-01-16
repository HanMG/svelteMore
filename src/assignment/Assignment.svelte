<script>
    let name = 'HMG'
    let fruits = ['Apple', 'Banana', 'Cherry']
    let user = {
        name: 'HMG',
        depth: {
            a: 'b'
        },
        numbers: [1,2]
    }
    let numbers = user.numbers
    let hello = 'world'


    function assign() {
        name = 'Heropy'
        //fruits.push('Orange')
        // 위에 Push가 되도 화면은 변경이 안됨
        // Svelte의 반응성을 위해서는 할당해줘야 반응함
        //fruits = fruits
        // 위의 내용을 한줄로
        fruits = [...fruits, 'Orange']

        user.name = 'NEO'

        user.depth.a = 'c'
        // 원래라면 화면에 갱신이 안되야하지만 
        // 위에서 user가 변경되서 같이 갱신됨
        user.numbers.push(3)

        numbers = numbers
    }
</script>

<button on:click={assign}>Assign!</button>

<h2>name: {name}</h2>
<h2>fruits: {fruits}</h2>
<h2>username: {user}</h2>
<h2>user depth a: {user.depth.a}</h2>
<h2>user numbers: {user.numbers}</h2>
<h2>numbers: {numbers}</h2>
<h2>{hello}</h2>