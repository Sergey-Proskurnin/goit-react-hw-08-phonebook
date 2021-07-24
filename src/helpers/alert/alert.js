import { alert } from '@pnotify/core';

export default alert = message =>
  alert({
    title: 'Oh No!',
    text: `${message}`,
    delay: 5000,
  });
