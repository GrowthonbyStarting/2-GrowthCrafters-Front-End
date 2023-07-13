import { css, styled } from 'styled-components';
import { useState } from 'react';
import { KEYWORD } from '../../constants/keyword';
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
`;

export default function Input({ keywordName, onChange, value }: {
  keywordName: string;
  value: any;
  onChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void ;
}) {
  const keywordData = KEYWORD[`${keywordName}`];
  const [toggle, setToggle] = useState(true);

  return (
    <Container toggle={toggle}>
      <Title keywordName={keywordData.title} toggle={toggle} setToggle={setToggle} />
      <InputContainer>
        {(toggle && keywordName !== '파일 첨부') && (
          <textarea
            placeholder={keywordData.placeholder}
            onChange={onChange}
            value={value}
            required={keywordData.required}
          />
        )}
      </InputContainer>
    </Container>
  );
}
