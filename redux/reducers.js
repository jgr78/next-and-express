import * as types from '../constants/types'

// INITIAL CONDITIONS STATE
const initialConditionsState = {
  conditions: [],
  error: false,
}

// CONDITIONS REDUCER
const conditionsReducer = (state = initialConditionsState, { type, conditions }) => {
  switch (type) {
    case types.ADD_CONDITIONS:
      return { conditions }
    case types.ERROR:
      return { error: true }
    case types.RESET:
      return { error: false }
    default:
      return state
  }
}


export default conditionsReducer
