import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router';
import { useEffect } from 'react';

import * as S from './quests-catalog.styled';
import Spinner from 'components/spinner/spinner';
import NotFoundPage from 'components/not-found-page/not-found-page';
import { ReactComponent as IconAllQuests } from 'assets/img/icon-all-quests.svg';
import { ReactComponent as IconAdventures } from 'assets/img/icon-adventures.svg';
import { ReactComponent as IconHorrors } from 'assets/img/icon-horrors.svg';
import { ReactComponent as IconMystic } from 'assets/img/icon-mystic.svg';
import { ReactComponent as IconDetective } from 'assets/img/icon-detective.svg';
import { ReactComponent as IconScifi } from 'assets/img/icon-scifi.svg';
import { ReactComponent as IconPerson } from 'assets/img/icon-person.svg';
import { ReactComponent as IconPuzzle } from 'assets/img/icon-puzzle.svg';
import { setDisplayQuests, setGenre, setQuestLoadedStatus } from 'store/actions';
import { getDisplayQuests, getGenre, getQuestsErrorStatus, getQuestsLoadedStatus } from 'store/catalog-reducer/catalog-reducer-selectors';
import { capitalize, showCount } from 'utils/utils';
import { Genre, Level } from 'const';




const getIconByGenre = (genre) => {
  switch(genre) {
    case Genre.Adventures.server:
      return IconAdventures;
    case Genre.Detective.server:
      return IconDetective;
    case Genre.Horror.server:
      return IconHorrors;
    case Genre.Mystic.server:
      return IconMystic;
    case Genre.Scifi.server:
      return IconScifi;
    default: return IconAllQuests;
  }
};


const PATH_QUEST = '/quest';

const QuestItem = ({quest}) => {

  const {id, title, previewImg, level, peopleCount} = quest;

  const displayCount = showCount(peopleCount);

  const history = useHistory();

  const dispatch = useDispatch();

  const handleQuestClick = () => {
    dispatch(setQuestLoadedStatus(false));
    history.push(`${PATH_QUEST}/${id}`);
  };

  return (
    <S.QuestItem
      onClick={handleQuestClick}
    >
      <S.QuestItemLink to="/quest">
        <S.Quest>
          <S.QuestImage
            src={previewImg}
            width="344"
            height="232"
            alt={title}
          />

          <S.QuestContent>
            <S.QuestTitle>{title}</S.QuestTitle>

            <S.QuestFeatures>
              <S.QuestFeatureItem>
                <IconPerson />
                {displayCount}
              </S.QuestFeatureItem>
              <S.QuestFeatureItem>
                <IconPuzzle />
                {Level[capitalize(level)]}
              </S.QuestFeatureItem>
            </S.QuestFeatures>
          </S.QuestContent>
        </S.Quest>
      </S.QuestItemLink>
    </S.QuestItem>
)}


const TabGenre = ({item}) => {

  const dispatch = useDispatch();
  const genre = useSelector(getGenre);

  const handleGenreClick = () => {
    dispatch(setGenre(item.server));
    dispatch(setDisplayQuests());
  }

  const GenreIcon = getIconByGenre(item.server);

  return (
  <S.TabItem>
    <S.TabBtn isActive={genre === item.server}
      onClick={handleGenreClick}
    >
      <GenreIcon />
      <S.TabTitle>
        {item.title}
      </S.TabTitle>
    </S.TabBtn>
  </S.TabItem>)};

const QuestsCatalog = () => {

  const quests = useSelector(getDisplayQuests);
  const areQuestsLoaded = useSelector(getQuestsLoadedStatus);
  const error = useSelector(getQuestsErrorStatus);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(setDisplayQuests());
  }, [dispatch, areQuestsLoaded]);

  if (error) {
    return <NotFoundPage/>
  }

  if (!areQuestsLoaded) {
    return <Spinner/>
  }

  const tabList = Object.values(Genre).map((genre) => <TabGenre item={genre} key={genre.server}/>);

  const questList = quests.map((quest) => <QuestItem quest={quest} key={quest.id}/>);

  return (
  <>
    <S.Tabs>
      {tabList}
    </S.Tabs>

    <S.QuestsList>
      {questList}
    </S.QuestsList>
  </>
)};

export default QuestsCatalog;
