import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
import { useHistory } from 'react-router-dom';
import { requestLogin } from '@modules/user';
import { CommonInput, CommonButton } from '../../styles';

const LoginWrapper = styled.div`
  width: 500px;
  margin: 0 auto;
  margin-top: 120px;
  @media (max-width: 650px) {
    width: 90%;
  }
`;

const SubButton = styled.button`
  float: right;
  border: none;
  background: #fff;
  color: #777;
  font-size: 16px;
`;

const WarningMessage = styled.div`
  font-size: 14px;
  color: #ff395b;
  margin-bottom: 4px;
`;

WarningMessage.displayName = 'WarningMessage';

export default function Login() {
  const history = useHistory();
  const dispatch = useDispatch();

  const [loginInfo, setLoginInfo] = useState({ username: '', password: '' });
  const loginError = useSelector((state) => state.userReducer.loginError);
  const [loginWarning, setLoginWarning] = useState(false);

  const currentUser = useSelector((state) => state.userReducer.currentUser);

  useEffect(() => {
    if (loginError) {
      setLoginWarning(true);
    }
  }, [loginError]);

  useEffect(() => {
    if (!currentUser) return;
    if (!currentUser.question_history) history.push('/select-questions');
    else history.push('/');
  }, [currentUser]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setLoginInfo((prev) => ({ ...prev, [name]: value }));
  };

  const onClickSubmitButton = () => {
    dispatch(requestLogin(loginInfo));
  };

  const onKeySubmit = (e) => {
    if (e.key === 'Enter') {
      dispatch(requestLogin(loginInfo));
    }
  };

  const onClickSignupButton = () => {
    history.push('/signup');
  };

  const onClickLostPassword = () => {
    history.push('/lost-password');
  };

  return (
    <LoginWrapper>
      <h1>로그인</h1>
      <CommonInput
        id="username-input"
        name="username"
        value={loginInfo.username}
        placeholder="닉네임"
        onChange={handleChange}
        onKeyDown={onKeySubmit}
      />
      <CommonInput
        id="password-input"
        name="password"
        value={loginInfo.password}
        placeholder="비밀번호"
        type="password"
        onChange={handleChange}
        onKeyDown={onKeySubmit}
      />
      {loginWarning && (
        <WarningMessage id="login-error-message">
          이메일 인증이 완료되지 않았거나 잘못된 회원 정보입니다.
        </WarningMessage>
      )}
      <CommonButton
        id="submit-button"
        disabled={loginInfo.username === '' || loginInfo.password === ''}
        margin="20px 0"
        onClick={onClickSubmitButton}
      >
        로그인
      </CommonButton>
      <SubButton
        type="button"
        id="signup-button"
        margin="5px 0"
        onClick={onClickLostPassword}
      >
        비밀번호를 잊어버렸어요
      </SubButton>
      <SubButton
        type="button"
        id="signup-button"
        margin="40px 0"
        onClick={onClickSignupButton}
      >
        회원가입
      </SubButton>
    </LoginWrapper>
  );
}
