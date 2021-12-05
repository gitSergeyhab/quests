import * as S from './page-title.styled';

const PageTitle = ({ children, ...props } : {children: React.ReactNode}) => (
  <S.PageTitle {...props}>{children}</S.PageTitle>
);

export default PageTitle;
