export default function hasValuesFromArray(aSet, array) {
  return array.reduce((acc, value) => acc && aSet.has(value), true);
}
