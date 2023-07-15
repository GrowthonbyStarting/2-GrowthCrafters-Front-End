import { styled } from 'styled-components';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { useSessionStorage } from 'usehooks-ts';

import LeftSideBar from './LeftSideBar';
import RightInputForm from './RightInputForm';

import MoveButton from '../common/MoveButton';
import { InputFormName, inputForm } from '../../types/inputForm';

const Container = styled.form`
  padding-bottom: 2rem;
  @media screen and (max-width: 768px){
    padding-inline: 1rem;
  }
`;

const FormContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: row;
  margin-top: 1.4rem;
  margin-bottom: 2.8rem;
  @media screen and (max-width: 768px){
    flex-direction: column;
  }
`;

export default function InputForm() {
  const { handleSubmit, control } = useForm<inputForm>();
  const [keywordList, setKeywordList] = useState<InputFormName[]>(['명칭', '특징']);
  const [reviewInput, setReviewInput] = useSessionStorage<inputForm>('review-input', {
    명칭: '', 특징: '', 차별점: '', 효과: '', 기술: '',
  });
  const navigate = useNavigate();

  const onSubmit = (data: inputForm) => {
    setReviewInput(data);
    navigate('/patent-review/confirm');
  };

  return (
    <Container onSubmit={handleSubmit(onSubmit)}>
      <FormContainer>
        <LeftSideBar keywordList={keywordList} setKeywordList={setKeywordList} />
        <RightInputForm reviewInput={reviewInput} keywordList={keywordList} control={control} />
      </FormContainer>
      <MoveButton type="submit" link="" disabled={false} />
    </Container>
  );
}
