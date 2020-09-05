import { h, defineComponent } from "@vue/runtime-core"

import planeImg from "../../assets/plane.png"

import config from '../config';

export default defineComponent({
  setup(props) {
    // console.log(props)
  },
  render(ctx) {
    // console.log(ctx)
    return h("Sprite", { texture: planeImg })
  },
});
