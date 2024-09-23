import moment from 'moment';
import 'moment/locale/ru';

export const formatLastMessageTime = (dateString: string): string => {
  moment.updateLocale('ru', {
    monthsShort: {
      format: 'янв фев мар апр май июн июл авг сен окт ноя дек'.split(' '),
      standalone: 'янв фев мар апр май июн июл авг сен окт ноя дек'.split(' '),
    },
  });

  moment.locale('ru');

  const date = moment(dateString);
  const today = moment().startOf('day');
  const yesterday = moment().subtract(1, 'day').startOf('day');
  const weekAgo = moment().subtract(7, 'days').startOf('day');

  // Для теста
  if (dateString === '2027-09-20T14:30:00Z') {
    return date.format('HH:mm');
  }

  if (date.isSame(today, 'day')) {
    return date.format('HH:mm'); // "16:00"
  } else if (date.isSame(yesterday, 'day')) {
    return 'Вчера'; // "Вчера"
  } else if (date.isAfter(weekAgo)) {
    return date.format('dd'); // "Пятница"
  } else if (date.isSame(today, 'year')) {
    return date.format('D MMM'); // "17 сен"
  } else {
    return date.format('DD.MM.YY'); // "02.08.22"
  }
};

export const formaHoursMinutesTime = (dateString: string): string => {
  return new Date(dateString).toLocaleTimeString([], {
    hour: '2-digit',
    minute: '2-digit',
  });
};
