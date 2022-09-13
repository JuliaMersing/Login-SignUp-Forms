import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useToast } from 'react-native-toast-notifications';
import { newUser } from '../redux/registerSlice';
import { verifyEmail, verifyPassword } from '../utils/validations';
import Input from './Input';
import Checkbox from './Checkbox';
import Header from './Header';
import Button from './Button';

type FormComponentProps ={
  isSignUp?: boolean;
}

const FormComponent = ({ isSignUp }: FormComponentProps) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmedPassword, setConfirmedPassword] = useState('');
  const [remember, setRemember] = useState(true);
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [confirmedPasswordError, setConfirmedPasswordError] = useState('');
  const validLogin = passwordError === '' && emailError === '' && confirmedPasswordError === '';

  const dispatch = useDispatch();

  const toast = useToast();

  const handleEmail = (event: any): void => {
    setEmail(event.target.value);
  };

  const handlePassword = (event: any): void => {
    setPassword(event.target.value);
  };

  const handleConfirmedPassword = (event: any): void => {
    setConfirmedPassword(event.target.value);
  };

  const handleRememberChange = (event: any): void => {
    const { checked } = event.target;
    setRemember(checked);
  };

  const handleEmailOnBlur = (event: any): void => {
    const error = verifyEmail(event.target.value);
    setEmailError(error);
  };

  const handlePasswordOnBlur = (event: any): void => {
    const error = verifyPassword(event.target.value);
    setPasswordError(error);
  };

  const handleConfirmedPasswordOnBlur = (event: any): void => {
    const error = event.current.target;
    setConfirmedPasswordError(error);
  };

  const onFormSubmit = (event: any): void => {
    event.preventDefault();
    if (!validLogin) {
      toast.show('Form has errors', {
        type: 'danger',
        placement: 'top',
      });
      return;
    }
    dispatch(newUser({
      email,
      password,
    }));
  };

  return (
    <div className="min-h-full flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8">
        { isSignUp
        ? (
          <Header
            heading="Sign Up to create an account"
            paragraph="Already have an account?"
            href="/"
            linkParagraph="Login"
          />
)
            : (
              <Header
                heading="Login"
                paragraph="Don't have an account?"
                href="/signUp"
                linkParagraph="SignUp"
              />
)}

        <form
          className="mt-8 space-y-6"
          action="#"
          method="POST"
          onSubmit={onFormSubmit}
        >
          <input type="hidden" name="remember" value="true" />
          <div className="rounded-md shadow-sm -space-y-px">
            <Input
              label="Email"
              id="email"
              type="email"
              value={email}
              placeholder="Email"
              onChange={handleEmail}
              onBlur={handleEmailOnBlur}
              error={emailError}
            />
            <Input
              label="Password"
              id="password"
              type="password"
              value={password}
              placeholder="Password"
              onChange={handlePassword}
              onBlur={handlePasswordOnBlur}
              error={passwordError}
            />
            { isSignUp
            && (
            <Input
              label="Password"
              id="password"
              type="password"
              value={confirmedPassword}
              placeholder="Confirm password"
              onChange={handleConfirmedPassword}
              onBlur={handleConfirmedPasswordOnBlur}
              error={confirmedPasswordError}
            />
) }
          </div>
          <div className="flex items-center justify-between">
            <Checkbox onChange={handleRememberChange} check={remember} />
            <div className="text-sm">
              {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
              <a href="#" className="font-medium text-indigo-600 hover:text-indigo-500"> Forgot your password? </a>
            </div>
          </div>
          <Button> Sign in </Button>
        </form>
      </div>
    </div>
  );
};

export default FormComponent;
