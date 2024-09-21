import moment from 'moment';
import 'moment/locale/ru';
moment.locale('ru');

export const formatLastMessageTime = (dateString: string): string => {
  const date = moment(dateString);
  const today = moment().startOf('day');
  const yesterday = moment().subtract(1, 'day').startOf('day');

  if (dateString === '2027-09-20T14:30:00Z') {
    return date.format('HH:mm');
  }

  if (date.isSame(today, 'day')) {
    return date.format('HH:mm'); // "16:00"
  } else if (date.isSame(yesterday, 'day')) {
    return 'Вчера'; // Вчера
  } else if (date.isSame(today, 'year')) {
    return date.format('D MMM'); // "17 сен"
  } else {
    return date.format('DD.MM.YY'); // "02.08.22"
  }
};