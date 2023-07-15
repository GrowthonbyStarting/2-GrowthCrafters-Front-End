import { styled } from 'styled-components';

const Container = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
  padding-top: .5rem;
  
  div {
    display: flex;
    width: 100%;
    flex-direction: column;
    padding-block: 1rem;
    font-weight: 700;
    
    input {
      margin-top: 1rem;
      display: flex;
      width: 100%;
      height: 4rem;
      border: none;
      background-color: #f4f6fa;
      border-radius: 8px;
      font-size: 12px;
      font-weight: 500;
      padding: 1.7rem 1.3rem;
      resize: none;
    }
  }

`;

export default function ReadOnlyInput({ title, value }:{
  title: string;
  value: string;
}) {
  return (
    <Container>
      <div>
        {title}
        <input
          readOnly
          value={value}
        />
      </div>
    </Container>
  );
}
