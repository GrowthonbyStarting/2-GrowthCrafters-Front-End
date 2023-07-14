import { styled } from 'styled-components';

const Container = styled.div`
  background-color: #F4F6FA;
  width: 100%;
  height: 78rem;
  display: flex;
  justify-content: center;
  padding: 5rem 13rem;
  margin: auto;
  
  div {
    max-width: 1024px;
    justify-content: center;
    align-items: center;
    background-color: #fff;
    width: 19rem;
    height: 6.4rem;
    border-radius: 3.2rem;
    color: ${(props) => props.theme.colors.primary};
    font-size: 2.8rem;
    font-weight: 700;
  }
`;

export default function ExpertInfo() {
  return (
    <Container>
      <div>변리사 소개</div>
    </Container>
  );
}
