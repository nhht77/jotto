import axios from 'axios';
import { SECRET_WORD } from "./actionTypes";

export const getSecretWord = () => dispatch => 
  axios.get('localhost:3030').then( res => {
      dispatch({
          type: SECRET_WORD,
          payload: res.data
      })
  });
