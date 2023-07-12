// eslint-disable-next-line import/no-extraneous-dependencies
import { Controller } from 'react-hook-form';
import { styled } from 'styled-components';
import Input from './Input';
import KEYWORD from '../../constants/keyword';

const Container = styled.div`
  display: flex;
  width: 46rem;
  min-height: 32rem;
  height: 100%;
  padding-top: 0.5rem;
  background-color: #fff;
  border-radius: 8px;
  flex-direction: column;
  align-items: center;
  /* overflow-y: scroll;

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
  } */

  div:last-child {
    border: none;
  }
`;

export default function RightInputForm({ keywordList, control }: {
  keywordList: string[];
  control: any;
}) {
  return (
    <Container>
      {keywordList.map((keywordName: string) => (
        <Controller
          key={keywordName}
          control={control}
          name={KEYWORD[keywordName].enName}
          render={({ field: { onChange, value } }) => (
            <Input keywordName={keywordName} onChange={onChange} value={value} />
          )}
        />
      ))}
    </Container>
  );
}
