import { css, styled } from 'styled-components';
import { useState } from 'react';
import KEYWORD from '../../constants/keyword';
import Title from './Title';

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
  value: any;
  onChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void ;
}) {
  const keywordData = KEYWORD[`${keywordName}`];
  const [toggle, setToggle] = useState(true);

  // const [submitedFile, setSubmitedFile] = useState('');

  // const handleFileChange = (e: any) => {
  //   const fileName = e.target.value;
  //   setSubmitedFile(fileName.split('\\').pop());
  //   console.log(e.target.value);
  // };
  return (
    <Container toggle={toggle}>
      <Title keywordName={keywordName} toggle={toggle} setToggle={setToggle} />
      <InputContainer>
        {(toggle && keywordName !== '파일 첨부') && (
          <textarea
            placeholder={keywordData.placeholder}
            onChange={onChange}
            value={value}
            required={keywordData.required}
            // onInvalid={(e) => handleInvalid(e)}
          />
        )}
        {/* {(toggle && keywordName === '파일 첨부') && (
          <label htmlFor="file-upload">
            <img src="/images/file-upload.svg" alt="file-upload" />
            <span>{submitedFile === '' ? keywordData.placeholder : submitedFile}</span>
            <input
              type="file"
              id="file-upload"
              // eslint-disable-next-line max-len
              onChange={(e) => handleFileChange(e)}
              multiple
            />
          </label>
        )} */}
      </InputContainer>
    </Container>
  );
}
