import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const AuthChecker: React.FC = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const checkTokenValidity = () => {
      const token = localStorage.getItem('token');
      if (!token) {
        navigate('/');
      } else {
        // This is just a basic example, you should implement your own token validation logic
        navigate('/dashboard');
      }
    };
    checkTokenValidity();
    const interval = setInterval(checkTokenValidity, 1000); // check every second
    return () => clearInterval(interval);
  }, [navigate]);

  return null; 
};

export default AuthChecker;
