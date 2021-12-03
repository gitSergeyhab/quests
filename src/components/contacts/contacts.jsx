import { YMaps, Map, Placemark } from 'react-yandex-maps';
import { MainLayout, PageTitle, PageSubtext } from 'components/common/common';
import * as S from './contacts.styled';


const COORDINATES = [59.96835, 30.3173];
const TITLE = 'Escape Room';
const ZOOM = 17;
const PRESET = 'islands#blackStretchyIcon';
const COLOR = 'black';


const TheMap = () => (
  <YMaps>
    <div >
      <Map
        defaultState={{ center: COORDINATES, zoom: ZOOM}}
        style={{width: '649px', height: '336px'}}>
          <Placemark
            geometry={COORDINATES}
            properties={{iconContent: TITLE}}
            options={{preset: PRESET, iconColor: COLOR}}
          />
        </Map>
    </div>
  </YMaps>
);


const Contacts = () => (
  <MainLayout>
    <S.Main>
      <S.ContentWrapper>
        <S.PageHeading>
          <PageTitle>Контакты</PageTitle>
          <PageSubtext>квесты в Санкт-Петербурге</PageSubtext>
        </S.PageHeading>

        <S.Contacts>
          <S.ContactsList>
            <S.ContactTitle>Адрес</S.ContactTitle>
            <S.ContactValue>
              <S.ContactAddress>
                Санкт-Петербург,
                <br />
                Набережная реки Карповка, д 5
              </S.ContactAddress>
            </S.ContactValue>

            <S.ContactTitle>Режим работы</S.ContactTitle>
            <S.ContactValue>Ежедневно, с 9:00 до 20:00</S.ContactValue>

            <S.ContactTitle>Телефон</S.ContactTitle>
            <S.ContactValue>
              <S.ContactLink href="tel:8 (800) 333-55-99">
                8 (800) 333-55-99
              </S.ContactLink>
            </S.ContactValue>

            <S.ContactTitle>E-mail</S.ContactTitle>
            <S.ContactValue>
              <S.ContactLink href="mailto:info@escape-room.ru">
                info@escape-room.ru
              </S.ContactLink>
            </S.ContactValue>
          </S.ContactsList>

          <S.ContactsMap>
            <TheMap/>
          </S.ContactsMap>
        </S.Contacts>
      </S.ContentWrapper>
    </S.Main>
  </MainLayout>
);

export default Contacts;
