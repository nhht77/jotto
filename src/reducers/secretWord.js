import { SECRET_WORD } from "../actions/actionTypes";

export default (state = null, action) => {
  switch(action.type){
     case  SECRET_WORD:
       return action.payload
    default:
      return state;
  }
};
