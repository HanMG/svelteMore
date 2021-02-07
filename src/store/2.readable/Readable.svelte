<script>
    import { user } from './store'

    console.log(user)
    console.log($user)
</script>

<!-- 수정안됨 -->
<button on:click={() =>{
    $user.name='Neo'
}}>
    Click!
</button>
<h2>{$user.name}</h2>