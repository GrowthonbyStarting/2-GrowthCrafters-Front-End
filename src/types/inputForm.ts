export interface inputForm {
  명칭: string;
  특징: string;
  차별점?: string;
  효과?: string;
  기술?: string;
}

export type InputFormName = '명칭' | '특징' | '차별점' | '효과' | '기술';

export interface userInfo {
  '이름': string;
  '이메일': string;
  '전화번호': string;
}
