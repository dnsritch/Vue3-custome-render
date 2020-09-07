
function debounce(fn, await, { immediate }) {
    let timer

    return function (...args) {
        if (immediate && !timer) {
            fn.apply(this, args)
        }

        timer && clearTimeout(timer)
        timer = setTimeout(() => {
            fn.apply(this, args)
        }, await)
    }
}

function throttle(fn, await) {
    let finished = false

    return function (...args) {
        // console.log(args)

        if (!finished) {
            fn.apply(this, args)
            finished = true

            setTimeout(() => {
                finished = false
            }, await)
        }
    }
}

function test(str) {
    console.log(str)
}

let timer = setInterval(
    throttle(test, 1000),
    500,
    '123'
)

setTimeout(() => {
    clearInterval(timer)
}, 10000);