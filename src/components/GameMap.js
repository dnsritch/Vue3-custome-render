import {
  h,
  defineComponent,
  onMounted,
  onUnmounted,
  ref,
} from "@vue/runtime-core";

import { game } from "../Game";
import mapImg from "../../assets/map.jpg";

export default defineComponent({
  setup() {
    const viewHeight = 1080;
    const speed = 5;
    // 使用地图
    // 绘制地图移动  注意value
    const first = ref(0);
    const second = ref(-viewHeight);

    const mapMove = () => {
      first.value += speed;
      second.value += speed;
      if (first.value >= viewHeight) first.value = -viewHeight;
      if (second.value >= viewHeight) second.value = -viewHeight;
    };

    onMounted(() => {
      game.ticker.add(mapMove);
    });
    onUnmounted(() => {
      game.ticker.remove(mapMove);
    });

    return {
      first,
      second,
    };
  },
  render(ctx) {
    return h("Container", [
      h("Sprite", { texture: mapImg, y: ctx.first }),
      h("Sprite", { texture: mapImg, y: ctx.second }),
    ]);
  },
});
