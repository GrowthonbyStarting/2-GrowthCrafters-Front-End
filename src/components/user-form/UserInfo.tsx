import { styled } from 'styled-components';
import { Controller } from 'react-hook-form';
import { userInfo } from '../../types/inputForm';
import Input from './Input';
import USER_INFO_INPUT from '../../constants/userInfoForm';

const Container = styled.div`
  background-color: #fff;
  width: 60rem;
  margin-bottom: 2.8rem;
  display: flex;
  flex-direction: column;
  border-radius: 8px;
  min-height: 35rem;
  box-shadow: 0px 0px 12px 0px rgba(0, 0, 0, 0.05);
`;

export default function UserInfo({ control, userInfoObj }: {
  control: any;
  userInfoObj: userInfo;
}) {
  const userInfoValue = Object.values(userInfoObj);
  const userInfoKey = Object.keys(userInfoObj);
  return (
    <Container>
      {userInfoKey.map((name, index) => {
        const inputData = USER_INFO_INPUT[name];
        return (
          <Controller
            key={name}
            control={control}
            defaultValue={userInfoValue[index]}
            name={name}
            render={({ field: { onChange, value } }) => (
              <Input
                name={inputData.koreanName}
                placeholder={inputData.placeholder}
                value={value}
                onChange={onChange}
              />
            )}
          />
        );
      })}
    </Container>
  );
}
