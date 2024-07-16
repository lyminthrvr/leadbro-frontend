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
