# Simple Text Editor

Implement a simple text editor. The editor initially contains an empty string, **S**. Perform **Q** operations of the following **4** types:
1. append **(W)** - Append string **W** to the end of **S**.
2. delete **(k)** - Delete the last **k** characters of **S**.
3. print **(k)** - Print the **k_th_** character of **S**.
4. undo **()** - Undo the last (not previously undone) operation of type **1** or **2**, reverting **S** to the state it was in prior to that operation.

```
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
```