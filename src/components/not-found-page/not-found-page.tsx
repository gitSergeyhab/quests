import { Link } from 'react-router-dom';
import { Footer, Header } from 'components/common/common';
import { AppRoute } from 'const';


const NotFoundPage = () =>  (
  <>
    <Header/>
    <div style={{paddingTop: '20%', textAlign: 'center', fontSize: '2.1em'}}>
      <h3>Page Not Found</h3>
      <h3><Link to={AppRoute.Home} style={{color: '#F2890F', textDecorationLine: 'underline', fontSize: '1.3em'}}>Home Page</Link></h3>
    </div>
    <Footer/>
  </>);

export default NotFoundPage;
