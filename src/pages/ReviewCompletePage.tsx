import { styled } from 'styled-components';
import CompleteButtons from '../components/common/CompleteButtons';

const Section = styled.section`
  width: 100%;
  height: 93vh;
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
    background-color: #fff;
    border-radius: 8px;
    box-shadow: 0px 0px 12px 0px rgba(0, 0, 0, 0.05);
    
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

      strong {
        color: ${(props) => props.theme.colors.primary};
      }
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

export default function ReviewCompletePage() {
  return (
    <Section>
      <Container>
        <div className="box">
          <img src="/images/check-blue.svg" alt="check" />
          <h2>
            <strong>특허 등록 가능성 검토 신청서</strong>
            가 전달되었어요!
          </h2>
          <div>
            작성해주신 신청서 꼼꼼히 살핀 후
            {' '}
            <br />
            담당자 개별 연락을 통해 상담을 진행할 예정이니
            <br />
            {' '}
            마음 편히 기다려주세요!
          </div>
          <div>
            추가적으로 궁금하신 사항이 있다면
            <br />
            오른쪽 하단의 플러스 버튼을 눌러 채팅을 진행해주세요 :)
          </div>
          <img src="/images/god1.svg" alt="god" />
        </div>
        <CompleteButtons text="변리사 경력 구경하러 가기" link="http://ecmpatent.com/partnerpeople" />
      </Container>
    </Section>
  );
}
