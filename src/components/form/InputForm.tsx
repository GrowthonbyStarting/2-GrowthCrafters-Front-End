import { styled } from 'styled-components';
import { useState } from 'react';
// eslint-disable-next-line import/no-extraneous-dependencies
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
// eslint-disable-next-line import/no-extraneous-dependencies
import { useSessionStorage } from 'usehooks-ts';
import MoveButton from '../common/MoveButton';
import LeftSideBar from './LeftSideBar';
import RightInputForm from './RightInputForm';

const Container = styled.form`
  padding-bottom: 2rem;
`;

const FormContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: row;
  margin-top: 1.4rem;
  margin-bottom: 2.8rem;
`;

export default function InputForm() {
  const { handleSubmit, control } = useForm();
  const [keywordList, setKeywordList] = useState(['명칭', '특징']);
  const [reviewInput, setReviewInput] = useSessionStorage('review-input', {
    q1: '', q2: '', q3: '', q4: '', q5: '',
  });
  const navigate = useNavigate();

  const onSubmit = (data: any) => {
    console.log(data);
    setReviewInput(data);
    navigate('/patent-review/complete');
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
