// eslint-disable-next-line import/no-extraneous-dependencies
import { Controller } from 'react-hook-form';
import { styled } from 'styled-components';
import Input from './Input';
import { KEYWORD } from '../../constants/keyword';
import { inputForm } from '../../types/inputForm';

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
  box-shadow: 0 0 12px 0 rgba(0, 0, 0, 0.05);

  div:last-child {
    border: none;
  }
`;

export default function RightInputForm({ reviewInput, keywordList, control }: {
  reviewInput: inputForm;
  keywordList: string[];
  control: any;
}) {
  const reviewInputArr = Object.values(reviewInput);
  return (
    <Container>
      {keywordList.map((keywordName: string, index) => (
        <Controller
          key={keywordName}
          control={control}
          defaultValue={reviewInputArr[index]}
          name={keywordName}
          render={({ field: { onChange, value } }) => (
            <Input keywordName={keywordName} onChange={onChange} value={value} />
          )}
        />
      ))}
    </Container>
  );
}
