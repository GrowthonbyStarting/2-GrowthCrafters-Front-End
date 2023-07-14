import { styled } from 'styled-components';

const Container = styled.div`
  background-image: linear-gradient(to bottom, transparent, white), url("/images/typing.png");
  background-repeat: no-repeat;
  background-size: cover;
  background-position: top;

  height: 187rem;
  width: 100%;

  div {
    display: flex;
    justify-content: center;
    background-image: url('/images/intro-background.png');
    background-repeat: repeat-x;
    background-size: cover;
    width: 100%;
    height: 100%;

    img {
      display: flex;
      margin-top: 10rem;
      height: 174rem;
    }
  }
`;

export default function Intro() {
  return (
    <Container>
      <div>
        <img src="/images/intro.png" alt="intro" />
      </div>
    </Container>
  );
}
