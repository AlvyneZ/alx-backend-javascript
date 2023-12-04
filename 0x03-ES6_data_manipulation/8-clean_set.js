export default function cleanSet(aSet, startString) {
  if (startString && typeof startString === 'string') {
    return Array.from(aSet)
      .map(
        (value) => {
          if (value && typeof value === 'string' && value.startsWith(startString)) {
            return value.slice(startString.length);
          }
          return null;
        },
      )
      .filter((value) => value)
      .join('-');
  }
  return '';
}
