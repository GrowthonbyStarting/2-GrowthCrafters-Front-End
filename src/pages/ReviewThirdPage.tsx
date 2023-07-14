import { styled } from 'styled-components';
import { useLocation } from 'react-router-dom';
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
  .status {
    position: absolute;
    left: 0;
    top: 5rem;
    transform: translateX(-10rem);
  }
  max-width: 724px;
  margin-inline: auto;
  width: 100%;
  height: 100%;
  padding-top: 5.7rem;
  position: relative;
`;

export default function ReviewThirdPage() {
  return (
    <Section>
      <Container>
        <img className="status" src="/images/status-3.png" alt="3" />
        <Heading step="STEP3" strong="아이디어" text="에 대해 간략하게 설명해주세요" description="자유롭게 원하는 키워드를 선택해 특허 아이디어에 대해 간단하게 소개해주세요 :)" />
        <InputForm />
      </Container>
    </Section>
  );
}
