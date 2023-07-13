import { css, styled } from 'styled-components';
import { KEYWORD } from '../../constants/keyword';

type Props = {
  toggle: boolean;
}

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

export default function Title({ keywordName, toggle, setToggle }: {
  keywordName: string;
  toggle: boolean;
  setToggle: (value: boolean) => void;
}) {
  // const keywordData = KEYWORD[`${keywordName}`];
  const onClickToggle = () => {
    if (toggle) {
      setToggle(false);
      return;
    }
    setToggle(true);
  };

  return (
    <TitleContainer toggle={toggle}>
      <span>{keywordName}</span>
      <button type="button" onClick={() => onClickToggle()}>
        <img src={toggle ? '/images/arrow-down.svg' : '/images/arrow-up.svg'} alt="arrow" />
      </button>
    </TitleContainer>
  );
}
