import axios from "axios";
import { FETCH_EVENTS, CREATE_EVENT } from "./actionTypes";

export const fetchEvents = () => dispatch => {
  axios({
    method: "get",
    url: "https://jsonplaceholder.typicode.com/posts"
  }).then(res=>res.json()).then(events=>dispatch({
      type: FETCH_EVENTS,
      payload: events
  }))
};

export const createPost = eventData => dispatch => {
  fetch("https://jsonplaceholder.typicode.com/posts", {
    method: "post",
    headers: {
      "content-type": "application/json"
    },
    body: JSON.stringify(eventtData)
  })
    .then(res => res.json())
    .then(event =>
      dispatch({
        type: CREATE_EVENT,
        payload: event
      })
    );
};
