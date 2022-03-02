import ACTION_TYPE from "./action_type";

export const fetchListAction = (payload) => ({ type: ACTION_TYPE.LIST, data: payload });
export const addAction = () => ({type: ACTION_TYPE.ADD})
export const subtractAction = () => ({type: ACTION_TYPE.SUBTRACT})