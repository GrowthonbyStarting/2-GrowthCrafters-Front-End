import { styled } from 'styled-components';
import { useLocation } from 'react-router-dom';
import Heading from '../components/common/Heading';
import MoveButton from '../components/common/MoveButton';

const Section = styled.section`
  width: 100%;
  height: 90vh;
  max-height: 540px;
  background-image: url('/images/bg-patent-review.png');
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  `;

const Container = styled.div`
  max-width: 724px;
  margin-inline: auto;
  width: 100%;
  height: 100%;
  padding-top: 5.7rem;
  position: relative;
`;

export default function ReviewSecondPage() {
  const location = useLocation();

  const link = `${location.pathname}/complete`;

  return (
    <Section>
      <Container>
        <Heading step="2" strong="아이디어에" text="대해 간략하게 설명해주세요" description="자유롭게 원하는 키워드를 선택해 특허 아이디어에 대해 간단하게 소개해주세요 :)" />

        <MoveButton link={link} disabled />
      </Container>
    </Section>
  );
}