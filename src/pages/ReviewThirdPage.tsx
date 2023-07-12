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

export default function ReviewThirdPage() {
  const location = useLocation();

  const link = `${location.pathname}/`;

  return (
    <Section>
      <Container>
        <Heading step="3" strong="회신받을 사람" text="에 대한 정보를 입력해주세요." description="거의 다 왔어요 :)" />

      </Container>
    </Section>
  );
}
