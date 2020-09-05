import { ref, onMounted, onUnmounted } from "@vue/runtime-core"
import { game } from '../Game';

const commandType = {
    upOrDown: 'upOrDown',
    leftOrRight: 'leftOrRight'
}

const upCommand = {
    type: commandType.upOrDown,
    dir: -1,
    id: 1
}
const downCommand = {
    type: commandType.upOrDown,
    dir: 1,
    id: 2
}
const leftCommand = {
    type: commandType.leftOrRight,
    dir: -1,
    id: 3
}
const rightCommand = {
    type: commandType.leftOrRight,
    dir: 1,
    id: 4
}


const commandMap = {

    KeyA: leftCommand,
    KeyW: upCommand,
    KeyS: downCommand,
    KeyD: rightCommand,

    ArrowUp: upCommand,
    ArrowDown: downCommand,
    ArrowLeft: leftCommand,
    ArrowRight: rightCommand
}

export const useKeyboardMove = ({ x, y, speed }) => {
    const moveX = ref(x)
    const moveY = ref(y)

    const commandList = []

    const handleGameTicker = () => {
        const leftOrRightCommand = commandList.find(com => com.type === commandType.leftOrRight)
        const upOrDownCommand = commandList.find(com => com.type === commandType.upOrDown)

        if (leftOrRightCommand) {
            moveX.value += speed * leftOrRightCommand.dir
        }
        if (upOrDownCommand) {
            moveY.value += speed * upOrDownCommand.dir
        }
    }

    const isExist = (command) => {
        const id = command.id
        const result = commandList.find(com => com.id === id)
        return !!result
    }

    const handleKeyDown = (e) => {
        const command = commandMap[e.code]
        if (command && !isExist(command)) {
            commandList.unshift(command)
        }
    }

    const handleKeyUp = (e) => {
        const command = commandMap[e.code]
        const id = command.id || -1
        let index = commandList.findIndex(com => com.id = id)
        if (index !== -1) {
            commandList.splice(index, 1)
        }
        // console.log(commandList.length)
    }


    onMounted(() => {
        game.ticker.add(handleGameTicker)
        window.addEventListener('keydown', handleKeyDown)
        window.addEventListener('keyup', handleKeyUp)
    })

    onUnmounted(() => {
        game.ticker.remove(handleGameTicker)
        window.removeEventListener('keydown', handleKeyDown)
        window.removeEventListener('keyup', handleKeyUp)
    })

    return {
        x: moveX,
        y: moveY
    }
}