<script>
    import {getContext, setContext} from 'svelte'
    import Anderson from './Aderson.svelte'
    
    const pocketMoney = 10000
    setContext('pm', pocketMoney)
    const pm = getContext('pm')
</script>

<h1 style="color: red">
    Heropy()
</h1>

<ul>
    <li>
        <Anderson />
    </li>
</ul>