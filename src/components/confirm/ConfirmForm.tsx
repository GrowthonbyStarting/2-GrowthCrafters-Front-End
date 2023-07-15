import { styled } from 'styled-components';
import ReadOnlyInput from '../user-form/ReadOnlyInput';
import CATEGORY from '../../constants/category';
import { Category } from '../../types/SubmitReviewForm';

const ConfirmFormContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-top: 1.3rem;
  margin-bottom: 10rem;
  align-items: center;
  @media screen and (max-width: 768px){
    width: 100%; 
    margin-bottom: 5rem;
  }
`;

const Header = styled.div`
  img {
    margin-right: .4rem;
    width: 1.6rem;
    height: 1.6rem;
    display: flex;
  }
  
  width: 52rem;
  height: 4rem;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #424C60;
  border-radius: 8px 8px 0px 0px;
  color: #fff;
  font-size: 1.6rem;
  font-weight: 700;

  @media screen and (max-width: 768px){
    width: 100%;
  }

`;

const Form = styled.div`
  width: 100%;
  height: 100%;
  padding-inline: 2rem;
  background-color: #fff;
  border-radius: 8px;
  box-shadow: 0px 0px 12px 0px rgba(0, 0, 0, 0.05);
  padding-bottom: 2rem;
  
  h2{
    margin-top: 2rem;
    color: #2E78F5;
    font-size: 1.8rem;
    font-weight: 700;
    @media screen and (max-width: 768px){
      font-size: 1.6rem;
    }
  }
`;

const Button = styled.button`
  width: 8rem;
  height: 3rem;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 8px;
  font-family: 'Pretendard';
  font-weight: 600;
  background-color: white;
  margin-top: 3rem;
`;

export default function ConfirmForm({ handleConfirm }:{
  handleConfirm: () => void;
}) {
  const reviewInput = JSON.parse(window.sessionStorage.getItem('review-input') || '');
  const userInfo = JSON.parse(window.sessionStorage.getItem('user-info') || '');
  const category: Category = JSON.parse(window.sessionStorage.getItem('category') || '').split('.').shift();
  const userInfoKey = Object.keys(userInfo);
  const reviewInputKey = Object.keys(reviewInput);
  return (
    <ConfirmFormContainer>
      <Header>
        <img src="/images/file-bookmark.svg" alt="file" />
        특허 등록 가능성 검토 신청서
      </Header>
      <Form>
        <h2>1. 회신받을 사람에 대한 정보</h2>
        {userInfoKey.map((key: string) => (
          <ReadOnlyInput key={key} title={key} value={userInfo[key]} />
        ))}
        <h2>2. 아이디어 분야</h2>
        <ReadOnlyInput title="" value={CATEGORY[category] || ''} />
        <h2>3. 아이디어에 대한 간략한 설명</h2>
        {reviewInputKey.map((key) => (
          <ReadOnlyInput key={key} title={key} value={reviewInput[key]} />
        ))}
      </Form>
      <Button type="button" onClick={handleConfirm}>닫기</Button>
    </ConfirmFormContainer>
  );
}
