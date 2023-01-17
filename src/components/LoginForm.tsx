import { useState } from 'react';
import { API_URLS, BASE_URL } from '../app/apiUrls';
import { UserData } from '../app/interfaces';
import { Button } from './Button';
import { InputElement } from './InputElement';

export const LoginForm = () => {
  const [user, setUser] = useState<UserData>({ username: '', password: '' });

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const response = await fetch(BASE_URL + API_URLS.login, {
      headers: {
        'Content-Type': 'application/json',
      },
      method: 'POST',
      body: JSON.stringify(user),
    });
    const { key } = await response.json();
    localStorage.setItem('token', key);
  };

  return (
    <form onSubmit={handleSubmit}>
      <InputElement value={user.username} name='username' label={'Username'} setValue={setUser} />
      <InputElement
        value={user.password}
        name='password'
        type={'password'}
        label={'Password'}
        setValue={setUser}
      />
      <Button primary type='submit' disabled={false}>
        Log in
      </Button>
    </form>
  );
};
