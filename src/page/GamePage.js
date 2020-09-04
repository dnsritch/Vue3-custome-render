// 游戏页面
import {
  h,
  defineComponent,
  reactive,
  onUnmounted,
  ref,
  watch,
  computed,
} from "@vue/runtime-core"
import GameMap from "../components/GameMap"
import Plane from "../components/Plane"
import config from '../../config'

import { game } from "../Game"
import { useKeyboardMove } from "../use/useKeyboardMove"

const useSelfPlane = () => {

  const { speed, width, height } = config.plane
  const map = config.map

  const { x, y } = useKeyboardMove({ x: 200, y: 900, speed })

  const selfX = x.value < 0 ? 0 : x.value || x.value + width > map.width ? map.width - width : x.value
  const selfY = y.value < 0 ? 0 : y.value || y.value + height > map.height ? map.height - height : y.value

  const planeInfo = reactive({
    x,
    y,
    width,
    height
  })

  planeInfo.x = selfX
  planeInfo.y = selfY

  return planeInfo
}

export default defineComponent({
  setup() {
    const planeInfo = useSelfPlane();

    // console.log(planeInfo)

    return {
      planeInfo,
    };
  },
  render(ctx) {
    // console.log(ctx.planeInfo)
    return h("Container", [
      h(GameMap),
      h(Plane, { x: ctx.planeInfo.x, y: ctx.planeInfo.y }),
    ])
  },
});




