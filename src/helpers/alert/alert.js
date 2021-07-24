import { alert } from '@pnotify/core';

const onAlert = message =>
  alert({
    title: 'Oh No!',
    text: `${message}`,
    delay: 5000,
  });
export default onAlert;
