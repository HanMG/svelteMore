<script>
import User from './User.svelte'


    let users = [
        {
            name: 'Neo',
            age: 85,
            email: 'Neo@Aboller.com'
        },
        {
            name: 'Luan',
            age: 44,
            email: 'Luan@Aboller.com'
        },
        {
            name: 'Kim',
            age: 62            
        }

    ]

</script>

<section>
    {#each users as user}
        <User 
            name = {user.name}
            age = {user.age}
            email = {user.email}
        />
    {/each}
</section>

<section>
    {#each users as {name,age,email}}
        <User {name} {age} {email} />        
    {/each}
</section>

<section>
    {#each users as user}
        <User {...user}/>
    {/each}
</section>

<style>
    section {
        border: 1px solid orange;
        margin-bottom: 10px;
    }
</style>
