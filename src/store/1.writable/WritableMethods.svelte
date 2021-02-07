<script>
    //import { onDestroy } from 'svelte'
    import { count, name } from './store.js'

    console.log(count)
    
    // 수동구독

    // let number
    // let userName

    // const unsubscribeCount = count.subscribe((c) => {
    //     number = c
    // })

    // const unsubscribeCount2 = count.subscribe(() => {})

    // const unsubscribeName = name.subscribe((name) => {
    //     userName = name
    // })  

    // function  increase() {
    //     count.update((c) => c + 1)
    // }

    // function changeName() {
    //     //name.update(() => { return 'Neo'} )
    //     // 변수를 받는게 아니므로 set으로 설정
    //     name.set('Neo')
    // }

    // onDestroy( () => {
    //     unsubscribeCount()
    //     unsubscribeCount2()
    //     unsubscribeName()
    // })

    // 자동구독
    function increase() {
        $count += 1
    }
    function changeName() {
        $name = 'Neo'
    }
</script>


<button 
    on:click={increase}
    on:click={changeName}    
    >

    Click Me!
</button>

<!-- <h2>{number}</h2>
<h2>{userName}</h2> -->

<h2>{$count}</h2>
<h2>{$name}</h2>