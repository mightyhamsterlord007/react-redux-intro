import { LOAD_ITEM } from '../constants';
export const loadItem = (item) => {
  return {
    type: LOAD_ITEM,
    data: item
  };
};
