export default function appendToEachArrayValue(array, appendString) {
  const ret = [];
  for (const item of array) {
    ret.push(appendString + item);
  }

  return ret;
}
