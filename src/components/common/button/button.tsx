import React from 'react';
import * as S from './button.styled';

const Button = ({ children, ...props } : {children: React.ReactNode}) => (
  <S.Button {...props}>{children}</S.Button>
);

export default Button;
