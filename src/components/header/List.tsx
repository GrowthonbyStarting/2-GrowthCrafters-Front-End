import { Link, useLocation } from 'react-router-dom';
import { css, styled } from 'styled-components';

type ContainerProps = {
  active: boolean;
}

const Container = styled.div<ContainerProps>`
  li {
      margin-left: 4.7rem;
    a {
      font-size: 14px;
      font-weight: 600;
      text-decoration: none;

      ${(props) => props.active && css`
        color: ${props.theme.colors.primary};
      `}
    }
  }
`;

export default function List({
  path, text,
}: {
  path: string;
  text: string;
}) {
  const location = useLocation();

  return (
    <Container active={location.pathname.includes(path)}>
      <li>
        <Link to={path}>{text}</Link>
      </li>
    </Container>
  );
}
