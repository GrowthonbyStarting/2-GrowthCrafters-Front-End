import { css, styled } from 'styled-components';
import { useState } from 'react';
import List from './List';

const Container = styled.header`
  display: flex;
  max-width: 1024px;
  margin-inline: auto;
  padding: 2rem 10rem;
  align-items: center;
  @media screen and (max-width: 940px){
    padding: 2rem 3rem;
  }
  
  h1 {
    margin-right: auto;
  }
  
  nav {
    display: flex;
    flex-direction: row;
    
    ul {
      display: flex;
    }
    @media screen and (max-width: 940px){
      display: none ;
    }
  }

  button {
    display: none;

    @media screen and (max-width: 940px){
      display: flex;
      cursor: pointer;

      img {
        width: 100%;
        height: 100%;
      }
    }
  }
`;

type HamburgerNavProp = {
  active: boolean
}

const HamburgerNav = styled.div<HamburgerNavProp>`
  position: fixed;
  width: 316px;
  height: 100%;
  right: -316px;
  top: 0;
  background-color: #fff;
  display: flex;
  z-index: 99;
  transition: transform .3s ease;
  
  ${(props) => props.active && css`
    transform: translateX(-316px);
  `}

  aside {
    width: 100%;
    height:100%;
    display: flex;
    flex-direction: column;

    button {
      width: 30px;
      height: 30px;
      font-family: 'Pretendard';
      font-weight: 700;
      font-size: 1.7rem;
      margin-top: 1rem;
      margin-left: 2rem;
      display: flex;
    }
    li {
      margin-left: 0;
      border-bottom: 1px solid gray;
    }
    a {
      display: flex;
      width: 100%;
      margin-left: 2rem; 
      font-size: 1.8rem;
      padding-block: 3rem;
    }
  }
`;

function NavBar({ setActive }: {
  setActive: (value: boolean) => void;
}) {
  return (
    <ul>
      <List
        path="/patent-review"
        text="특허등록가능성검토"
        setActive={setActive}
      />
      <List
        path="/korea-apply"
        text="국내특허등록신청"
        setActive={setActive}
      />
      <List
        path="/global-apply"
        text="해외특허등록신청"
        setActive={setActive}
      />
      <List
        path="/cost"
        text="비용 안내"
        setActive={setActive}
      />
      <List
        path="/progress"
        text="절차 안내"
        setActive={setActive}
      />
    </ul>
  );
}
export default function Header() {
  const [active, setActive] = useState(false);
  return (
    <Container>
      <h1>
        <a href="/">
          <img src="/images/logo.svg" alt="logo" />
        </a>
      </h1>
      <nav>
        <NavBar setActive={setActive} />
      </nav>
      <button type="button" onClick={() => setActive(true)}>
        <img src="/images/hamburger.svg" alt="hamburger" />
      </button>
      <HamburgerNav active={active}>
        <aside>
          <button type="button" onClick={() => setActive(false)}>x</button>
          <NavBar setActive={setActive} />
        </aside>
      </HamburgerNav>
    </Container>
  );
}
