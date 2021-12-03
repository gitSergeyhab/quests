import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';

import * as S from './quests-catalog.styled';
import Spinner from 'components/spinner/spinner';
import NotFoundPage from 'components/not-found-page/not-found-page';
import { ReactComponent as IconPerson } from 'assets/img/icon-person.svg';
import { ReactComponent as IconPuzzle } from 'assets/img/icon-puzzle.svg';
import { setDisplayQuests, setGenre, setQuestLoadedStatus } from 'store/actions';
import { getDisplayQuests, getGenre, getQuestsErrorStatus, getQuestsLoadedStatus } from 'store/catalog-reducer/catalog-reducer-selectors';
import { capitalize, getIconByGenre, showCount } from 'utils/utils';
import { Genre, Level } from 'const';



const PATH_QUEST = '/detailed-quest';


const QuestItem = ({quest}) => {

  const {id, title, previewImg, level, peopleCount} = quest;

  const displayCount = showCount(peopleCount);

  const dispatch = useDispatch();

  const handleQuestClick = () => dispatch(setQuestLoadedStatus(false));


  return (
    <S.QuestItem
      onClick={handleQuestClick}
    >
      <S.QuestItemLink to={`${PATH_QUEST}/${id}`}>
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
    dispatch(setGenre(item.Server));
    dispatch(setDisplayQuests());
  }

  const GenreIcon = getIconByGenre(item.Server);

  return (
  <S.TabItem>
    <S.TabBtn isActive={genre === item.Server}
      onClick={handleGenreClick}
    >
      <GenreIcon />
      <S.TabTitle>
        {item.Title}
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

  const tabList = Object.values(Genre).map((genre) => <TabGenre item={genre} key={genre.Server}/>);

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
