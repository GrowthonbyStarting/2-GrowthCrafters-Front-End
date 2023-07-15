import { styled } from 'styled-components';

const ThumbnailContainer = styled.div`
  background-image: url('/images/bg1-mainback.png');
  background-size: contain;
  background-repeat: repeat-x;
  height: 100%;
  max-height: 64rem;

  @media screen and (max-width: 768px){
    background-image: contain;
    width: 100%;
    height: 100%;
  }
  
  
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

    @media screen and (max-width: 768px){
      width: 100%;
      padding-top: 5rem;
      background-size: contain;
    }
    
    
    h1 {
      display: flex;
      font-size: 4rem;
      font-weight: 500;
      color: #FFF;
      text-align: center;
      margin-bottom: 1.5rem;
      @media screen and (max-width: 768px){
        font-size: 2.5rem; 
        margin-bottom: 1rem;
      }
    }
  
    img {
      display: flex;
      width: 23.6rem;
      height: 7.7rem;
      @media screen and (max-width: 768px){
        width: 13rem;
        height: auto;
      }
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
        width: 20rem;
        height: auto;
        max-width: 48rem;
        max-height: 35rem;
        @media screen and (max-width: 768px){
        width: 10rem;
        height: auto;
        }
      }

      a {
        img {
          position: absolute;
          top: 0;
          transform: translate(-20px);
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
