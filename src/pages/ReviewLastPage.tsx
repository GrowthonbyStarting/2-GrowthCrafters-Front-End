import { styled } from 'styled-components';

import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import Heading from '../components/common/Heading';
import Title from '../components/form/Title';
import FileInput from '../components/confirm/FileInput';
import ConfirmForm from '../components/confirm/ConfirmForm';
import SubmitButton from '../components/confirm/SubmitButton';

import { FILE_VALUE } from '../constants/keyword';

import useFetchForm from '../hook/useFetchForm';

const Section = styled.section`
  width: 100%;
  min-height: 93vh;
  background-image: url('/images/bg-patent-review.png');
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  padding-top: 3.8rem;
`;

const Container = styled.div`
  .wide {
    position: absolute;
    left: 0;
    top: 5rem;
    transform: translateX(-10rem);
  }

  .narrow {
    display: none;
    @media screen and (max-width: 768px){
      display: flex;
      align-items: center;
      justify-content: center;
      margin-inline: auto;
      width: 300px;
      height: auto;
      padding-top: 3rem;

      img {
        display: flex;
        object-fit: contain;
        width: 37rem;
        height: 5rem;
      }
    }
  }

  max-width: 724px;
  margin-inline: auto;
  width: 100%;
  height: 100%;
  padding-top: 3.8rem;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  @media screen and (max-width: 768px){
    padding: 1.5rem;
  }
`;

const FileContainer = styled.div`
  margin-top: 3rem;
  background-color: #fff;
  border-radius: 8px;
  box-shadow: 0px 0px 12px 0px rgba(0, 0, 0, 0.05);
  padding: 2rem;
  width: 60rem;
  height: 100%;
  @media screen and (max-width: 768px){
    width: 100%;
  }

  input[type="file"] {
    display: none;
  }

  label {
    cursor: pointer;
    display: flex;
    width: 100%;
    height: 10rem;
    border: 1px dashed var(--gray-3, #9EA9BE);;
    background-color: #f4f6fa;
    border-radius: 4px;
    font-size: 12px;
    font-weight: 500;
    padding: 1.7rem 7rem;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    img {
      display: flex;
      width: 2.4rem;
      height: 2.4rem;
      margin-bottom: .5rem;
    }
    span {
      display: flex;
      text-align : center;
      color: #9ea9be;
    }
  }
  `;

const ButtonContainer = styled.div`
  width: 29rem;
  height: 4rem;
  margin-top: 2.5rem;
  margin-bottom: 10rem;
  background-color: #424C60;
  border-radius: 8px;
  display: flex;
  
  button{
    img {
      display: flex;
      margin-right: .4rem;
    }
    
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
    cursor: pointer;
    color: #fff;
    font-size: 1.6rem;
    font-weight: 700;
    font-family: 'Pretendard';
  }
`;

const StyledDiv = styled.div`
  display: flex;
  width: 60rem;
  margin-top: 1rem;
  font-weight: 600;
  color: rgba(246, 0, 0, 0.80);
  font-size: 1rem;
  @media screen and (max-width: 768px){
    width: 100%;
  }
`;

export default function ReviewLastPage() {
  const [submitedFileName, setSubmitedFileName] = useState('');
  const [file, setFile] = useState<File | null>(null);
  const [modal, setModal] = useState(false);
  const [toggle, setToggle] = useState(true);
  const navigate = useNavigate();

  const handleConfirm = () => {
    const category = (window.sessionStorage.getItem('category') || '');
    if (category === '') {
      // eslint-disable-next-line no-alert
      alert('특허 등록 가능성 검토 신청서가 이미 제출되었어요! 홈 화면으로 이동합니다 :)');
      navigate('/');
      return;
    }
    if (!modal) {
      setModal(true);
      return;
    }
    setModal(false);
  };

  const handleSubmit = () => {
    if (!file) {
      useFetchForm();
      navigate('/patent-review/complete');
      sessionStorage.clear();
      return;
    }
    useFetchForm(file);
    navigate('/patent-review/complete');
    sessionStorage.clear();
  };

  return (
    <Section>
      <Container>
        <img className="wide" src="/images/status-4.png" alt="4" />
        <Heading step="CONFIRM" strong="" text="추가 제출할 파일이 있다면 첨부해 주세요!" description="파일이 없으시면 검토 신청서만 마지막으로 확인해주세요 :)" />
        <div className="narrow">
          <img src="/images/status4-x.png" alt="status" />
        </div>
        {!modal ? (
          <>
            <FileContainer>
              <Title keywordData={FILE_VALUE} toggle={toggle} setToggle={setToggle} />
              {toggle && (
                <FileInput
                  submitedFileName={submitedFileName}
                  setFile={setFile}
                  setSubmitedFileName={setSubmitedFileName}
                />
              )}
            </FileContainer>
            <StyledDiv>
              * 이전 페이지로 돌아가면 업로드 한 파일이 사라지니 주의해주세요!
            </StyledDiv>
            <ButtonContainer>
              <button type="button" onClick={handleConfirm}>
                <img src="/images/file-bookmark.svg" alt="bookmark" />
                특허 등록 가능성 검토 신청서 확인하기
              </button>
            </ButtonContainer>
          </>
        ) : (
          <ConfirmForm
            handleConfirm={handleConfirm}
          />
        )}
        <SubmitButton handleSubmit={handleSubmit} />
      </Container>
    </Section>
  );
}
