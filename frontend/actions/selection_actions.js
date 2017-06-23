export const SELECT_ELEMENT = 'SELECT_ELEMENT';
export const DESELECT_ELEMENT = 'DESELECT_ELEMENT';

export const selectElement = (element, element_type) => ({
  type: SELECT_ELEMENT,
  element,
  element_type
});

export const deselectElement = (element, element_type) => ({
  type: DESELECT_ELEMENT,
  element,
  element_type
});
