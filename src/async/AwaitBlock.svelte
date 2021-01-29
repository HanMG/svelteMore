<script>    
    //let isError = false
    //let promise = new Promise(resolve => resolve('...'))
    let promise = Promise.resolve('...')

    function fetcName() {
        return new Promise((resolve, reject) => {
            // if(isError) {
            //     reject(new Error('Sorry...'))
            // }
            setTimeout(() => {
                resolve('HMG')                
            }, 2000)
        })
    }
</script>

<button on:click={async () => {
    promise = fetcName()
    promise.then((res) => {
        console.log(res)
    })
    //console.log(await promise)
}}>
    Fetch name!
</button>

{#await promise then name}
    <!-- 대기(pending) -->
    <!-- <p>Loading...</p> -->
<!-- {:then name} -->
    <!-- 이행(fulfilled) -->
    <h1>{name}</h1>
<!-- {:catch error} -->
    <!-- 거부(Rejected) -->
    <!-- <h1>{error.message}</h1> -->
{/await}