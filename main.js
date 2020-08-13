import App from './src/App.js'
import { renderer } from "./src/runtime-canvas"
// import { } from "./src/Game"
import { Application } from 'pixi.js';

// App 创建
// 1. 创建根组件
// 2. 创建根容器


// 初始化 game
const game = new Application({
    width: 750,
    height: 1080,
    backgroundColor: 0x1099bb
})
// console.log(game)
document.body.appendChild(game.view)

const { createApp } = renderer

createApp(App).mount(game.stage)
