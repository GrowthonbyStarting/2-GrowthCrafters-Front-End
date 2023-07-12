import { styled } from 'styled-components';

const HeadingContainer = styled.div`
  display: flex;
  width: 100%;
  height: 7rem;
  align-items: center;
  flex-direction: column;
  justify-content: space-between;

  div:nth-of-type(1) {
    display: flex;
    font-size: 1.4rem;
    font-weight: bold;
  }

  div:nth-of-type(2) {
    display: flex;
    font-size: 2.4rem;
    font-weight: bold;

    strong {
      color: ${(props) => props.theme.colors.primary};
    }
  }

  div:nth-of-type(3) {
    display: flex;
    font-size: 1.2rem;
    color: #969696;
    font-weight: 500;
  }
`;

export default function Heading({
  step, strong, text, description,
}: {
  step: string;
  strong: string;
  text: string;
  description: string;
}) {
  return (
    <HeadingContainer>
      <div>
        STEP
        {step}
      </div>
      <div>
        <strong>{strong}</strong>
        {text}
      </div>
      <div>{description}</div>
    </HeadingContainer>
  );
}
