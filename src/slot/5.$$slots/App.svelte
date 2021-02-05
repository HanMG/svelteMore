<script>
    import UserCard from './UserCard.svelte'
</script>

<UserCard>
    <h2 slot="name">HMG</h2>
    <div slot="age">33</div>
    <div slot="email">eefe1f23@gmail.com</div>
</UserCard>

<UserCard>
    <h2 slot="name">HEROPY</h2>    
    <div slot="email">HEROPY123@File.com</div>
</UserCard>

<UserCard>
    <h2 slot="name">EVAN</h2>        
</UserCard>