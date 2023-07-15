import { styled } from 'styled-components';

const PromotionText = styled.div`
  width: 100%;
  height: 100%;
  background-image: url('/images/bg2-main.png');
  background-size: cover;
  background-position: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 5.4rem;
  padding-bottom: 8.7rem;
  justify-content: space-around;
  @media screen and (max-width: 768px){
    padding-block: 3.5rem;
  }

  div:first-child {
    display: flex;
    background-color: #FFF;
    border-radius: 50%;
    width: 4rem;
    height: 4rem;
    justify-content: center;
    margin-bottom: 2rem;
    @media screen and (max-width: 768px){
      width: 3.5rem;
      height: 3.5rem;
      margin-bottom: 1.5rem;
    }
  }

  div:last-child {
    display: flex;
    font-size: 2rem;
    font-weight: 600;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.6;
    text-align: center;
    color: #fff;
    @media screen and (max-width: 768px){
      font-size: 1.4rem;
    }
  }
`;

export default function Banner() {
  return (
    <PromotionText>
      <div>
        <img src="/images/idea.svg" alt="idea" />
      </div>
      <div>
        번뜩 생각난 기발한 내 아이디어,
        <br />
        특허 가능성이 있을지, 비용은 얼마일지 고민중이신가요?
        <br />
        특허의 신에서 쉽고 간편하게, 무료로 가능성을 검토받아보세요!
      </div>
    </PromotionText>
  );
}
