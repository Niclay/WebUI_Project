import { atom } from 'recoil'
import Data from './data'


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

export const dataState = atom({
  key: 'dataState',
  default: Data
})