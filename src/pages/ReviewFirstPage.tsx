import { styled } from 'styled-components';
import { useState } from 'react';
import { useLocation } from 'react-router-dom';
import Category from '../components/patent-review/Category';
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
  padding-top: 3.8rem;
  position: relative;
`;

export default function ReviewFirstPage() {
  const [category, setCategory] = useState('');
  const slicedCategory = category.slice(0, -4);
  const location = useLocation();

  const link = `${location.pathname}/${slicedCategory}`;

  return (
    <Section>
      <Container>
        <Heading step="1" strong="어떤 분야" text="의 아이디어인가요?" description="질문이 있을때는 특허의 신을 불러 도움을 요청하세요!" />
        <Category category={category} setCategory={setCategory} />
        <MoveButton type="button" link={link} disabled={category === ''} />
      </Container>
    </Section>
  );
}
