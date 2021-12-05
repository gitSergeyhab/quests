import { FormEvent, useEffect, useRef } from 'react';
import { toast } from 'react-toastify';

import * as S from './booking-modal.styled';
import { ReactComponent as IconClose } from 'assets/img/icon-close.svg';
import { checkOrder } from 'utils/utils';
import { usePostOrderMutation } from 'serveces/query-api';
import { ErrorMessage } from 'const';


const CLASS_MODAL = 'CLASS_MODAL';
const SUCCESS_MESSAGE = 'Заявка принята, мы перезвоним';
const HTTP_SUCCESS_CODE = 201;


const BookingModal = ({onClick} : {onClick: () => void}) => {

  const nameRef = useRef<HTMLInputElement | null>(null);
  const phoneRef = useRef<HTMLInputElement | null>(null);
  const memberRef = useRef<HTMLInputElement | null>(null);

  const [postOrder] = usePostOrderMutation();

  const handleModalOffClick = (evt: any) => {
    const target = evt.target;
    if (target && !target.closest(`.${CLASS_MODAL}`)) {
      onClick();
    }
  }

  useEffect(() => {
    document.addEventListener('click', handleModalOffClick);
    return function cleanup() {document.removeEventListener('click', handleModalOffClick)}
  })

  const handleFormSubmit = (evt: FormEvent) => {
    evt.preventDefault();
    const name = nameRef.current?.value;
    const phone = phoneRef.current?.value;
    const peopleCount = memberRef.current?.value;

    if (name && phone && peopleCount) {
      if(checkOrder({name, phone, peopleCount})) {
        postOrder({name, phone, peopleCount: +peopleCount})
          .then((response: any) => {
            if (response.data !== HTTP_SUCCESS_CODE ) {
              toast.error(ErrorMessage.PostOrder);
              return;
            }
            toast.success(SUCCESS_MESSAGE);
            onClick();
          })
          .catch(() => toast.error(ErrorMessage.PostOrder));
      }
    }
  }

  return (
  <S.BlockLayer>
    <S.Modal
    className={CLASS_MODAL}
    >
      <S.ModalCloseBtn
      onClick={onClick}
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
        <S.BookingSubmit >Отправить заявку</S.BookingSubmit>
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
