import { atom } from 'recoil';

const initialFormData: FormData = new FormData();

export const reviewFileState = atom({
  key: 'reviewFileState',
  default: initialFormData,
});

export const reviewSubmitState = atom({
  key: 'reviewSubmitState',
  default: false,
});
