import * as S from './container.styled';

const Container = ({ children, ...props } : {children: React.ReactNode}) => (
  <S.Container {...props}>{children}</S.Container>
);

export default Container;
