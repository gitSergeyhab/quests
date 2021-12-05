export const Genre = {
  All: {Title: 'Все квесты', Server: 'all'},
  Adventures: {Title: 'Приключения', Server: 'adventures'},
  Horror: {Title: 'Ужасы', Server: 'horror'},
  Mystic: {Title: 'Мистика', Server: 'mystic'},
  Detective: {Title: 'Детектив', Server: 'detective'},
  Scifi: {Title: 'Sci-fi', Server: 'sci-fi'},
} as const;

export const AppRoute = {
  Home: '/',
  Quest: '/detailed-quest/:id',
  Contacts: '/contacts',
} as const;

// export const Level = {
//   Easy: 'легкий',
//   Medium: 'средний',
//   Hard: 'сложный'
// } as const;

export const ErrorMessage = {
  Name: 'Your name is incorrect',
  Phone: 'Your phone is incorrect',
  PeopleCount: 'Your PeopleCount is incorrect',
  PostOrder: 'Unable to send the order',
  FetchQuest: 'Unable to load the quest',
  FetchQuests: 'Unable to load quests',
} as const;

export const APIRoute = {
  Quests: '/quests',
  Orders: '/orders',
} as const;

export const Level = {
  Easy: {rus: 'легкий', eng: 'easy'} ,
  Medium: {rus: 'средний', eng: 'medium'},
  Hard: {rus: 'сложный', eng: 'hard'},
} as const;

export const ERROR_RESPONSE = 'ERROR_RESPONSE';
