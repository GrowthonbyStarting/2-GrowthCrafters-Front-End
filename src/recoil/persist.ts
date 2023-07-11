import { atom } from 'recoil';
import { recoilPersist } from 'recoil-persist';

const { persistAtom } = recoilPersist({
  key: 'sessionStorage',
  storage: sessionStorage,
});

const inputValues = atom({
  key: 'inputValues',
  default: {},
  effects_UNSTABLE: [persistAtom],
});

export default inputValues;
