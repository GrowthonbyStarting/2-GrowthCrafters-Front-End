import { css, styled } from 'styled-components';
import { useState } from 'react';
import KEYWORD from '../../constants/keyword';

const Container = styled.div`
  width: 95%;
`;

type TitleContainer = {
  toggle: boolean;
}

const TitleContainer = styled.div<TitleContainer>`
  width: 100%;
  padding: 1.3rem 1.7rem;
  justify-content: space-between;
  align-items: center;
  display: flex;
  border-bottom: .6px solid #e7eaf0;

  ${(props) => props.toggle && css`
    border-bottom: none;
  `}

  span {
    display: flex;
    font-size: 1.6rem;
    font-weight: bold;
  }

  button {
    cursor: pointer;
    display: flex;
    justify-content: flex-end;
    width: 2.4rem;
    height: 2.4rem;

    img {
      width: 100%;
      height: 100%;
    }
  }
`;

const InputContainer = styled.div`
  width: 100%;
  height: 100%;
  
  textarea {
    min-height: 8rem;
    width: 100%;
    border: none;
    background-color: #f4f6fa;
    border-radius: 4px;
    font-size: 12px;
    font-weight: 500;
    padding: 1.7rem 1.3rem;
    resize: none;
  }
`;

export default function Input({ keywordName }: {
  keywordName: string;
}) {
  const keywordData = KEYWORD[`${keywordName}`];
  const [toggle, setToggle] = useState(true);
  const onClickToggle = () => {
    if (toggle) {
      setToggle(false);
      return;
    }
    setToggle(true);
  };
  return (
    <Container>
      <TitleContainer toggle={toggle}>
        <span>{KEYWORD[`${keywordName}`].title}</span>
        <button type="button" onClick={() => onClickToggle()}>
          <img src="/images/arrow-down.svg" alt="arrow" />
        </button>
      </TitleContainer>
      <InputContainer>
        {toggle && (
          <textarea
            placeholder={keywordData.placeholder}
          />
        )}
      </InputContainer>
    </Container>
  );
}
