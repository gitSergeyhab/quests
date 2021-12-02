import { useEffect, useRef } from 'react';
import { useDispatch } from 'react-redux';

import * as S from './booking-modal.styled';
import { ReactComponent as IconClose } from 'assets/img/icon-close.svg';
import { postOrderAction } from 'store/api-actions';
import { checkOrder } from 'utils/utils';


const CLASS_MODAL = 'CLASS_MODAL';


const BookingModal = ({close}) => {

  const nameRef = useRef(null);
  const phoneRef = useRef(null);
  const memberRef = useRef(null);

  const dispatch = useDispatch();

  const handleModalOffClick = (evt) => {
    const target = evt.target;
    if (target && !target.closest(`.${CLASS_MODAL}`)) {
      close();
    }
  }

  useEffect(() => {
    document.addEventListener('click', handleModalOffClick);
    return function cleanup() {document.removeEventListener('click', handleModalOffClick)}
  })

  const handleFormSubmit = (evt) => {
    evt.preventDefault(evt);
    const name = nameRef.current.value;
    const phone = phoneRef.current.value;
    const peopleCount = memberRef.current.value;

    if (name && phone && peopleCount) {
      if(checkOrder({name, phone, peopleCount})) {
        dispatch(postOrderAction(name, phone, +peopleCount, close ));
      }
    }
  }

  return (
  <S.BlockLayer>
    <S.Modal
    className={CLASS_MODAL}
    >
      <S.ModalCloseBtn
      onClick={close}
      >
        <IconClose width="16" height="16" />
        <S.ModalCloseLabel>Закрыть окно</S.ModalCloseLabel>
      </S.ModalCloseBtn>
      <S.ModalTitle>Оставить заявку</S.ModalTitle>
      <S.BookingForm
        action="https://echo.htmlacademy.ru"
        method="post"
        id="booking-form"
        onSubmit={handleFormSubmit}
      >
        <S.BookingField>
          <S.BookingLabel htmlFor="booking-name">Ваше Имя</S.BookingLabel>
          <S.BookingInput
            type="text"
            id="booking-name"
            name="booking-name"
            placeholder="Имя"
            required
            ref={nameRef}
          />
        </S.BookingField>
        <S.BookingField>
          <S.BookingLabel htmlFor="booking-phone">
            Контактный телефон
          </S.BookingLabel>
          <S.BookingInput
            type="tel"
            id="booking-phone"
            name="booking-phone"
            placeholder="Телефон"
            required
            ref={phoneRef}
          />
        </S.BookingField>
        <S.BookingField>
          <S.BookingLabel htmlFor="booking-people">
            Количество участников
          </S.BookingLabel>
          <S.BookingInput
            type="number"
            id="booking-people"
            name="booking-people"
            placeholder="Количество участников"
            required
            ref={memberRef}
          />
        </S.BookingField>
        <S.BookingSubmit type="submit">Отправить заявку</S.BookingSubmit>
        <S.BookingCheckboxWrapper>
          <S.BookingCheckboxInput
            type="checkbox"
            id="booking-legal"
            name="booking-legal"
            required
          />
          <S.BookingCheckboxLabel
            className="checkbox-label"
            htmlFor="booking-legal"
          >
            <S.BookingCheckboxText>
              Я согласен с{' '}
              <S.BookingLegalLink href="#">
                правилами обработки персональных данных и пользовательским
                соглашением
              </S.BookingLegalLink>
            </S.BookingCheckboxText>
          </S.BookingCheckboxLabel>
        </S.BookingCheckboxWrapper>
      </S.BookingForm>
    </S.Modal>
  </S.BlockLayer>
)};

export default BookingModal;
