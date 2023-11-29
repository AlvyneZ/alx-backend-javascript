import getFullResponseFromAPI from './1-promise';
import handleResponseFromAPI from "./2-then";

const promise = Promise.resolve();
handleResponseFromAPI(promise);

handleResponseFromAPI(getFullResponseFromAPI(true));
handleResponseFromAPI(getFullResponseFromAPI(false));
