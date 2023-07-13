import { styled } from 'styled-components';
import { useState } from 'react';
import { useSessionStorage } from 'usehooks-ts';
import Heading from '../components/common/Heading';
import MoveButton from '../components/common/MoveButton';
import Category from '../components/patent-review/Category';

const Section = styled.section`
  width: 100%;
  min-height: 92vh;
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

export default function ReviewSecondPage() {
  const [selectedCategory, setSelectedCategory] = useSessionStorage('category', '');
  const link = '/patent-review/form';
  return (
    <Section>
      <Container>
        <Heading step="2" strong="어떤 분야" text="의 아이디어인가요?" description="대략적인 큰 카테고리를 선택 해주세요!" />
        <Category category={selectedCategory} setCategory={setSelectedCategory} />
        <MoveButton type="button" link={link} disabled={selectedCategory === ''} />
      </Container>
    </Section>
  );
}
