import * as types from '../constants/types'
import { defaultURL } from '../constants/properties'

export const getConditions = () => (dispatch) => {

  // Server URL
  const serverURL = process.env.URL || defaultURL;
  dispatch({ type: types.RESET })
  return fetch(serverURL)
    .then((response) =>
      response.json().then((json) => ({ conditions: json.conditions || [] })),
    )
    .then((res) => {
      dispatch({ type: types.ADD_CONDITIONS, conditions: res.conditions })
    })
    .catch(() => {
      dispatch({ type: types.ERROR })
    });
};

