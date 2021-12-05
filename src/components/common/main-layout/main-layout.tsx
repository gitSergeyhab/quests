import { Header, Footer } from 'components/common/common';

const MainLayout = ({ children } : {children : React.ReactNode}) => (
  <>
    <Header />
    {children}
    <Footer />
  </>
);

export default MainLayout;
