import axios from "axios";
import { ATTEMPT_LOGIN, ATTEMPT_REGISTER } from "./actionTypes";

export const attemptRegister = data => dispatch => {
  axios({
    method: "post",
    url: `http://localhost:8080/users/register`,
    body: data
  })
    .then(res => res.json())
    .then(auth =>
      dispatch({
        type: ATTEMPT_REGISTER,
        payload: auth
      })
    );
};


