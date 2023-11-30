// eslint-disable-next-line import/extensions
import { uploadPhoto, createUser } from './utils.js';

export default async function asyncUploadUser() {
  const result = await Promise.allSettled([uploadPhoto(), createUser()]);
  if ((result[0].status === 'rejected') || (result[1].status === 'rejected')) {
    return { photo: null, user: null };
  }
  return {
    photo: result[0].value,
    user: result[1].value,
  };
}
