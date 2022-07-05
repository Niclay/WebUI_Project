import { atom } from 'recoil'



export const typeState = atom({
    key: 'typeState',
    default: "All"
  });

export const yearState = atom({
  key: 'yearState',
  default:[0,9999]
});

export const counterState = atom({
  key: 'countState',
  default: 8
})

export const themeState = atom({
  key: 'themeState',
  default: "light"
})

export const dataState = atom({
  key: 'defaultState',
  default: []
})


