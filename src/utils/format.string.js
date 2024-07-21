export function getCorrectWordForm(number, nominative) {
  const lastDigit = number % 10;
  const lastTwoDigits = number % 100;

  let form;

  if (lastTwoDigits >= 11 && lastTwoDigits <= 14) {
    form = 'ов';
  } else {
    switch (lastDigit) {
      case 1:
        form = '';
        break;
      case 2:
      case 3:
      case 4:
        form = 'а';
        break;
      default:
        form = 'ов';
    }
  }

  return `${number} ${nominative}${form}`;
}

export const truncateString = (str, maxLength) => {
  if (maxLength === -1) {
    return str;
  }
  if (str.length <= maxLength) {
    return str;
  }
  return str.slice(0, maxLength) + '...';
};

function formatDuration(value, type) {
  const pluralize = (number, one, few, many) => {
    if (number % 10 === 1 && number % 100 !== 11) {
      return `${number} ${one}`;
    } else if ([2, 3, 4].includes(number % 10) && ![12, 13, 14].includes(number % 100)) {
      return `${number} ${few}`;
    } else {
      return `${number} ${many}`;
    }
  };

  switch (type) {
    case 'minutes':
      return pluralize(value, 'минута', 'минуты', 'минут');
    case 'hours':
      return pluralize(value, 'час', 'часа', 'часов');
    case 'days':
      return pluralize(value, 'день', 'дня', 'дней');
  }
}
