import signUpUser from './4-user-promise';
import uploadPhoto from './5-photo-reject';

export default function handleProfileSignup(firstName, lastName, fileName) {
  return Promise.allSettled([
    signUpUser(firstName, lastName),
    uploadPhoto(fileName),
  ]).then(
    (results) => {
      const ret = results;
      for (const idx in ret) {
        if (Object.prototype.hasOwnProperty.call(ret[idx], 'reason')) {
          ret[idx].value = String(ret[idx].reason);
          delete ret[idx].reason;
        }
      }

      return ret;
    },
  );
}
