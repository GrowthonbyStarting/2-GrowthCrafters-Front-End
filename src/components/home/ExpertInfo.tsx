import { styled } from 'styled-components';
import Carousel from './Carousel';

const Container = styled.div`
  background-color: #F4F6FA;
  width: 100%;
  height: 100%;
  display: flex;
  padding: 5rem 13rem;
  margin: auto;
  justify-content: center;

  .max_container {
    max-width: 1024px;
    display: flex;
    flex-direction: column;
  }
  
  .title {
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #fff;
    width: 19rem;
    height: 15rem;
    border-radius: 3.2rem;
    color: ${(props) => props.theme.colors.primary};
    font-size: 2.8rem;
    font-weight: 700;

    @media screen and (max-width: 768px){
      font-size: 1.8rem;
      width: 13rem;
      height: 8rem;
    }

    img {
      background-color: ${(props) => props.theme.colors.primary};
      border-radius: 50%;
      width: 4.2rem;
      height: 4.2rem;
      object-fit: none;
      position: absolute;
      transform: translateX(9rem) translateY(-3rem);
      @media screen and (max-width: 768px){
        transform: translateX(7rem) translateY(-2rem);
      }
    }
  }
  
  .text {
    margin-top: 3rem;
    display: flex;
    font-size: 2rem;
    font-weight: 700;
    letter-spacing: -0.4px;
    flex-direction: column;

    br {
      height: 0;
    }
    
    @media screen and (max-width: 768px){
      font-size: 1.4rem;
      text-align: center;
      line-height: 2.5rem;
      padding-inline: 3rem;
    }

    span{
      strong {
        color: ${(props) => props.theme.colors.primary};
      }
    }
  }
  
  .god {
    display: flex;
    justify-content: center;
    margin-top: 6rem;
    position: relative;

    img {
      width: 32rem;
      height: 22rem;
      @media screen and (max-width: 768px){
        width: 20rem;
        height:auto;
      }
    }
    
    a {
      position: absolute;
      transform: translateX(25rem) translateY(-1rem);
      @media screen and (max-width: 768px){
        transform: translateX(13rem) translateY(-1rem);
      }
      img {
        width: 30rem;
        height: auto;
        @media screen and (max-width: 768px){
        width: 15rem;
        height:auto;
      }
      }
    }
  }
`;

export default function ExpertInfo() {
  return (
    <Container>
      <div className="max_container">
        <div className="title">
          변리사 소개
          <img src="/images/users.svg" alt="users" />
        </div>
        <div className="text">
          <span>
            <strong>경력 15년의 변리사</strong>
            들이 검토해주는 특허 등록 가능성!
          </span>
          <br />
          {' '}
          <span>미리 신청서에 작성해주신 아이디어에 대한 내용을 보고 특허 등록 가능성에 대해 파악한 후 빠르게 상담해드려요.</span>
          <br />
          {' '}
          <span>
            <strong>아이디어만 있다면</strong>
            ,당장 특허 등록 가능성 검토를 신청해보세요!
          </span>
        </div>
        <Carousel />
        <div className="god">
          <img src="/images/god3.webp" alt="god" />
          <a href="/patent-review">
            <img src="/images/speech-blue.svg" alt="speech" />
          </a>
        </div>
      </div>
    </Container>
  );
}
