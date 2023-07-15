import { styled } from 'styled-components';

import Heading from '../components/common/Heading';
import InputForm from '../components/form/InputForm';

const Section = styled.section`
  width: 100%;
  height: 100%;
  min-height: 93vh;
  background-image: url('/images/bg-patent-review.png');
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
`;

const Container = styled.div`
  .wide {
    position: absolute;
    left: 0;
    top: 5rem;
    transform: translateX(-10rem);
  }

  max-width: 724px;
  margin-inline: auto;
  width: 100%;
  height: 100%;
  padding-top: 3.8rem;
  position: relative;

  .narrow {
    display: none;
    @media screen and (max-width: 768px){
      display: flex;
      align-items: center;
      justify-content: center;
      margin-inline: auto;
      width: 300px;
      height: auto;
      padding-top: 3rem;

      img {
        display: flex;
        object-fit: contain;
        width: 37rem;
        height: 5rem;
      }
    }
  }
`;

export default function ReviewThirdPage() {
  return (
    <Section>
      <Container>
        <img className="wide" src="/images/status-3.png" alt="3" />
        <Heading step="STEP3" strong="아이디어" text="에 대해 간략하게 설명해주세요" description="자유롭게 원하는 키워드를 선택해 특허 아이디어에 대해 간단하게 소개해주세요 :)" />
        <div className="narrow">
          <img src="/images/status3-x.png" alt="status" />
        </div>
        <InputForm />
      </Container>
    </Section>
  );
}
