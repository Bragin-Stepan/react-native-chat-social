import React from 'react';
import {URL_USERS_INFORMATION} from '../constants';

export const getUsersInformation = async () => {
  try {
    const response = await fetch(URL_USERS_INFORMATION);
    const result = await response.json();
    return result;
  } catch (error) {
    console.error('Ошибка:', error);
    return [];
  }
};
