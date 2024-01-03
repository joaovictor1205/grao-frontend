/* eslint-disable react/jsx-no-constructed-context-values */
import { createContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { notification } from 'antd';
import { IAuthProvider, ContextType, UserType } from '../../types/user';
import api from '../../api';

export const AuthContext = createContext<ContextType>({} as ContextType);

export function AuthProvider({ children }: IAuthProvider) {
  const [user, setUser] = useState<UserType | null>();
  const navigate = useNavigate();
  const [notificationDispatch, contextHolder] = notification.useNotification();

  const openNotification = () => {
    notificationDispatch.error({
      message: 'Erro',
      description: 'Usuário não encontrado',
    });
  };

  useEffect(() => {
    const userFromLocalStorage = localStorage.getItem('user');

    if (userFromLocalStorage) setUser({ email: userFromLocalStorage });
  }, []);

  async function authenticate(email: string, password: string) {
    api.login('/login', {
      email,
      password,
    })
      .then((res) => {
        setUser(res);
        localStorage.setItem('user', JSON.stringify(email));
        navigate('/restaurants');
      })
      .catch(openNotification);
  }

  async function logout() {
    api.logout('/logout')
      .then(() => {
        setUser(null);
        localStorage.removeItem('user');
        navigate('/');
      })
      .catch(openNotification);
  }

  return (
    <AuthContext.Provider value={{ ...user, authenticate, logout }}>
      {contextHolder}
      { children }
    </AuthContext.Provider>
  );
}
