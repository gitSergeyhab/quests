import * as S from './page-heading.styled';

const PageHeading = ({ children, ...props } : {children: React.ReactNode}) => (
  <S.PageHeading {...props}>{children}</S.PageHeading>
);

export default PageHeading;
