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
import config from '../config'

import { game } from "../Game"
import { useSelfPlane } from "../use/useSelfPlane"



export default defineComponent({
  setup() {
    const { plane: { speed } } = config
    const planeInfo = useSelfPlane({ x: 200, y: 700, speed })

    return {
      planeInfo,
    }
  },
  render(ctx) {
    // console.log(ctx.planeInfo)
    const { x, y, width, height } = ctx.planeInfo
    return h("Container", [
      h(GameMap),
      h(Plane, { x, y, width, height }),
    ])
  },
})




