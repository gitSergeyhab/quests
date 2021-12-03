import * as S from './home.styled';
import { MainLayout, PageTitle, PageHeading, PageSubtext } from 'components/common/common';
import { QuestsCatalog } from './components/components';


const Home = () => (
  <MainLayout>
    <S.Main forwardedAs="main">
      <PageHeading>
        <PageTitle>Выберите тематику</PageTitle>
        <PageSubtext>квесты в Санкт-Петербурге</PageSubtext>
      </PageHeading>
      <QuestsCatalog />
    </S.Main>
  </MainLayout>
);

export default Home;
