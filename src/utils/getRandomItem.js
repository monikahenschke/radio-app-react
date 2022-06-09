import { getRandomInt } from './getRandomInt';

export function getRandomItem(items) {
  const randomInt = getRandomInt(0, items.length);
  return items[randomInt];
}
