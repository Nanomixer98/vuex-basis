import getRandmonInt from "@/helpers/getRandomInt"

export const incrementRandomInt = async (/* context = */{ commit }) => {
    commit('setLoading', true)
    const randomInt = await getRandmonInt()
    commit('incrementBy', randomInt)
    commit('setLoading', false)
}