export const gameRandomMin = 0;
export const gameRandomMax = 100;

export default function getRandomInt(min, max) {
  return min + Math.floor((max - min) * Math.random());
}
