import { Graphics, Text, Container, Sprite, Texture } from "pixi.js";
import { createRenderer } from "@vue/runtime-core";

export const renderer = createRenderer({
  createElement(type) {
    // 基于type创建 基于 canvas 的元素
    let element;
    switch (type) {
      case "Container":
        element = new Container();
        break;
      case "Sprite":
        element = new Sprite();
        break;
      case "rect":
        element = new Graphics();
        element.beginFill(0xffffff);
        element.drawRect(0, 0, 500, 500);
        element.endFill();
        break;
      case "circle":
        element = new Graphics();
        element.beginFill(0xffff00);
        element.drawCircle(0, 0, 50);
        element.endFill;
        break;
      default:
        break;
    }
    return element;
  },

  createText(text) {
    return new Text(text);
  },

  setElementText(node, text) {
    // 创建文本
    const cText = new Text(text);
    node.addChild(cText);
  },

  patchProp(el, key, preValue, nextValue) {
    // console.log(el)
    switch (key) {
      case "texture":
        el.texture = Texture.from(nextValue);
        break;
      case "onClick":
        el.on("pointertap", nextValue);
      default:
        el[key] = nextValue;
        break;
    }
  },

  insert(el, parent) {
    // console.log(el, parent)
    parent.addChild(el);
  },

  // 新加接口实现
  // 处理注释
  createComment() {},
  // 获取父节点
  parentNode() {},
  // 获取兄弟节点
  nextSibling() {},
  // 删除节点时调用
  remove(el) {
    const parent = el.parent;
    if (parent) {
      parent.removeChild(el);
    }
  },
});
export function createApp(app) {
  return renderer.createApp(app);
}
