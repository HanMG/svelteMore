import {writable, readable, derived} from 'svelte/store'

export let count = writable(1)
export let double = derived(count, $count => $count * 2)
export let user = readable({
    name: 'HMG',
    age: 33,
    email: 'awdawd@hhmmgg.com'
})