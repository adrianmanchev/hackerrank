let S = ''
let H = []

const commands = {
    1: value => {
        H.push(S)
        S += value
    },
    2: value => {
        H.push(S)
        S = S.slice(0, value * -1)
    },
    3: value => console.log(S.split('')[value - 1]),
    4: () => {
        S = H.pop() || ''
    }
}

function processData (input) {
    const lines = input.split('\n')
    for (let j = 1; j <= lines[0]; j++) {
        const [key, value] = lines[j].split(' ')
        commands[key](value)
    }
}
