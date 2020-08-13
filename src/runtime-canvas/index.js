import { Graphics, Text } from 'pixi.js'
import { createRenderer } from '@vue/runtime-core';

export const renderer = createRenderer({
    createElement(type) {
        // 基于type创建 基于 canvas 的元素
        let element
        if (type === 'rect') {
            element = new Graphics()
            element.beginFill(0xffffff)
            element.drawRect(0, 0, 500, 500)
            element.endFill()
        } else if (type === "circle") {
            element = new Graphics()
            element.beginFill(0xffff00)
            element.drawCircle(0, 0, 50)
            element.endFill()
        }

        return element
    },

    createText(text) {
        return new Text(text)
    },

    setElementText(node, text) {
        // 创建文本
        const cText = new Text(text)
        node.addChild(cText)
    },

    patchProp(el, key, preValue, nextValue) {
        console.log(el)
        if (key === 'x') {
            el.x = nextValue
        } else if (key === 'y') {
            el.y = nextValue
        }

    },

    insert(el, parent) {
        // console.log(el, parent)
        parent.addChild(el)
    }
})