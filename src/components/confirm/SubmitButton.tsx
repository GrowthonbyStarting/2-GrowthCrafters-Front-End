import { useNavigate } from 'react-router-dom';
import { styled } from 'styled-components';

const Container = styled.div`
  display: flex;
  width: 100%;
  margin-bottom: 20px;
  justify-content: center;
  align-items: flex-end;

  button {
    cursor: pointer;
    width: 13rem;
    height: 4rem;
    border-radius: 8px;
    display: flex;
    padding: 1rem 2rem;
    justify-content: space-evenly;
    align-items: center;

    svg {
      display: flex;
    }

    span {
      font-family: 'Pretendard';
      font-size: 1.6rem;
      font-weight: bold;
    }
  }
`;

const PrevButton = styled.button`
  margin-right: 1rem;
  background: #FFF;
`;

const NextButton = styled.button`
  background: ${(props) => props.theme.colors.primary};
  color: #FFF;

  img {
    stroke: var(--white, #FFF);
  }

  &:disabled {
    opacity: 50%;
  }
`;

export default function SubmitButton({ handleSubmit }: {
  handleSubmit: () => void;
}) {
  const navigate = useNavigate();

  return (
    <Container>
      <PrevButton type="button" onClick={() => navigate(-1)}>
        <svg xmlns="http://www.w3.org/2000/svg" width="11" height="10" viewBox="0 0 11 10" fill="none">
          <path d="M5.04891 8.43231L1.29891 4.68231M1.29891 4.68231L5.04892 0.932312M1.29891 4.68231L9.94401 4.68231" stroke="#424C60" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
        <span>이전으로</span>
      </PrevButton>
      <NextButton type="submit" onClick={handleSubmit} disabled={false}>
        <span>제출하기</span>
        <svg xmlns="http://www.w3.org/2000/svg" width="11" height="10" viewBox="0 0 11 10" fill="none">
          <path d="M6.07255 0.932312L9.82255 4.68231M9.82255 4.68231L6.07255 8.43231M9.82255 4.68231L1.17745 4.68231" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </NextButton>
    </Container>
  );
}
