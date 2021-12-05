import { useState } from 'react';
import { useHistory } from 'react-router';

import logo from 'assets/img/logo.svg';
import { AppRoute } from 'const';
import * as S from './header.styled';


const ACTIVE_COLOR = '#F2890F';

const HeaderName = {
  Home: {Name: 'Квесты', Link: AppRoute.Home},
  Beginner: {Name: 'Новичкам', Link: '#'},
  Reviews: {Name: 'Отзывы', Link: '#'},
  Events: {Name: 'Акции', Link: '#'},
  Contacts: {Name: 'Контакты', Link: AppRoute.Contacts},
} as const;

type NawItemType = {item: {Name: string, Link: string}, page: string, onClick: () => void};

const NawItem = ({item, page, onClick} : NawItemType) => {
  const btnStyle = item.Name === page ? {color: ACTIVE_COLOR} : {};
  return (
    <S.LinkItem
    style={btnStyle}
     onClick={onClick}>
      <S.Link
      style={btnStyle}
      to={item.Link}>
        {item.Name}
      </S.Link>
    </S.LinkItem>
  )};


const Header = () => {

  const history = useHistory();
  const path = history.location.pathname;
  const [page, setPage] = useState<string>(path === AppRoute.Contacts ? HeaderName.Contacts.Name : HeaderName.Home.Name);

  const navigation = Object.values(HeaderName).map((item) => <NawItem item={item} page={page} key={item.Name} onClick={() => setPage(item.Name)}/>);

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
