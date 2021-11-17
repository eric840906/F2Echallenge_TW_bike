export const pathFilter = pathStr => {
  const filterResult = pathStr.replace(/[A-Z'()']{1}/gm, '').trim()
  const finalResult = filterResult.split(',').reduce((acc, cur) => {
    const curArr = cur.split(' ')
    return [...acc, { lat: curArr[1] * 1, lng: curArr[0] * 1 }]
  }, [])
  return finalResult
}
