import { styled } from 'styled-components';

import { KEYWORD, keyword } from '../../constants/keyword';

import Keyword from './Keyword';
import { InputFormName } from '../../types/inputForm';

const Container = styled.div`
  display: flex;
  height: 100%;
  flex-direction: column;
  box-shadow: 0 0 12px 0 rgba(0, 0, 0, 0.05);

   span:last-child{
    margin-top: .8rem;
    display: flex;
    font-size: 3px;
    letter-spacing: -0.16px;
    color: rgba(246, 0, 0, 0.8);
  }
`;

const SideBar = styled.div`
  display: flex;
  width: 14rem;
  height: 32rem;
  background-color: #fff;
  flex-direction: column;
  border-radius: 8px;
  margin-right: .8rem;;
  font-weight: normal;
  `;

export default function LeftSideBar({ keywordList, setKeywordList }: {
  keywordList: InputFormName[];
  setKeywordList: (value: InputFormName[]) => void;
}) {
  return (
    <Container>
      <SideBar>
        {Object.values(KEYWORD).map((data: keyword) => (
          <Keyword
            key={data.name}
            data={data}
            keywordList={keywordList}
            setKeywordList={setKeywordList}
          />
        ))}
      </SideBar>
      <span>* 명칭, 특징은 필수 입력 항목 입니다</span>
    </Container>
  );
}
