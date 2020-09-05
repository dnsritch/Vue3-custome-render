import { ref } from "@vue/runtime-core"
import { game } from "../Game"

export const useBullet = ({ x, y, dir }) => {
    const selfX = ref(x)
    const selfY = ref(y)

    const handleMove = () => {

    }

    return {
        x: selfX,
        y: selfY
    }
}