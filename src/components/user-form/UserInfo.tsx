import { styled } from 'styled-components';
import { Control, Controller } from 'react-hook-form';
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

type NameType = '이름' | '이메일' | '전화번호';

export default function UserInfo({ control, userInfoObj }: {
  control: Control<userInfo>;
  userInfoObj: userInfo;
}) {
  const userInfoValue = Object.values(userInfoObj);
  const userInfoKey: NameType[] = Object.keys(userInfoObj) as NameType[];
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
                data={inputData}
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
