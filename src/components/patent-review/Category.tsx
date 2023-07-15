import { styled } from 'styled-components';
import CategoryButton from './CategoryButton';

const CategoryContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  margin-top: 6rem;
  margin-bottom: 15rem;
  flex-wrap: wrap;

  @media screen and (max-width: 768px) {
    margin-top: 0;
    margin-bottom: 10rem;
    padding: 2rem;
  }
`;

export default function Category({ category, setCategory }:{
  category: string;
  setCategory: (value: string) => void;
}) {
  const CATEGORY: string[][] = [
    ['전자', '/images/electron.svg'],
    ['기계', '/images/machinery.svg'],
    ['화학', '/images/chemistry.svg'],
    ['바이오', '/images/bio.svg'],
    ['기타', '/images/etc.svg'],
  ];

  return (
    <CategoryContainer>
      {CATEGORY.map((value:string[]) => (
        <CategoryButton
          key={value[0]}
          text={value[0]}
          src={value[1]}
          category={category}
          setCategory={setCategory}
        />
      ))}
    </CategoryContainer>
  );
}
