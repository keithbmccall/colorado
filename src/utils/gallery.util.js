import { ROW_DIMENSIONS } from "#enum/row-dimensions";

export const toggleRowSize = rowSize => {
  if (rowSize === 2) {
    return ROW_DIMENSIONS.rowSize3;
  }
  return ROW_DIMENSIONS.rowSize2;
};
