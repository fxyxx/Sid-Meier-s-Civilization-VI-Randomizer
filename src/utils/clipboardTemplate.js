export const clipboardTemplate = (layoutArray, leaders) => {
  let template = ''

  if (!layoutArray.includes(undefined)) {
    for (let i = 0; i < layoutArray.length; i++) {
      const civic = layoutArray[i]

      if ((i + 1) % +leaders === 1) {
        const playerNumber = Math.floor(i / +leaders) + 1
        template += `Player: ${playerNumber} | `
      }
      template += `Civilization: <${civic.civilizationName}> \u2606 Leader: <${civic.leaderName}>`

      if ((i + 1) % +leaders === 0 || i === layoutArray.length - 1) {
        template += '\n'
      } else {
        template += ' / '
      }
    }

    return template
  }
}
