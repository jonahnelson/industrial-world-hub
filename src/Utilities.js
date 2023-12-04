export function Dollarize(number, withSign) {
  return `${withSign ? '$' : ''}${number.toFixed(2)}`;
}

export const standardBrightGreen = '#00ff19';
export const standardBrightRed = '#ff0000';

export function MultipleStyles(arrayOfStyles) {
  return arrayOfStyles.join(' ');
}

export function GenerateId() {
  function randomString(length, chars) {
    let result = '';
    for (let i = length; i > 0; --i)
      result += chars[Math.floor(Math.random() * chars.length)];
    return result;
  }
  return randomString(
    32,
    '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ'
  );
}
