import { InputFormName } from '../types/inputForm';

export interface keyword {
  name: InputFormName;
  id: string;
  required: boolean;
  title: string;
  placeholder: string;
}

export const KEYWORD: Record<string, keyword> = {
  명칭: {
    name: '명칭',
    id: 'q1',
    required: true,
    title: '아이디어를 한마디로',
    placeholder: '아이디어의 명칭은 무엇인가요?\u000D\u000Aex) 유기 폐기물을 활용한 에너지 생산 장치 및 방법',
  },
  특징: {
    name: '특징',
    id: 'q2',
    required: true,
    title: '아이디어의 특별한 점',
    placeholder: '아이디어의 특징은 무엇인가요?\u000D\u000Aex) 유기폐기물, 예를 들면 음식물 쓰레기, 가축 배설물, 농작물 부산물 등을\u000D\u000A수집하여 특수한 처리 과정을 거칩니다.',
  },
  차별점: {
    name: '차별점',
    id: 'q3',
    required: false,
    title: '어떤 점이 다른가요?',
    placeholder: '해당 아이디어만이 가진 종래 기술과의 차이점은 무엇인가요?\u000D\u000Aex) 기존 에너지 생산 방법은 환경 오염과 탄소 배출을 초래하지만, 이 발명은\u000D\u000A유기 폐기물을 이용하므로 환경 친화적인 해결책을 제공합니다.',
  },
  효과: {
    name: '효과',
    id: 'q4',
    required: false,
    title: '예상되는 긍정적 변화',
    placeholder: '해당 아이디어는 어디에 어떤식으로 효과를 잘 발휘할 수 있나요?\u000D\u000Aex) 이 발명은 유기 폐기물의 가치를 높이고, 에너지 생산 과정에서 환경 오염을\u000D\u000A감소시킴으로써 지속 가능한 개발을 촉진합니다.',
  },
  기술: {
    name: '기술',
    id: 'q5',
    required: false,
    title: '어떤 기술이 필요한가요?',
    placeholder: '해당 아이디어는 어디에 어떤식으로 효과를 잘 발휘할 수 있나요?\u000D\u000Aex) 이 발명은 유기 폐기물의 가치를 높이고, 에너지 생산 과정에서 환경 오염을\u000D\u000A감소시킴으로써 지속 가능한 개발을 촉진합니다.',
  },
};

export type FileData = {
  name: '파일 첨부';
  id: string;
  required: boolean;
  title: string;
  placeholder: string;
}

export const FILE_VALUE: FileData = {
  name: '파일 첨부',
  id: 'formData',
  required: false,
  title: '파일첨부',
  placeholder: '특허의 구성 및 효과를 구체적으로 설명할 자료가 있는 경우 파일을 첨부해주세요!',
};

export const FILE_PLACEHOLDER = '특허의 구성 및 효과를 구체적으로 설명할 자료가 있는 경우 파일을 첨부해주세요!';
