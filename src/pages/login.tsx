import React from 'react';
import Header from '../components/Header';
import Input from '../components/Input';
import Checkbox from '../components/Checkbox';
import Button from '../components/Button';

const Login = () => (
  <div className="min-h-full flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
    <div className="max-w-md w-full space-y-8">
      <Header heading="Sign in" paragraph="Dont have an account" href="/signUp" linkParagraph="Sign Up" />
      <form className="mt-8 space-y-6" action="#" method="POST">
        <input type="hidden" name="remember" value="true" />
        <div className="rounded-md shadow-sm -space-y-px">
          <Input label="Email" placeholder="Email" id="email" type="email" />
          <Input label="Password" placeholder="Password" id="password" type="password" />
        </div>
        <div className="flex items-center justify-between">
          <Checkbox />
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

export default Login;
