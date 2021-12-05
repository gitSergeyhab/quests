import { useDispatch, useSelector } from 'react-redux';

import * as S from './quests-catalog.styled';
import Spinner from 'components/spinner/spinner';
import NotFoundPage from 'components/not-found-page/not-found-page';
import { ReactComponent as IconPerson } from 'assets/img/icon-person.svg';
import { ReactComponent as IconPuzzle } from 'assets/img/icon-puzzle.svg';
import { setDisplayQuests, setGenre } from 'store/catalog-reducer/catalog-slice';
import { getIconByGenre, getLevel, showCount } from 'utils/utils';
import { getDisplayQuests, getGenre } from 'store/catalog-reducer/catalog-reducer-selectors';
import { Genre } from 'const';
import { useGetQuestsQuery } from 'serveces/query-api';
import { useEffect } from 'react';
import { Quest } from 'types/types';

import './quests-catalog.css';


const CLASS_ACTIVE_TAB = 'active-tab';
const PATH_QUEST = '/detailed-quest';


const QuestItem = ({quest} : {quest: Quest}) => {

  const {id, title, previewImg, level, peopleCount} = quest;

  const displayCount = showCount(peopleCount);

  const displayLevel = getLevel(level)


  return (
    <S.QuestItem>
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
                {displayLevel}
              </S.QuestFeatureItem>
            </S.QuestFeatures>
          </S.QuestContent>
        </S.Quest>
      </S.QuestItemLink>
    </S.QuestItem>
)}


const TabGenre = ({item} : {item : {Title: string, Server: string}}) => {

  const dispatch = useDispatch();
  const genre = useSelector(getGenre);
  const {data} = useGetQuestsQuery([])

  const handleGenreClick = () => {
    dispatch(setGenre(item.Server));
    dispatch(setDisplayQuests(data));
  }

  const GenreIcon = getIconByGenre(item.Server);

  const btnClass = genre === item.Server ? CLASS_ACTIVE_TAB : '';

  return (
  <S.TabItem>
    <S.TabBtn
      className={btnClass}
      onClick={handleGenreClick}
    >
      <GenreIcon />
      <S.TabTitle>
        {item.Title}
      </S.TabTitle>
    </S.TabBtn>
  </S.TabItem>)};


const QuestsCatalog = () => {

  const {data, isError, isLoading} = useGetQuestsQuery([]);

  const dispatch = useDispatch();

  const quests = useSelector(getDisplayQuests)

  useEffect(() => {
    if (data) {
      dispatch(setDisplayQuests(data))
    }
  }, [dispatch, data])


  if (isError) {
    return <NotFoundPage/>
  }

  if (isLoading) {
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
