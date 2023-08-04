export const bannedCounter = (array) => {
  let count = 0
  for (const item of array) {
    if (item.isBanned === true) {
      count += 1
    }
  }
  
  return count
}

export const generateRandomIndexArray = (range, amount) => {
  const indexes = []
  while (indexes.length < amount) {
    const randomIndex = Math.floor(Math.random() * (range + 1))
    if (!indexes.includes(randomIndex)) {
      indexes.push(randomIndex)
    }
  }

  return indexes
}
