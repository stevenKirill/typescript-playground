export const deepEqualCompare = <Arg> (
  a: Arg extends any[] ? "Dont' pass an array" : Arg,
  b: Arg extends any[] ? "Dont' pass an array" : Arg
): boolean => {
  return a === b
}

deepEqualCompare('a', 'b')
deepEqualCompare([], [])
