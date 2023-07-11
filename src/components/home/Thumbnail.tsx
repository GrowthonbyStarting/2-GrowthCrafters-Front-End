import { styled } from 'styled-components';

const ThumbnailContainer = styled.div`
  background-image: url('/images/bg1-mainback.png');
  background-size: contain;
  background-repeat: repeat-x;
  height: 90vh;
  max-height: 64rem;

  
  div:first-child {
    max-width: 1024px;
    height: 100%;
    background-image: url('/images/bg1-main.png');
    background-repeat: no-repeat;
    background-position: center;
    background-size: contain;
    margin-inline: auto;
    display: flex;
    flex-direction: column;
    padding-top: 10rem;
    align-items: center;
    position: relative;
    
    h1 {
      display: flex;
      font-size: 4rem;
      font-weight: 500;
      color: #FFF;
      text-align: center;
      margin-bottom: 1.5rem;
    }
  
    img {
      display: flex;
    }

    div {
      display: flex;
      flex-direction: row;
      width: 50%;
      height: 100%;
      align-items: flex-end;
      justify-content: center;
      position: relative;
      
      img {
        display: flex;
        max-width: 48rem;
        max-height: 35rem;
      }

      a {
        img {
          position: absolute;
          top: 0;
        }
      }
    }
  }
`;

export default function Thumbnail() {
  return (
    <ThumbnailContainer>
      <div>
        <h1>
          평범한 생각이
          <br />
          {' '}
          놀라운 발견이 되는 곳,
        </h1>
        <img src="/images/logo-white.svg" alt="logo" />
        <div>
          <img src="/images/god1.svg" alt="god1" />
          <a href="/patent-review">
            <img src="/images/speech.svg" alt="speech" />
          </a>
        </div>
      </div>
    </ThumbnailContainer>
  );
}
