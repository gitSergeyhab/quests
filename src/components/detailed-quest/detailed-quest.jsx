import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router';

import * as S from './detailed-quest.styled';
import NotFoundPage from 'components/not-found-page/not-found-page';
import Spinner from 'components/spinner/spinner';
import { MainLayout } from 'components/common/common';
import { ReactComponent as IconClock } from 'assets/img/icon-clock.svg';
import { ReactComponent as IconPerson } from 'assets/img/icon-person.svg';
import { ReactComponent as IconPuzzle } from 'assets/img/icon-puzzle.svg';
import { BookingModal } from './components/components';
import { fetchQuestAction } from 'store/api-actions';
import { getQuest, getQuestErrorStatus, getQuestLoadedStatus } from 'store/quest-reducer/quest-reducer-selectors';
import { capitalize, getGenreByType, showCount } from 'utils/utils';
import { Level } from 'const';


const DetailedQuest = () => {

  const [isBookingModalOpened, setIsBookingModalOpened] = useState(false);

  const closeModal = () => setIsBookingModalOpened(false);

  const {id} = useParams();

  const quest = useSelector(getQuest);
  const isQuestLoaded = useSelector(getQuestLoadedStatus);
  const error = useSelector(getQuestErrorStatus);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchQuestAction(id));
  }, [dispatch, id]);

  if (error) {
    return <NotFoundPage/>
  }

  if (!isQuestLoaded || !quest) {
    return <Spinner/>
  }

  const {title, description, coverImg, type, level, peopleCount, duration} = quest;

  const displayCount = showCount(peopleCount);
  const onBookingBtnClick = () => {
    setIsBookingModalOpened(true);
  };

  return (
    <MainLayout>
      <S.Main>
        <S.PageImage
          src={`../${coverImg}`}
          alt={title}
          width="1366"
          height="768"
        />
        <S.PageContentWrapper>
          <S.PageHeading>
            <S.PageTitle>{title}</S.PageTitle>
            <S.PageSubtitle>{getGenreByType(type)}</S.PageSubtitle>
          </S.PageHeading>

          <S.PageDescription>
            <S.Features>
              <S.FeaturesItem>
                <IconClock width="20" height="20" />
                <S.FeatureTitle>{duration} мин</S.FeatureTitle>
              </S.FeaturesItem>
              <S.FeaturesItem>
                <IconPerson width="19" height="24" />
                <S.FeatureTitle>{displayCount}</S.FeatureTitle>
              </S.FeaturesItem>
              <S.FeaturesItem>
                <IconPuzzle width="24" height="24" />
                <S.FeatureTitle>{Level[capitalize(level)]}</S.FeatureTitle>
              </S.FeaturesItem>
            </S.Features>

            <S.QuestDescription>
              {description}
            </S.QuestDescription>

            <S.QuestBookingBtn onClick={onBookingBtnClick}>
              Забронировать
            </S.QuestBookingBtn>
          </S.PageDescription>
        </S.PageContentWrapper>

        {isBookingModalOpened && <BookingModal onClick={closeModal} />}
      </S.Main>
    </MainLayout>
  );
};

export default DetailedQuest;
