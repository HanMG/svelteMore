<script>
    // function a(cb) {
    //     setTimeout(() => {
    //         console.log('a')
    //         cb()
    //     }, 1000)        
    // }

   function a() {
       return new Promise((resolve) => {
            setTimeout(() => {
                console.log('a')       
                resolve()     
            }, 1000)      
       })
   }

   function b() {
       return new Promise((resolve) => {
            setTimeout(() => {
                console.log('b')       
                resolve()     
            }, 1000)      
       })
   }

   function c() {
       return new Promise((resolve) => {
            setTimeout(() => {
                console.log('c')       
                resolve()     
            }, 1000)      
       })
   }

   function d() {
       return new Promise((resolve) => {
            setTimeout(() => {
                console.log('d')       
                resolve()     
            }, 1000)      
       })
   }
//      ES8 이전
//    a()
//     .then(() => b())
//     .then(() => c())
//     .then(() => d())

   // ES8 이후 async await
   async function asyncFn() {
       await a()
       await b()
       await c()
       await d()
   }

   asyncFn()

</script>