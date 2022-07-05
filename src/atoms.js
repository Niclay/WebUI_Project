import { atom, selector } from 'recoil'



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


