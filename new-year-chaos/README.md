# New Year Chaos

It is New Year's Day and people are in line for the Wonderland rollercoaster ride. Each person wears a sticker indicating their initial position in the queue from *1* to *n*. Any person can bribe the person directly in front of them to swap positions, but they still wear their original sticker. One person can bribe at most two others.

Determine the minimum number of bribes that took place to get to a given queue order. Print the number of bribes, or, if anyone has bribed more than two people, print Too chaotic.

```
function minimumBribes (q) {
  let response = 0
  let j = q.length
  while (j--) {
      let x = q[j] - (j + 1)
      if (x > 2) {
          response = 'Too chaotic'
          break
      }

      if (x > 0) {
          const s = q[j]
          q[j] = q[j + 1]
          q[j + 1] = q[j + 2]
          q[j + x] = s
          response += x
          j += 1
      }
  }

  if ((j <= 0) || (response === 'Too chaotic')) {
      console.log(response)
      return false
  }
}
```
