import { GET_DATA } from "../ActionType/ActionType"


const initialState = {
post:[]
}

const getpostreducer= (state = initialState, { type, payload }) => {
  switch (type) {

  case GET_DATA:
    return { ...state, post:payload }

  default:
    return state
  }
}
export default getpostreducer