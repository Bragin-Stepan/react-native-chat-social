import {URL_USER_MESSAGES} from '../constants';

export const getUserMessages = async () => {
  try {
    const response = await fetch(URL_USER_MESSAGES);
    const result = await response.json();
    return result;
  } catch (error) {
    console.error('Ошибка:', error);
    return [];
  }
};
