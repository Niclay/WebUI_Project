import { atom } from 'recoil'


export const typeState = atom({
    key: 'typeState',
    default: ""
  });

export const yearState = atom({
  key: 'yearState',
  default:[0,9999]
});
  