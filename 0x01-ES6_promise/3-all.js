// eslint-disable-next-line import/extensions
import { uploadPhoto, createUser } from './utils.js';

export default function handleProfileSignup() {
  return uploadPhoto().then(
    (valueUpld) => createUser().then(
      (value) => {
        console.log(`${valueUpld.body} ${value.firstName} ${value.lastName}`);
      },
      () => {
        console.log('Signup system offline');
      },
    ),
    () => {
      console.log('Signup system offline');
    },
  );
}
