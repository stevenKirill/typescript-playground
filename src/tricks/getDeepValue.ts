export const getDeepValue = <
TObj,
TFirstKey extends keyof TObj,
TSecondKey extends keyof TObj[TFirstKey],
>(
    obj: TObj,
    firstKey: TFirstKey,
    secondKey: TSecondKey
  ) => {
  return obj[firstKey][secondKey]
}

const obj = {
  foo: {
    a: true,
    b: 2
  },
  bar: {
    c: '100',
    d: 22
  }
}

const value = getDeepValue(obj, 'foo', 'a')

console.log(typeof value === 'boolean')
