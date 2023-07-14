import { styled } from 'styled-components';
import CompleteButtons from './CompleteButtons';

const Section = styled.section`
  width: 100%;
  height: 93vh;
  /* max-height: 540px; */
  background-image: url('/images/bg-patent-review.png');
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  position: relative;  
  `;

const Container = styled.div`
  display: flex;
  justify-content: center;
  margin-inline: auto;
  width: 100%;
  height: 100%;
  padding-top: 6rem;
  
  .box {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 4.3vh;
    width: 80vh;
    height: 40vh;
    
    img:nth-of-type(1) {
      width: 8rem;
      height: 8rem;
      object-fit: cover;
      position: absolute;
      transform: translateY(-3rem);
    }

    img:nth-of-type(2) {
      position: absolute;
      bottom: 0;
      width: 50vh;
      height: 50vh;
    }

    h2 {
      font-size: 3vh;
      font-weight: 700;
      line-height: 150.836%;
      padding-top: 7vh; 
      margin-bottom: 2vh;
      color: ${(props) => props.theme.colors.primary};
    }

    div {
      width: 100%;
      text-align: center;
      line-height: 150.836%; 
      font-size: 2vh;
      font-weight: 600;
      margin-bottom: 2vh;
    }
  }
`;

export default function ReadyPage() {
  return (
    <Section>
      <Container>
        <div className="box">
          <img src="/images/idea-white.svg" alt="check" />
          <h2>
            <strong>현재 페이지는 서비스 준비중입니다.</strong>
          </h2>
          <div>
            이용에 불편을 드려 대단히 죄송합니다.
            <br />
            빠른 시일 내에 이용하실 수 있도록 노력하겠습니다.
          </div>
          <img src="/images/god1.svg" alt="god" />
        </div>
        <CompleteButtons text="특허 등록 가능성 검토받으러 가기" link="/patent-review" />
      </Container>
    </Section>
  );
}
