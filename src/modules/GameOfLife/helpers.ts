export const initField = (
  height: number,
  width: number,
  initialValue = false
): boolean[][] => {
  return Array.from({ length: height }).map(() =>
    Array.from({ length: width }).fill(initialValue)
  ) as boolean[][];
};

export const toggleCellState = (
  field: boolean[][],
  x: number,
  y: number
): boolean[][] => {
  const fieldCopy = [...field];
  fieldCopy[y] = [...fieldCopy[y]];
  fieldCopy[y][x] = !fieldCopy[y][x];
  return fieldCopy;
};

export const resize = (
  field: boolean[][],
  newHeight: number,
  newWidth: number
): boolean[][] => {
  const newField = initField(newHeight, newWidth);
  const minWidth = Math.min(newWidth, (!!field[0] && field[0].length) || 0);
  const minHeight = Math.min(newHeight, field.length);

  for (let y = 0; y < minHeight; y++) {
    for (let x = 0; x < minWidth; x++) {
      newField[y][x] = field[y][x];
    }
  }
  return newField;
};

export const calcInterval = (speed: number): number => {
  if (speed <= 0) return 0;
  return 1000 / speed;
};

export const generateField = (
  height: number,
  width: number,
  filledPercent: number
): boolean[][] => {
  const field = initField(height, width);

  if (filledPercent > 0) {
    const percent = filledPercent / 100;

    for (let y = 0; y < height; y++) {
      for (let x = 0; x < width; x++) {
        if (Math.random() < percent) {
          field[y][x] = true;
        }
      }
    }
  }

  return field;
};
