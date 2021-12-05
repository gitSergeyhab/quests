export const Genre = {
  All: {Title: 'Все квесты', Server: 'all'},
  Adventures: {Title: 'Приключения', Server: 'adventures'},
  Horror: {Title: 'Ужасы', Server: 'horror'},
  Mystic: {Title: 'Мистика', Server: 'mystic'},
  Detective: {Title: 'Детектив', Server: 'detective'},
  Scifi: {Title: 'Sci-fi', Server: 'sci-fi'},
};

export const AppRoute = {
  Home: '/',
  Quest: '/detailed-quest/:id',
  Contacts: '/contacts',
};

export const Level = {
  Easy: 'легкий',
  Medium: 'средний',
  Hard: 'сложный'
};

export const ErrorMessage = {
  Name: 'Your name is incorrect',
  Phone: 'Your phone is incorrect',
  PeopleCount: 'Your PeopleCount is incorrect',
  PostOrder: 'Unable to send the order',
  FetchQuest: 'Unable to load the quest',
  FetchQuests: 'Unable to load quests',
};

export const APIRoute = {
  Quests: '/quests',
  Orders: '/orders',
};

export const ERROR_RESPONSE = 'ERROR_RESPONSE';
