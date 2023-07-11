import { styled } from 'styled-components';
import List from './List';

const Container = styled.header`
  display: flex;
  max-width: 1024px;
  margin-inline: auto;
  padding: 2rem 10rem;
  align-items: center;
  
  h1 {
    margin-right: auto;
  }
  
  nav {
    display: flex;
    flex-direction: row;
    
    ul {
    display: flex;
    }
  }
`;

export default function Header() {
  return (
    <Container>
      <h1>
        <a href="/">
          <img src="/images/logo.svg" alt="logo" />
        </a>
      </h1>
      <nav>
        <ul>
          <List
            path="/patent-review"
            text="특허등록가능성검토"
          />
          <List
            path="/korea-apply"
            text="국내특허등록신청"
          />
          <List
            path="/global-apply"
            text="해외특허등록신청"
          />
          <List
            path="/cost"
            text="비용 안내"
          />
          <List
            path="/progress"
            text="절차 안내"
          />
        </ul>
      </nav>
    </Container>
  );
}
