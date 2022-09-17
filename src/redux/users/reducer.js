import { actionTypes } from "./actions";
// Initial State:
const initialState = {
  dataList: [],
  isLoading: false,
};

// REDUCER:
export default function reducer(state = initialState, action = {}) {
  switch (action.type) {
    case actionTypes.GET_USERS:
      return { ...state, isLoading: true };
    case actionTypes.GET_USERS_LIST_FAILED:
      return { ...state, isLoading: false };
    case actionTypes.GET_USERS_LIST_SUCCESS:
      return { ...state, isLoading: false, dataList: action.data };
    case actionTypes.ADD_USER_SUCCESS:
      return {
        ...state,
        isLoading: false,
        // dataList: [...state.dataList, action.data],
      };
    case actionTypes.EDIT_USER:
      return {
        ...state,
        isLoading: false,
        dataList: state.dataList.map((product) =>
          product.id == action.data.id ? action.data : product
        ),
      };
    case actionTypes.DELETE_USER:
      return {
        ...state,
        isLoading: false,
        dataList: state.dataList.filter((user) => user.id !== action.data.id),
      };
    default:
      return state;
  }
}
