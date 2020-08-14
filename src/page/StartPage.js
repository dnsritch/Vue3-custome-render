// 开始页面

import { h, defineComponent, onMounted } from '@vue/runtime-core'
import startPageImg from '../../assets/startPage.jpg'
import startBtnImg from '../../assets/startBtn.png'

export default defineComponent({
    setup(props, ctx) {

        const handleClick = () => {
            ctx.emit('pageChange', 'gamePage')
        }

        return {
            handleClick
        }
    },

    render(ctx) {
        // 
        return h('Container', [
            h('Sprite', { texture: startPageImg }),
            h('Sprite', {
                texture: startBtnImg,
                x: 225,
                y: 512,
                interactive: true,
                onClick: ctx.handleClick
            })
        ])
    }
})