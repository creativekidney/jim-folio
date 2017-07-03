import fakeDatabase from './data.json';

const delay = ms =>
  new Promise(resolve => setTimeout(resolve, ms));

export const fetchWork = () =>
  delay(500).then(() => fakeDatabase.work);

export const fetchAbout = () =>
  delay(500).then(() => fakeDatabase.about);
