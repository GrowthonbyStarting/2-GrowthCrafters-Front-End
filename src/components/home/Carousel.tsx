import { styled } from 'styled-components';

const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-wrap: wrap;
  margin-top: 5.7rem;
  justify-content: center;
  @media screen and (max-width: 768px){
    margin-top: 3rem;
  }
  
  a {
    width: 18rem;
    height: 20rem;
    text-decoration: none;
    position: relative;
    margin-right: 1.6rem;
    
    img {
      width: 100%;
      height: 100%;
    }
    span {
      strong {
        font-size: 1.5rem;
        @media screen and (max-width: 768px){
          font-size: 1.2rem;
        }
      }
      position: absolute;
      left: 6rem;
      bottom: 2rem;
      font-weight: 700;
      text-align: center;
      line-height: 1.4rem;
      font-size: 1.2rem;
      color: #fff;
      @media screen and (max-width: 768px){
        left: 7rem;
        font-size: 1rem;
        line-height: 1.5rem;
      }

    }
  }
  `;

export default function Carousel() {
  return (
    <Container>
      <a href="http://ecmpatent.com/partnersinfo/?q=YToxOntzOjEyOiJrZXl3b3JkX3R5cGUiO3M6MzoiYWxsIjt9&bmode=view&idx=1633131&t=board">
        <img src="/images/person1.png" alt="person" />
        <span>
          <strong>경력 15년</strong>
          <br />
          김시우 변리사
        </span>
      </a>
      <a href="http://ecmpatent.com/partnersinfo/?q=YToxOntzOjEyOiJrZXl3b3JkX3R5cGUiO3M6MzoiYWxsIjt9&bmode=view&idx=1633134&t=board">
        <img src="/images/person2.png" alt="person" />
        <span>
          <strong>경력 15년</strong>
          <br />
          김태균 변리사
        </span>
      </a>
      <a href="http://ecmpatent.com/partnersinfo/?q=YToxOntzOjEyOiJrZXl3b3JkX3R5cGUiO3M6MzoiYWxsIjt9&bmode=view&idx=1633140&t=board">
        <img src="/images/person3.png" alt="person" />
        <span>
          <strong>경력 15년</strong>
          <br />
          이은심 변리사
        </span>
      </a>
      <a href="http://ecmpatent.com/partnersinfo/?q=YToxOntzOjEyOiJrZXl3b3JkX3R5cGUiO3M6MzoiYWxsIjt9&bmode=view&idx=3091554&t=board">
        <img src="/images/person4.png" alt="person" />
        <span>
          <strong>경력 15년</strong>
          <br />
          최지영 변리사
        </span>
      </a>
    </Container>
  );
}
