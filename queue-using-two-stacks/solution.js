const queue = []
const actions = {
    1: value => queue.push(value),
    2: () => queue.splice(0, 1),
    3: () => console.log(queue.slice(0, 1).join(''))
}

function processData (input) {
    const lines = input.split('\n')
    lines.splice(0, 1)
    const total = lines.length
    for (let j = 0; j < total; j++) {
        const [fn, value] = lines[j].split(' ')
        actions[fn](value)
    }
}
