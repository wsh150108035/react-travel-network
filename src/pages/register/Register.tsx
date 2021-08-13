import React from 'react';
import { UserLayout } from '../../layouts/userLayout/UserLayout'
import { RegisterForm } from './RegisterForm';

const Register: React.FC = () => {
  return (
    <UserLayout>
      <RegisterForm />
    </UserLayout>
  )
}
export default Register