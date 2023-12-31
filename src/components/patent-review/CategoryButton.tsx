import { css, styled } from 'styled-components';

type ContainerProps = {
  active: boolean;
}

const Container = styled.div<ContainerProps>`
  width: 12rem;
  height: 12rem;
  background-color: #FFF;
  border-radius: 8px;
  display: flex;
  justify-content: center;
  align-items: center;
  box-shadow: 0px 0px 12px 0px rgba(0, 0, 0, 0.05);
  margin: 1rem;
  @media screen and (max-width: 768px) {
    width: 10rem;
    height: 10rem;
  }

  ${(props) => props.active && css`
    border: 2px solid ${props.theme.colors.primary};
    color: ${props.theme.colors.primary};
  `}

  button {
    cursor: pointer;
    width: 100%;
    height: 100%;
    padding: 2rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    @media screen and (max-width: 768px) {
      padding: 1rem;
    }
  
  img {
    display: flex;
    width: 4.8rem;
    height: 4.8rem;
    margin-bottom: 1.5rem;
  }

  span{
    display: flex;
    font-family: 'Pretendard';
    font-weight: bold;
    font-size: 1.7rem;
    @media screen and (max-width: 768px) {
      font-size: 1.5rem;
    }
    ${(props) => props.active && css`
      color: ${props.theme.colors.primary};
    `}
  }
}
`;

export default function CategoryButton({
  text, src, category, setCategory,
}: {
  text: string;
  src: string;
  category: string;
  setCategory: (value: string) => void;
}) {
  const categoryEnglishName: string = src.slice(8);
  return (
    <Container active={category === categoryEnglishName}>
      <button
        type="button"
        onClick={() => setCategory(categoryEnglishName)}
      >
        <img src={src} alt={text} />
        <span>
          {text}
        </span>
      </button>
    </Container>
  );
}
