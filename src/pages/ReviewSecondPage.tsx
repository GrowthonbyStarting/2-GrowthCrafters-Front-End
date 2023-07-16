import { styled } from 'styled-components';

import { useSessionStorage } from 'usehooks-ts';

import Heading from '../components/common/Heading';
import Category from '../components/patent-review/Category';
import MoveButton from '../components/common/MoveButton';

const Section = styled.section`
  width: 100%;
  min-height: 93vh;
  background-image: url('/images/bg-patent-review.png');
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;  
  @media screen and (max-width: 350px){
    padding-bottom: 5rem;
  }
`;

const Container = styled.div`
  .wide {
    position: absolute;
    left: 0;
    top: 5rem;
    transform: translateX(-10rem);
  }

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
  
  .god {
    position: absolute;
    bottom: 0;
    right: 0;
    transform: translateY(28vh);
    opacity: 50%;
    width: 20rem;
    height: 32rem;

    @media screen and (max-width: 768px) {
      display: none;
    }
  }

  max-width: 724px;
  margin-inline: auto;
  width: 100%;
  height: 100%;
  padding-top: 3.8rem;
  position: relative;
`;

export default function ReviewSecondPage() {
  const [selectedCategory, setSelectedCategory] = useSessionStorage('category', '');
  const link = '/patent-review/form';
  return (
    <Section>
      <Container>
        <img className="wide" src="/images/status-2.png" alt="2" />
        <Heading step="STEP2" strong="어떤 분야" text="의 아이디어인가요?" description="대략적인 큰 카테고리를 선택 해주세요!" />
        <div className="narrow">
          <img src="/images/status2-x.png" alt="status" />
        </div>
        <Category category={selectedCategory} setCategory={setSelectedCategory} />
        <MoveButton type="button" link={link} disabled={selectedCategory === ''} />
        <img className="god" src="/images/god1.svg" alt="god" />
      </Container>
    </Section>
  );
}
