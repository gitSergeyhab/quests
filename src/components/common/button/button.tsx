import React from 'react';
import * as S from './button.styled';

const Button = ({ children, ...props } : {children: any}) => (
  <S.Button {...props}>{children}</S.Button>
);

export default Button;
