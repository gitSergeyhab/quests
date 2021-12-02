import logo from 'assets/img/logo.svg';
import { AppRoute } from 'const';
import { useState } from 'react';
import { useHistory } from 'react-router';
import * as S from './header.styled';


const HeaderName = {
  Home: {name: 'Квесты', link: AppRoute.Home},
  Beginner: {name: 'Новичкам', link: '#'},
  Reviews: {name: 'Отзывы', link: '#'},
  Events: {name: 'Акции', link: '#'},
  Contacts: {name: 'Контакты', link: AppRoute.Contacts},
};


const NawItem = ({item, page, onClick}) => {
  return (
    <S.LinkItem onClick={onClick}>
      <S.Link $isActiveLink={item.name === page} to={item.link}>
        {item.name}
      </S.Link>
    </S.LinkItem>
  )
};


const Header = () => {

  const history = useHistory();
  const path = history.location.pathname;
  const [page, setPage] = useState(path === AppRoute.Contacts ? HeaderName.Contacts.name : HeaderName.Home.name);

  const navigation = Object.values(HeaderName).map((item) => <NawItem item={item} page={page} key={item.name} onClick={() => setPage(item.name)}/>);

  return (
  <S.StyledHeader>
    <S.HeaderWrapper>
      <S.Logo>
        <S.Image
        src={logo} alt="Логотип Escape Room" width="134" height="50"
        />
      </S.Logo>

      <S.Navigation>
        <S.Links>
          {navigation}
        </S.Links>
      </S.Navigation>
      <S.Phone href="tel:88003335599">8 (800) 333-55-99</S.Phone>
    </S.HeaderWrapper>
  </S.StyledHeader>
)};

export default Header;
