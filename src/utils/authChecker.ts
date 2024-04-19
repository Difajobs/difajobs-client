import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const AuthChecker: React.FC = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const checkTokenValidity = () => {
      const token = localStorage.getItem("token");
      if (!token) {
        navigate("/");
      }
    };
    checkTokenValidity();
    const interval = setInterval(checkTokenValidity, 1000);
    return () => clearInterval(interval);
  }, [navigate]);

  return null;
};

export default AuthChecker;
