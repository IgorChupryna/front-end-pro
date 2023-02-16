import {TODO_CREATE_ACTION, TODO_DONE_ACTION, TODO_EDIT_ACTION, TODO_REMOVE_ACTION} from '../actions/todo'


const DEFAULT_TODO = {
  text: '',
  done: false,
}
const initialState = {
  list: [
    {text: "fdgfdgdgdf", status: false, done: false, id: "13"},
    {text: "dfgfdg", status: false, done: true, id: "16"},
    {text: "333334", status: false, done: true, id: "27"},
    {text: "fg6", status: false, done: false, id: "32"},
    {text: "fff", status: false, done: false, id: "33"},
    {text: "fff2", status: false, done: true, id: "34"},
    {text: "vcnbvbn", status: false, done: true, id: "36"},
    {text: "fghf", status: false, done: false, id: "37"},
    {text: "bvnv2", status: false, done: true, id: "39"},
    {text: "decdc73", status: false, done: false, id: "41"}
  ],
  editTodo: DEFAULT_TODO,
}

export default function todoReducer (state = initialState, { type, payload }) {
  switch (type) {
    case TODO_CREATE_ACTION:
      if (state.editTodo.id) { // edit
        const newList = state.list.map(todo => todo.id === state.editTodo.id ? payload : todo);

        return {
          list: newList,
          editTodo: DEFAULT_TODO,
        }
      } else { // create
        return { ...state, list: [ ...state.list, payload ] }
      }
    case TODO_REMOVE_ACTION: return { ...state, list: state.list.filter(todo => todo.id !== payload) }
    case TODO_EDIT_ACTION: return { ...state, editTodo: payload }
    case TODO_DONE_ACTION:
      const newList = state.list.map(todo => todo.id === payload.id ? payload : todo);

      return {
        list: newList,
        editTodo: DEFAULT_TODO,
      }
    default: return state;
  }
}