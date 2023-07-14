import { styled } from 'styled-components';
import Heading from '../components/common/Heading';
import UserInfoForm from '../components/user-form/UserInfoForm';

const Section = styled.section`
  width: 100%;
  height: 93vh;
  /* max-height: 540px; */
  background-image: url('/images/bg-patent-review.png');
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;

  `;

const Container = styled.div`
  img {
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
`;

export default function ReviewFirstPage() {
  return (
    <Section>
      <Container>
        <img src="/images/status-1.png" alt="status" />
        <Heading step="STEP1" strong="회신받을 사람" text="에 대한 정보를 입력해주세요." description="이름, 이메일, 전화번호만 적어주시면 돼요!" />
        <UserInfoForm />
      </Container>
    </Section>
  );
}
