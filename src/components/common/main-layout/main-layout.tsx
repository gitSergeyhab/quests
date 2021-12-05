import { Header, Footer } from 'components/common/common';

const MainLayout = ({ children } : {children : any}) => (
  <>
    <Header />
    {children}
    <Footer />
  </>
);

export default MainLayout;
