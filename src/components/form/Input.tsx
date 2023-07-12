import { css, styled } from 'styled-components';
import { FormEvent, useState } from 'react';
import KEYWORD from '../../constants/keyword';

type Props = {
  toggle: boolean;
}
const Container = styled.div<Props>`
  width: 95%;
  padding-block: 0.8rem;
  border-bottom: .6px solid #E7EAF0;

  ${(props) => !props.toggle && css`
    border: none;
  `}
`;

const TitleContainer = styled.div<Props>`
  width: 100%;
  padding: 0rem 1.7rem 1rem 1.7rem;
  justify-content: space-between;
  align-items: center;
  display: flex;
  border-bottom: .6px solid #E7EAF0;
  
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
  
  textarea {
    width: 100%;
    min-height: 8rem;
    height: 100%;
    border: none;
    background-color: #f4f6fa;
    border-radius: 4px;
    font-size: 12px;
    font-weight: 500;
    padding: 1.7rem 1.3rem;
    resize: none;
  }

  input[type="file"] {
    display: none;
  }

  label {
    cursor: pointer;
    display: flex;
    width: 100%;
    min-height: 8rem;
    height: 100%;
    border: none;
    background-color: #f4f6fa;
    border-radius: 4px;
    font-size: 12px;
    font-weight: 500;
    padding: 1.7rem 9rem;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    img {
      display: flex;
      width: 1.8rem;
      height: 2rem;
      margin-bottom: .5rem;
    }
    span {
      display: flex;
      text-align : center;
      color: #9ea9be;
    }
  }

`;

export default function Input({ keywordName, onChange, value }: {
  keywordName: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void ;
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

  const handleInvalid = (e:FormEvent<HTMLTextAreaElement>) => {
    // e.preventDefault();
  };

  return (
    <Container toggle={toggle}>
      <TitleContainer toggle={toggle}>
        <span>{keywordData.title}</span>
        <button type="button" onClick={() => onClickToggle()}>
          <img src={toggle ? '/images/arrow-down.svg' : '/images/arrow-up.svg'} alt="arrow" />
        </button>
      </TitleContainer>
      <InputContainer>
        {(toggle && keywordName !== '파일 첨부') && (
          <textarea
            placeholder={keywordData.placeholder}
            onChange={onChange}
            value={value}
            required={keywordData.required}
            onInvalid={(e) => handleInvalid(e)}
          />
        )}
        {(toggle && keywordName === '파일 첨부') && (
          <label htmlFor="file-upload">
            <img src="/images/file-upload.svg" alt="file-upload" />
            <span>{keywordData.placeholder}</span>
            <input type="file" id="file-upload" value={value} multiple />
          </label>
        )}
      </InputContainer>
    </Container>
  );
}
