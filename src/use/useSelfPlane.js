import { reactive, watch, watchEffect } from "@vue/runtime-core"
import config from "../config"
import { useKeyboardMove } from "./useKeyboardMove"


export const useSelfPlane = ({ x, y, speed }) => {
    const { plane: { width, height }, map } = config

    const { x: selfX, y: selfY } = useKeyboardMove({ x, y, speed })

    watch([selfX, selfY], () => {
        if (selfX.value < 0) {
            selfX.value = 0
        } else if (selfX.value + width > map.width) {
            selfX.value = map.width - width
        }

        if (selfY.value < 0) {
            selfY.value = 0
        } else if (selfY.value + height > map.height) {
            selfY.value = map.height - height
        }
    })

    const planeInfo = reactive({
        x: selfX,
        y: selfY,
        width,
        height
    })

    return planeInfo
}