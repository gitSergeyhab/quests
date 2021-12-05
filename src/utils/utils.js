import { toast } from 'react-toastify';

import { ReactComponent as IconAllQuests } from 'assets/img/icon-all-quests.svg';
import { ReactComponent as IconAdventures } from 'assets/img/icon-adventures.svg';
import { ReactComponent as IconHorrors } from 'assets/img/icon-horrors.svg';
import { ReactComponent as IconMystic } from 'assets/img/icon-mystic.svg';
import { ReactComponent as IconDetective } from 'assets/img/icon-detective.svg';
import { ReactComponent as IconScifi } from 'assets/img/icon-scifi.svg';
import { ErrorMessage, Genre } from 'const';


const Re = {
  Digit: /^[0-9]+$/,

};


export const filterQuests = (quests, genre) => genre === Genre.All.Server ? quests : quests.filter((quest) => quest.type === genre);

export const capitalize = (str) => str.length ? `${str[0].toUpperCase()}${str.slice(1)}` : str;

export const showCount = (peopleCount) => peopleCount && peopleCount.length ? `${peopleCount[0]} - ${peopleCount[peopleCount.length - 1]} чел` : '...';

export const checkOrder = ({name, phone, peopleCount}) => {
  const goodName = name.trim();
  const goodPhone = phone.length === 10 && Re.Digit.test(phone);
  const goodMember = Re.Digit.test(peopleCount);

  if (!goodName) {toast.warning(ErrorMessage.Name)}
  if (!goodPhone) {toast.warning(ErrorMessage.Phone)}
  if (!goodMember) {toast.warning(ErrorMessage.PeopleCount)}

  return goodMember && goodName && goodPhone;
};

export const getIconByGenre = (genre) => {
  switch(genre) {
    case Genre.Adventures.Server:
      return IconAdventures;
    case Genre.Detective.Server:
      return IconDetective;
    case Genre.Horror.Server:
      return IconHorrors;
    case Genre.Mystic.Server:
      return IconMystic;
    case Genre.Scifi.Server:
      return IconScifi;
    default: return IconAllQuests;
  }
};


export const getGenreByType = (type) => {
  for (const genre of Object.values(Genre)) {
    if (genre.Server === type) {
      return genre.Title;
    }
  }
  return null;
}
