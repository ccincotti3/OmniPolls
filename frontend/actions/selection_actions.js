export const SELECT_ELEMENT = 'SELECT_ELEMENT';
export const DESELECT_ELEMENT = 'DESELECT_ELEMENT';

export const selectElement = (element) => ({
  type: SELECT_ELEMENT,
  element
});

export const deselectElement = (element) => ({
  type: DESELECT_ELEMENT,
  element
});
