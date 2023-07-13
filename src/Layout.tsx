import { Outlet } from 'react-router-dom';

import { styled } from 'styled-components';

import Header from './components/header';
import Footer from './components/footer';

const Container = styled.div`
  
`;

export default function Layout() {
  return (
    <Container>
      <Header />
      <Outlet />
      {/* <Footer /> */}
    </Container>
  );
}
