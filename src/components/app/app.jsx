import { ThemeProvider } from 'styled-components';
import {
  Switch,
  Route,
  BrowserRouter as Router,
} from 'components/common/common';

import * as S from './app.styled';
import Contacts from 'components/contacts/contacts';
import DetailedQuest from 'components/detailed-quest/detailed-quest';
import Home from 'components/home/home';
import NotFoundPage from 'components/not-found-page/not-found-page';
import { appTheme } from './common';
import { AppRoute } from 'const';


const App = () => (
  <ThemeProvider theme={appTheme}>
    <S.GlobalStyle />
    <Router>
      <Switch>
        <Route exact path={AppRoute.Quest}>
          <DetailedQuest />
        </Route>
        <Route exact path={AppRoute.Contacts}>
          <Contacts />
        </Route>
        <Route exact path={AppRoute.Home}>
          <Home />
        </Route>
        <Route>
          <NotFoundPage/>
        </Route>
      </Switch>
    </Router>
  </ThemeProvider>
);

export default App;
