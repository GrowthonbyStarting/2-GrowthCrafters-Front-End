import { useForm } from 'react-hook-form';
import { useLocation, useNavigate } from 'react-router-dom';
import { styled } from 'styled-components';
import { useSessionStorage } from 'usehooks-ts';
import MoveButton from '../common/MoveButton';
import UserInfo from './UserInfo';

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

  const { handleSubmit, control } = useForm();
  const [userInfoObj, setUserInfoObj] = useSessionStorage('user-info', {
    name: '', email: '', phone: '',
  });

  const onSubmit = (data: any) => {
    console.log(data);
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
