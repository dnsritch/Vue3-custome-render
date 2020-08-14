// 开始页面

import { h, defineComponent } from "@vue/runtime-core";
import endPageImg from "../../assets/endPage.jpg";
import restartBtnImg from "../../assets/restartBtn.png";

export default defineComponent({
    setup(props, ctx) {
        // console.log(props, ctx);
        const handleClick = () => {
            ctx.emit('click', 'gamePage')
        }

        return {
            handleClick
        }
    },
    render(ctx) {
        return h("Container", [
            h("Sprite", { texture: endPageImg }),
            h("Sprite", {
                texture: restartBtnImg,
                x: 230,
                y: 500,
                interactive: true,
                onClick: ctx.handleClick,
            }),
        ]);
    },
});
