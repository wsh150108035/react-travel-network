import React from 'react';
import { UserLayout } from '../../layouts/userLayout/UserLayout'
import { SignInForm } from './SignInForm'

const SignIn: React.FC = (props) => {
  console.log(props)
  return (
    <UserLayout>
      <SignInForm />
    </UserLayout>
  )
}
export default SignIn