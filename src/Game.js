import { Application } from 'pixi.js';

// 初始化 game
export const game = new Application({
    width: 750,
    height: 1080,
    backgroundColor: 0x1099bb
})
// console.log(game)
document.body.appendChild(game.view)

export function getRootContainer() {
    return game.stage
}