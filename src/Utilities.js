export function Dollarize(number, withSign) {
  return `${withSign ? '$' : ''}${number.toFixed(2)}`;
}

export const standardBrightGreen = '#00ff19';
export const standardBrightRed = '#ff0000';

export function MultipleStyles(arrayOfStyles) {
  return arrayOfStyles.join(' ');
}
