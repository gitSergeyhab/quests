import { useDispatch, useSelector } from 'react-redux';

import * as S from './quests-catalog.styled';
import Spinner from 'components/spinner/spinner';
import NotFoundPage from 'components/not-found-page/not-found-page';
import { ReactComponent as IconPerson } from 'assets/img/icon-person.svg';
import { ReactComponent as IconPuzzle } from 'assets/img/icon-puzzle.svg';
import { setDisplayQuests, setGenre } from 'store/catalog-reducer/catalog-slice';
import { capitalize, getIconByGenre, showCount } from 'utils/utils';
import { getDisplayQuests, getGenre } from 'store/catalog-reducer/catalog-reducer-selectors';
import { Genre, Level } from 'const';
import { useGetQuestsQuery } from 'serveces/query-api';
import { useEffect } from 'react';


const PATH_QUEST = '/detailed-quest';


const QuestItem = ({quest}) => {

  const {id, title, previewImg, level, peopleCount} = quest;

  const displayCount = showCount(peopleCount);


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
  const {data} = useGetQuestsQuery()

  const handleGenreClick = () => {
    dispatch(setGenre(item.Server));
    dispatch(setDisplayQuests(data));
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

  const {data, isError, isLoading} = useGetQuestsQuery();

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
