import axios from "axios";
import { SEARCH_BY_CITY } from "./actionTypes";
//
export const searchByCity = city => dispatch => {
  axios({
    url: `http://localhost:8080/explore/${city}`,
    method: "get"
  }).then(results =>
    dispatch({
      type: SEARCH_BY_CITY,
      payload: {
        city,
        events: results.data.results.events
      }
    })
  );
};
