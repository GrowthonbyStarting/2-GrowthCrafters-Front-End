import { atom } from 'recoil';

const Keywords = {
  명칭: true,
  특징: true,
  차별점: false,
  효과: false,
  기술: false,
  파일첨부: false,
};

const keywordState = atom({
  key: 'keywordState',
  default: Keywords,
});

export default keywordState;
