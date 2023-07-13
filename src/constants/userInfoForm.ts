export type Property = {
  koreanName: string;
  placeholder: string;
  type: string;
}

const USER_INFO_INPUT: Record<string, Property> = {
  이름: {
    koreanName: '이름',
    placeholder: '이름을 입력하세요.',
    type: 'text',
  },
  이메일: {
    koreanName: '이메일',
    placeholder: '이메일 주소를 입력하세요.',
    type: 'email',
  },
  전화번호: {
    koreanName: '전화번호',
    placeholder: '전화번호를 입력하세요.  ex) 010-1234-5678',
    type: 'tel',
  },
};

export default USER_INFO_INPUT;
