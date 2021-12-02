import { toast } from 'react-toastify';
import { ErrorMessage, Genre } from 'const';


const Re = {
  Digit: /^[0-9]+$/,
};


export const filterQuests = (quests, genre) => genre === Genre.All.server ? quests : quests.filter((quest) => quest.type === genre);

export const capitalize = (str) => str.length ? `${str[0].toUpperCase()}${str.slice(1)}` : str;

export const unCapitalize = (str) => str.length ? `${str[0].toLowerCase()}${str.slice(1)}` : str;

export const showCount = (peopleCount) => peopleCount && peopleCount.length ? `${peopleCount[0]} - ${peopleCount[peopleCount.length - 1]} чел` : '...';

export const checkOrder = ({name, phone, peopleCount}) => {
  const goodName = name.trim();
  const goodPhone = phone.length === 10 && Re.Digit.test(phone);
  const goodMember = Re.Digit.test(peopleCount);

  if (!goodName) {toast.warning(ErrorMessage.Name)}
  if (!goodPhone) {toast.warning(ErrorMessage.Phone)}
  if (!goodMember) {toast.warning(ErrorMessage.peopleCount)}

  return goodMember && goodName && goodPhone;
};
