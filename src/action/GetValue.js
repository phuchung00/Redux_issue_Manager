
const GETSTATUS = 'action/GETSTATUS'
const DELETE = 'action/DELETE'
const VALUE = 'action/VALUE'

export const getIssueAction = (id, name, employ, status) => {
  return {
    type: VALUE,
    payload: {
      id,
      name,
      employ,
      status,
    }
  }
}
export const deleteAction = (index) => {
  return {
    type: DELETE,
    payload: {
      index
    }
  }
}
const initialState = {
  value: []
}
export default function handleValueReducer(state = initialState, action) {
  switch (action.type) {
    
    case VALUE: {
      const { payload } = action
      const newState = { ...state }
      newState.id = payload.id
      newState.name = payload.name
      newState.employ = payload.employ
      newState.status = payload.status
      newState.value = [...state.value, payload];
      return newState
    }
    case DELETE: {
      const { payload } = action
      const newState = { ...state }
      // newState.value = newState.value.filter((e, i) => i !== payload.index);
      return newState.value = newState.value.filter((e, i) => i !== payload.index);;
    }
    default: return state
  }
}