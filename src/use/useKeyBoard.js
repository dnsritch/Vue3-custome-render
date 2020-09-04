import { onMounted, onUnmounted } from "@vue/runtime-core";

export const useKeyBoard = (map) => {
    const handleKeydown = (e) => {
        const callBackObj = map[e.code]
        callBackObj && callBackObj.keydown && callBackObj.keydown(e)
    }
    const handleKeyup = (e) => {
        const callBackObj = map[e.code]
        callBackObj && callBackObj.keyup && callBackObj.keyup(e)
    }

    onMounted(() => {
        window.addEventListener("keydown", handleKeydown)
        window.addEventListener("keyup", handleKeyup)
    })

    onUnmounted(() => {
        window.removeEventListener("keydown", handleKeydown)
        window.removeEventListener("keyup", handleKeyup)
    })
}
