import { css, styled } from 'styled-components';

type ContainerProps = {
  active: boolean;
}

const Container = styled.div<ContainerProps>`
  display: flex;
  width: 100%;
  justify-content: center;
  padding-top: .5rem;
  
  div {
    display: flex;
    width: 90%;
    flex-direction: column;
    padding-block: 2rem;
    font-weight: 700;
    border-bottom: .6px solid #E7EAF0;

    ${(props) => props.active && css`
      border-bottom: none;
    `}
    
    input {
      margin-top: 1rem;
      display: flex;
      width: 100%;
      height: 4rem;
      border: none;
      background-color: #f4f6fa;
      border-radius: 4px;
      font-size: 12px;
      font-weight: 500;
      padding: 1.7rem 1.3rem;
      resize: none;
    }
  }

`;

export default function Input({
  name, placeholder, value, onChange,
} : {
  name: string;
  placeholder: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLElement>) => void;
}) {
  const active = name === '전화번호';
  return (
    <Container active={active}>
      <div>
        {name}
        <input required value={value} onChange={onChange} placeholder={placeholder} />
      </div>
    </Container>
  );
}
