import * as S from './page-subtext.styled';

const PageSubtext = ({ children, ...props } : {children: React.ReactNode}) => (
  <S.PageSubtext {...props}>{children}</S.PageSubtext>
);

export default PageSubtext;
