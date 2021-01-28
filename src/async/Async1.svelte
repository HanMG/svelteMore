<script>
    let isError = false

   function a() {
       // 대기(pending): '이행' 하거나 '거부' 되지 않은 초기 상태.
       return new Promise((resolve, reject) => {
           if(isError){
               // 거부(rejected): 연산이 실패함
            //    reject('Sorry...')            
                reject(new Error('Sorry'))
                return 
           }
            // 이행(fulfilled): 연산이 성공적으로 완료됨
            setTimeout(() => {
                console.log('a')       
                resolve('HMG')     
            }, 1000)      
       })
   }


    // 이행(fulfilled): 연산이 성공적으로 완료됨
    // 거부(rejected): 연산이 실패함


//    a()
// 이행(fulfilled): 연산이 성공적으로 완료됨
//     .then((res) => {
//         console.log(res)
//         console.log('b')
//     })
// 거부(rejected): 연산이 실패함
//     .catch((err) => {
//         console.log(err)
//     })
//     .finally(() => {
//         console.log('Done')
//     })
    
    async function asyncFn() {
        try {
            const res = await a()            
            console.log(res)
            console.log('b')
        }catch(err){
            console.log(err.message)
        }finally{
            console.log('Done')
        }       
    }

    asyncFn()
  

</script>