import { styled } from 'styled-components';
import { useState } from 'react';
import Keyword from './Keyword';
import KEYWORD, { keyword } from '../../constants/keyword';
import Input from './Input';

const FormContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: row;
  margin-top: 1.4rem;
  margin-bottom: 2.8rem;
`;
const LeftSideBar = styled.div`
  display: flex;
  width: 14rem;
  height: 32rem;
  background-color: #fff;
  flex-direction: column;
  border-radius: 8px;
  margin-right: .8rem;;
  `;
const RightInputForm = styled.form`
  display: flex;
  width: 46rem;
  height: 32rem;
  background-color: #fff;
  border-radius: 8px;
  flex-direction: column;
  align-items: center;
  overflow-y: scroll;

  &::-webkit-scrollbar{
    width: .4rem;
  }

  &::-webkit-scrollbar-thumb {
    height: 30%;
    background: #e7eaf0;
    border-radius: 10px;
  }

  &::-webkit-scrollbar-track{
    background: #fff;
  }
`;

export default function InputForm() {
  const [keywordList, setKeywordList] = useState(['명칭', '특징']);
  return (
    <FormContainer>
      <LeftSideBar>
        {Object.values(KEYWORD).map((data: keyword) => (
          <Keyword
            key={data.name}
            data={data}
            keywordList={keywordList}
            setKeywordList={setKeywordList}
          />
        ))}
      </LeftSideBar>
      <RightInputForm>
        {keywordList.map((keywordName: string) => (
          <Input key={keywordName} keywordName={keywordName} />
        ))}
      </RightInputForm>
    </FormContainer>
  );
}
