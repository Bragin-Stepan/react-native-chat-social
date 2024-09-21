import moment from 'moment';
import 'moment/locale/ru';
moment.locale('ru');

export const formatLastOnlineTime = (
  dateString: string,
  isOnline: boolean,
): string => {
  const date = moment(dateString);
  const now = moment();
  const diffMinutes = now.diff(date, 'minutes');
  const today = moment().startOf('day');
  const yesterday = moment().subtract(1, 'day').startOf('day');

  if (isOnline) {
    return 'Онлайн'; // Онлайн
  } else if (diffMinutes <= 30) {
    return 'был(а) недавно'; // "Был(а) недавно"
  } else if (date.isSame(today, 'day')) {
    return `был(а) в ${date.format('HH:mm')}`; // "Был(а) сегодня"
  } else if (date.isSame(yesterday, 'day')) {
    return `был(а) вчера в ${date.format('HH:mm')}`; // "Был(а) вчера"
  } else if (date.isSame(today, 'year')) {
    return `был(а) ${date.format('D MMM')} в ${date.format('HH:mm')}`; // "был(а) 22 апр в 07:29"
  } else {
    return `был(а) ${date.format('DD.MM.YY')} в ${date.format('HH:mm')}`; // "был(а) 22.02.22 в 22:15"
  }
};
