import {
  initField,
  toggleCellState,
  resize,
  calcInterval,
  generateField,
} from "./helpers";

describe("GameOfLife helpers functions", () => {
  it("'initFields' generate array with needed sizes", () => {
    let height = 1;
    let width = 1;
    const fields1 = initField(height, width);
    expect(fields1).toHaveLength(height);
    expect(fields1[0]).toHaveLength(width);
    expect(fields1[0][0]).toEqual(false);

    height = 2;
    width = 6;
    const fields2 = initField(height, width);
    expect(fields2).toHaveLength(height);
    expect(fields2[0]).toHaveLength(width);
    for (let y = 0; y < height; y++) {
      const row = fields2[y];
      for (let x = 0; x < width; x++) {
        const currVal = row[x];
        expect(currVal).toEqual(false);
      }
    }

    height = 7;
    width = 4;
    const fields3 = initField(height, width, true);
    expect(fields3).toHaveLength(height);
    expect(fields3[0]).toHaveLength(width);
    for (let y = 0; y < height; y++) {
      const row = fields3[y];
      for (let x = 0; x < width; x++) {
        const currVal = row[x];
        expect(currVal).toEqual(true);
      }
    }
  });

  it("'togglCellState' toggle one cell", () => {
    const height = 4;
    const width = 3;
    const fields = initField(height, width);
    const newFields = toggleCellState(fields, 2, 2);

    for (let y = 0; y < height; y++) {
      const row = fields[y];
      for (let x = 0; x < width; x++) {
        const currVal = row[x];
        expect(currVal).toEqual(false);
      }
    }

    for (let y = 0; y < height; y++) {
      const row = newFields[y];
      for (let x = 0; x < width; x++) {
        const currVal = row[x];
        if (x !== 2 || y !== 2) expect(currVal).toEqual(false);
        else expect(currVal).toEqual(true);
      }
    }
  });

  it("'resize' return resized fields array", () => {
    const height = 4;
    const width = 3;
    const fields = initField(height, width);
    const updatedFields = toggleCellState(fields, 2, 2);
    const resizedFields = resize(updatedFields, 5, 5);

    expect(fields).toHaveLength(height);
    expect(fields[0]).toHaveLength(width);

    expect(resizedFields).toHaveLength(5);
    expect(resizedFields[0]).toHaveLength(5);

    for (let y = 0; y < height; y++) {
      const row = updatedFields[y];
      for (let x = 0; x < width; x++) {
        const currVal = row[x];
        if (x !== 2 || y !== 2) expect(currVal).toEqual(false);
        else expect(currVal).toEqual(true);
      }
    }

    for (let y = 0; y < 5; y++) {
      const row = resizedFields[y];
      for (let x = 0; x < 5; x++) {
        const currVal = row[x];
        if (x !== 2 || y !== 2) expect(currVal).toEqual(false);
        else expect(currVal).toEqual(true);
      }
    }
  });

  it("'calcInterval' check", () => {
    expect(calcInterval(1)).toEqual(1000);
    expect(calcInterval(2)).toEqual(500);
    expect(calcInterval(0.5)).toEqual(2000);
    expect(calcInterval(0)).toEqual(0);
  });

  it("'generateField' check", () => {
    const width = 1000;
    const height = 1000;
    const filledPercent = 30;

    const field = generateField(height, width, filledPercent);
    const filledCount = field.reduce(
      (sum, row) => sum + row.reduce((acc, cell) => acc + (cell ? 1 : 0), 0),
      0
    );
    const percent = filledCount / (height * width);

    expect(Math.abs(percent - filledPercent / 100)).toBeLessThanOrEqual(0.05);
  });
});
