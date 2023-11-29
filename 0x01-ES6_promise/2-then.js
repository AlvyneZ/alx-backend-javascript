export default function handleResponseFromAPI(promise) {
  promise.finally(() => {
    console.log('Got a response from the API');
  });
  promise.catch(() => {
    throw Error();
  });
}
