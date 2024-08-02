import React, { createContext } from 'react';
import axios from 'axios';
import { useNavigate, useLocation } from 'react-router';
import { useCookies } from '../hooks/useCookies'; // Импортируйте хук

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [authToken, setAuthToken, removeAuthToken] = useCookies(
    'accessToken',
    null,
  ); // Используйте хук
  const navigate = useNavigate();
  const location = useLocation();

  const login = async (email, password) => {
    try {
      const response = await axios.get(
        `${process.env.REACT_APP_API_URL}/api/auth`,
        {
          params: { email, password },
          headers: {
            'Content-Type': 'application/json',
            Accept: 'application/json',
          },
        },
      );
      const { data } = response;
      if (data.token) {
        setAuthToken(data.token);
        const from = location.state?.from?.pathname || '/';
        navigate(from, { replace: true });
      } else {
        alert('Неверный email или пароль');
      }
    } catch (error) {
      alert('Произошла ошибка при авторизации');
    }
  };

  const logout = () => {
    removeAuthToken();
    navigate('/login');
  };

  return (
    <AuthContext.Provider value={{ authToken, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
