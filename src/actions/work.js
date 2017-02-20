export const ADD_WORK_ITEMS = 'ADD_WORK_ITEMS';
export const ADD_ABOUT_INFO = 'ADD_ABOUT_INFO';

export const addWorkItems = items => ({
  type: ADD_WORK_ITEMS,
  items,
});

export const addAboutInfo = aboutInfo => ({
  type: ADD_ABOUT_INFO,
  aboutInfo,
});
