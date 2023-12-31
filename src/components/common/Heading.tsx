import { styled } from 'styled-components';

const HeadingContainer = styled.div`
  display: flex;
  width: 100%;
  height: 7rem;
  align-items: center;
  flex-direction: column;
  justify-content: space-between;
  @media screen and (max-width: 350px){
    padding-inline: .8rem;
  }
  div{
    text-align: center;
    @media screen and (max-width: 350px){
      margin-bottom: 1rem;
    }
  }

  div:nth-of-type(1) {
    display: flex;
    font-size: 1.4rem;
    font-weight: bold;
  }

  div:nth-of-type(2) {
    display: flex;
    font-size: 2.4rem;
    font-weight: bold;
    @media screen and (max-width: 768px){
      font-size: 2rem;
    }
    @media screen and (max-width: 350px){
      font-size: 1.6rem;
    }

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
