import { styled } from 'styled-components';
import { useForm } from 'react-hook-form';
import { useLocation, useNavigate } from 'react-router-dom';
import { useSessionStorage } from 'usehooks-ts';

import UserInfo from './UserInfo';

import MoveButton from '../common/MoveButton';

import { userInfo } from '../../types/inputForm';

const Container = styled.form`
  display: flex;
  align-items: center;
  flex-direction: column;
  margin-top: 1.4rem;
`;

export default function UserInfoForm() {
  const location = useLocation();
  const link = `${location.pathname}/category`;
  const navigate = useNavigate();

  const { handleSubmit, control } = useForm<userInfo>();
  const [userInfoObj, setUserInfoObj] = useSessionStorage<userInfo>('user-info', {
    이름: '', 이메일: '', 전화번호: '',
  });

  const onSubmit = (data:userInfo) => {
    setUserInfoObj(data);
    navigate(`${link}`);
  };

  return (
    <Container onSubmit={handleSubmit(onSubmit)}>
      <UserInfo control={control} userInfoObj={userInfoObj} />
      <MoveButton type="submit" link={link} disabled={false} />
    </Container>
  );
}
