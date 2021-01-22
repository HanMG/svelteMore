<script>
    // Svelte가 아닌 , Javascript 문법 label

    loop1:
    for(let i = 1; i < 4; i += 1){
        loop2:
        for(let k = 1; k < 4; k += 1){
            if(i == 2){
                // loop1 자체가 멈추게된다.
                break loop1
            }
            console.log(`${i}-${k}`)
        }
        console.log('-----------')
    }

    hmg: {
        console.log('a')
        break hmg
        console.log('b')
    }

    // Svelte 반응성 구문!
    let count = 0
    $: {
        console.log(count)
    }

</script>