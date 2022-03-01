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
