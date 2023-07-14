import { css, styled } from 'styled-components';
import { keyword } from '../../constants/keyword';

type Props = {
  toggle: boolean;
}

const TitleContainer = styled.div<Props>`
  width: 100%;
  padding-bottom: 1rem;
  align-items: center;
  display: flex;
  justify-content: space-between;
  border-bottom: .6px solid #E7EAF0;
  
  ${(props) => props.toggle && css`
    border-bottom: none;
  `}
  
  div {
    display:flex;
    align-items: center;
     
    .title {
      display: flex;
      width: 4.7rem;
      height: 2.8rem;
      justify-content: center;
      margin-right: .8rem;
      border-radius: 4px;
      align-items: center;
      background-color: #F4F6FA;
      font-size: 1.2rem;
      color: ${(props) => props.theme.colors.primary};
      font-weight: bold;
    }
    .subtitle {
      display: flex;
      font-size: 1.6rem;
      font-weight: bold;
    }
  }

  button {
    display: flex;
    justify-self: flex-end;
    cursor: pointer;
    justify-content: flex-end;
    width: 2.4rem;
    height: 2.4rem;

    img {
      width: 100%;
      height: 100%;
    }
  }
`;

export default function Title({ keywordData, toggle, setToggle }: {
  keywordData: keyword;
  toggle: boolean;
  setToggle: (value: boolean) => void;
}) {
  const onClickToggle = () => {
    if (toggle) {
      setToggle(false);
      return;
    }
    setToggle(true);
  };

  return (
    <TitleContainer toggle={toggle}>
      <div>
        {keywordData.id !== 'formData' && (<span className="title">{keywordData.name}</span>)}
        <span className="subtitle">{keywordData.title}</span>
      </div>
      <button type="button" onClick={() => onClickToggle()}>
        <img src={toggle ? '/images/arrow-down.svg' : '/images/arrow-up.svg'} alt="arrow" />
      </button>
    </TitleContainer>
  );
}
