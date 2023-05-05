export const getOptionQuantity = (count) => {
  let options = []
  for (let i = 1; i <= count; i++) {
    options.push({ value: i, name: i.toString() })
  }
  return options
}
