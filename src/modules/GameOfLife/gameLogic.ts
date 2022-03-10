import { initField } from "./helpers";

const neighborsCount = 8;
const deltaX: number[] = [-1, 0, 1, 1, 1, 0, -1, -1];
const deltaY: number[] = [-1, -1, -1, 0, 1, 1, 1, 0];

const isValidCoords = (
  x: number,
  y: number,
  width: number,
  height: number
): boolean => {
  const isValidX: boolean = 0 <= x && x < width;
  const isValidY: boolean = 0 <= y && y < height;

  return isValidX && isValidY;
};

const getCountOfActiveNeighbors = (
  field: boolean[][],
  x: number,
  y: number
): number => {
  const height = field.length;
  const width = height > 0 ? field[0].length : 0;

  let result = 0;
  for (let i = 0; i < neighborsCount; i++) {
    const newX = x + deltaX[i];
    const newY = y + deltaY[i];

    if (isValidCoords(newX, newY, width, height) && field[newY][newX]) {
      result++;
    }
  }
  return result;
};

const minNeighbors = 2;
const maxNeighbors = 3;
const neighborsForNewCell = 3;

const isCellLive = (currState: boolean, activeNeighbors: number): boolean => {
  let result: boolean;
  if (currState) {
    result = minNeighbors <= activeNeighbors && activeNeighbors <= maxNeighbors;
  } else {
    result = activeNeighbors === neighborsForNewCell;
  }
  return result;
};

export const nextEpoch = (field: boolean[][]): boolean[][] => {
  const newField = initField(field.length, field[0].length, false);
  for (let y = 0; y < field.length; y++) {
    const row = field[y];
    for (let x = 0; x < row.length; x++) {
      const cell = row[x];
      const activeNeighbors = getCountOfActiveNeighbors(field, x, y);
      newField[y][x] = isCellLive(cell, activeNeighbors);
    }
  }
  return newField;
};
