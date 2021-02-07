import { readable } from 'svelte/store'

const userData = {
    name: 'HMG',
    age: 33,
    email: 'hmg@gmail.com',
    token: 'Asd3awd3e4Rd'
}

export let user = readable(userData, (set) => {
    console.log('user 구독자가 1명 이상일 때')
    delete userData.token
    set(userData)
    return () => {
        console.log('user 구독자가 0명일 때')
    }
})