import { addAction, fetchListAction, subtractAction } from "./actions";
import API from "./api";

export const tk = {
  getList: async (dispatch) => {
    const data = await API.list();
    dispatch(fetchListAction(data));
  },
  add: (dispatch) => {
    dispatch(addAction());
  },
  subtract: (dispatch) => {
    dispatch(subtractAction())
  }
};

export default tk;
