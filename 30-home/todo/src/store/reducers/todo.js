import {
  TODO_CREATE_ACTION, TODO_DONE_ACTION,
  TODO_EDIT_ACTION,
  TODO_LOADING_ACTION,
  TODO_REMOVE_ACTION,
  TODO_SET_LIST_ACTION,
  TODO_UPDATE_ACTION
} from '../actions/todo'


const DEFAULT_TODO = {
  text: '',
  done: false,
}
const initialState = {
  list: [],
  editTodo: DEFAULT_TODO,
  loading: false,
  loginStatus: 'allow' | 'wrong password'
}

export default function todoReducer (state = initialState, { type, payload }) {
  switch (type) {
    case TODO_UPDATE_ACTION:
      const newList2 = state.list.map(todo => todo.id === state.editTodo.id ? payload : todo);

      return {
        list: newList2,
        editTodo: DEFAULT_TODO,
        loading: false,
      }
    case TODO_CREATE_ACTION: return { ...state, list: [ ...state.list, payload ], loading: false }
    case TODO_REMOVE_ACTION: return { ...state, list: state.list.filter(todo => todo.id !== payload) }

    case TODO_EDIT_ACTION: return { ...state, editTodo: payload }
    case TODO_DONE_ACTION:
      const newList = state.list.map(todo => todo.id === payload.id ? payload : todo);

      return {
        list: newList,
        editTodo: DEFAULT_TODO,
      }
    case TODO_SET_LIST_ACTION: return { ...state, list: payload, loading: false }
    case TODO_LOADING_ACTION: return { ...state, loading: payload }
    default: return state;
  }
}