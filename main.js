import App from './src/App.js'
import { createApp } from "./src/runtime-canvas"
import { getRootContainer } from "./src/Game"

// App 创建
// 1. 创建根组件
// 2. 创建根容器

createApp(App).mount(getRootContainer())
