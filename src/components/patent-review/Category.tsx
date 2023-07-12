import { styled } from 'styled-components';
import CategoryButton from './CategoryButton';

const CategoryContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  margin-top: 2rem;
  margin-bottom: 20rem;
  flex-wrap: wrap;
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
