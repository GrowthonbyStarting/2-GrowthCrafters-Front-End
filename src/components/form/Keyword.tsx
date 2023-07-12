import { css, styled } from 'styled-components';
import { useState } from 'react';
import { keyword } from '../../constants/keyword';

type ContainerProps = {
  active: boolean;
}

const Container = styled.div<ContainerProps>`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 2rem 3.7rem .2rem 2rem;

  button {
    cursor: pointer;
    width: 1.6rem;
    height: 1.6rem;
    border: solid 1.3px #e7eaf0;
    border-radius: 2px;
    margin-right: 1.2rem;

    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }

    ${(props) => props.active && css`
      background-color: ${props.theme.colors.primary};
      border: solid 1.3px ${props.theme.colors.primary};
    `}
  }

  span:nth-of-type(1){
    font-size: 13px;
    font-weight: bold;
    margin-right: .7rem;

    ${(props) => props.active && css`
      color: ${props.theme.colors.primary};
    `}
  }

  span:nth-of-type(2){
    font-size: 10px;
    color: ${(props) => props.theme.colors.gray003};
  }
`;

export default function Keyword({ data, keywordList, setKeywordList }: {
  data: keyword;
  keywordList: string[];
  setKeywordList: (value: string[]) => void
}) {
  const [active, setActive] = useState(data.required);

  const onClickActive = () => {
    if (data.required) return;
    if (active) {
      setActive(false);
      const removedKeywordList = keywordList.filter((keywordData) => keywordData !== data.name);
      setKeywordList(removedKeywordList);
      return;
    }
    setKeywordList([...keywordList, data.name]);
    setActive(true);
  };

  return (
    <Container active={active}>
      <button type="button" onClick={() => onClickActive()}>
        {active && (
          <img src="/images/check.svg" alt="check" />
        )}
      </button>
      <span>{data.name}</span>
      {data.required && (
        <span>필수</span>
      )}
      <span />
    </Container>
  );
}
