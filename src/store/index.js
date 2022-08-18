import getRandmonInt from '@/helpers/getRandomInt';
import { createStore } from 'vuex';

export default createStore({

    state: {
        count: 1,
        lastMutation: 'none',
        lastRandomInt: 0,
        isLoading: false
    },

    mutations: {
        increment(state) {
            state.count++
            state.lastMutation = 'increment'
        },

        incrementBy(state, val) {
            state.count += val
            state.lastMutation = `incrementBy ${val}`
            state.lastRandomInt = val
        }
    },

    actions: {
        async incrementRandomInt(context) {
            const randomInt = await getRandmonInt()
            context.commit('incrementBy', randomInt)
        }
    }
    
})