export const deepEqualCompare = <Arg> (
  a: Arg,
  b: Arg
): boolean => {
  if (Array.isArray(a) || Array.isArray(b)) {
    throw new Error(
      'Yoy cannot compare two arrays using deepEqual'
    )
  }
  return a === b
}
