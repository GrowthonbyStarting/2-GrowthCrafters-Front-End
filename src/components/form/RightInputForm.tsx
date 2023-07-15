// eslint-disable-next-line import/no-extraneous-dependencies
import { Control, Controller } from 'react-hook-form';
import { styled } from 'styled-components';
import Input from './Input';
import { InputFormName, inputForm } from '../../types/inputForm';

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

  @media screen and (max-width: 768px){
    width: 100%;
    min-height: 100%;
  }

  div:last-child {
    border: none;
  }
`;

export default function RightInputForm({ reviewInput, keywordList, control }: {
  reviewInput: inputForm;
  keywordList: InputFormName[];
  control: Control<inputForm>;
}) {
  const reviewInputArr = Object.values(reviewInput);
  return (
    <Container>
      {keywordList.map((keywordName, index) => (
        <Controller
          key={keywordName}
          control={control}
          defaultValue={reviewInputArr[index]}
          name={keywordName}
          render={({ field: { onChange, value = '' } }) => (
            <Input keywordName={keywordName} onChange={onChange} value={value} />
          )}
        />
      ))}
    </Container>
  );
}
