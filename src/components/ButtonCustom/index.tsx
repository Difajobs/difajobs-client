// ButtonLogin.tsx
import React from 'react';
import { Button } from '@mui/material';
import { Link } from 'react-router-dom';
import styles from './Button.module.scss'

interface ButtonLoginProps {
  buttonText: string;
  to?: string;
  onClick: () => void
  id: string
}

const ButtonCustom: React.FC<ButtonLoginProps> = ({ buttonText, to, onClick, id }) => {
  return (
    <Button
      id={id}
      className={styles.button}
      component={to ? Link : 'button'}
      to={to}
      onClick={onClick}
      variant="contained"
      fullWidth
    >
      {buttonText}
    </Button>
  );
};

export default ButtonCustom;
