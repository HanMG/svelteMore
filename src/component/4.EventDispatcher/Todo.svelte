<script>   
    import {createEventDispatcher} from 'svelte'
    
    export let todo 

    // createEventDispatcher 함수에서 new CustomEvent를 통해 커스텀 이벤트를 생성
    // 그래서 부모에서 event.detail이 사용가능
    const dispatch = createEventDispatcher()

    function deleteTodo() {
        // dispatch('커스텀 이벤트명', 내가 전달할 데이터 )
        dispatch('deleteMe', {
            todoId: todo.id           
        })
    }
</script>

<div>
    <input type="checkbox" bind:value={todo.done} />
    {todo.title}
    <button on:click={deleteTodo}>X</button>
</div>