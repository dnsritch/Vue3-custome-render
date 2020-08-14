// 游戏页面
import {
    h,
    defineComponent,
    reactive,
    onUnmounted,
    ref,
    watch,
    computed,
} from "@vue/runtime-core";
import GameMap from '../components/GameMap';
import Plane from '../components/Plane';

import { game } from '../Game';

export default defineComponent({
    setup() {
        const { planeInfo } = useKeyboard()

        computed(() => {
            console.log(planeInfo.x)
            console.log(planeInfo.y)
        })

        return {
            planeInfo
        };
    },
    render(ctx) {
        console.log(ctx.planeInfo)
        console.log(ctx.planeInfo.x)
        console.log(ctx.planeInfo.width)
        return h("Container", [
            h(GameMap),
            h(Plane, { x: ctx.planeInfo.x, y: ctx.planeInfo.y })
        ]);
    },
});


function useKeyboard() {
    const planeInfo = reactive({
        x: 300,
        y: 700,
        width: 258,
        height: 364
    })
    const speed = 10

    window.addEventListener('keydown', (e) => {
        // console.log(e)
        switch (e.code) {
            case 'ArrowUp':
                planeInfo.y -= speed
                break;
            case 'ArrowDown':
                planeInfo.y += speed
                break;
            case 'ArrowLeft':
                planeInfo.x -= speed
                break;
            case 'ArrowRight':
                planeInfo.x += speed
                break;
            default:
                break;
        }
    })

    return {
        planeInfo
    }
}