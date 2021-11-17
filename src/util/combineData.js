const combineData = (arr1, arr2, target) => {
  const combine = arr1.concat(arr2).reduce((acc, x) => {
    acc[x[target]] = Object.assign(acc[x[target]] || {}, x)
    return acc
  }, {})
  const result = Object.keys(combine).map(k => combine[k])
  return result
}

export default combineData
