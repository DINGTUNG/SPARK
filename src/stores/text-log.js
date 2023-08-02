import {
    defineStore
} from 'pinia';



import { reactive,ref } from 'vue'
export const useLogStore = defineStore('log', () => {
    const log = reactive([
        {
            name: 'tibame',
            pass: '1234',
            state: false

        },
        {
            name: 'sara',
            pass: '1111',
            state: false
        },
        {
            name: 'tom',
            pass: '2222',
            state: false
        },
        {
            name: 'book',
            pass: '3333',
            state: false

        },
        {
            name: 'bob',
            pass: '4444',
            state: false
        }
    ])

    const token = ref(0)

    const setName = (log, payload) => {
        log[index].name = payload;
    };


    return {
        log,
        setName,
        token
    }
})