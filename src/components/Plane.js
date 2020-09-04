import { h, defineComponent } from "@vue/runtime-core";

import planeImg from "../../assets/plane.png";

export default defineComponent({
  setup(props) {
    // console.log(props)
  },
  render(ctx) {
    // console.log(ctx)
    return h("Sprite", { texture: planeImg, width: 100, height: 150 })
  },
});
