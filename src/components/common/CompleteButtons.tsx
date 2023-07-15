import { styled } from 'styled-components';

const Container = styled.div`
  display: flex;
  width: 100%;
  margin-bottom: 20px;
  justify-content: center;
  align-items: flex-end;
  position: absolute;
  bottom: 3vh;

  a {
    cursor: pointer;
    text-decoration: none;
    width: 40vh;
    height: 6vh;
    margin: 2vh;
    border-radius: 8px;
    display: flex;
    text-align: center;
    padding: 1vh 2vh;
    justify-content: space-evenly;
    align-items: center;
    font-size: 1.8rem;
    font-weight: 600;
    color: #fff;
    background: ${(props) => props.theme.colors.primary};
  }
`;

export default function CompleteButtons({ text, link }: {
  text: string;
  link: string;
  }) {
  return (
    <Container>
      <a href={link}>
        <span>{text}</span>
      </a>
      <a href="/">
        <span>메인 홈으로 이동</span>
      </a>
    </Container>
  );
}
