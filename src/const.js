export const Genre = {
  All: {title: 'Все квесты', server: 'all'},
  Adventures: {title: 'Приключения', server: 'adventures'},
  Horror: {title: 'Ужасы', server: 'horror'},
  Mystic: {title: 'Мистика', server: 'mystic'},
  Detective: {title: 'Детектив', server: 'detective'},
  Scifi: {title: 'Sci-fi', server: 'sci-fi'},
};

export const AppRoute = {
  Home: '/',
  Quest: '/quest/:id',
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
