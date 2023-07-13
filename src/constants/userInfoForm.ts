export type Property = {
  koreanName: string;
  placeholder: string;
}

const USER_INFO_INPUT: Record<string, Property> = {
  name: {
    koreanName: '이름',
    placeholder: '이름을 입력하세요.',
  },
  email: {
    koreanName: '이메일',
    placeholder: '이메일 주소를 입력하세요.',
  },
  phone: {
    koreanName: '전화번호',
    placeholder: '전화번호를 입력하세요.',
  },
};

export default USER_INFO_INPUT;
