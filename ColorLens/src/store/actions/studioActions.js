import { FETCH_STUDIO_IMAGES, SAVE_STUDIO_IMAGES } from "./actionTypes";

export const fetchStudioImages = () => dispatch => {
  axios({
    method: "get",
    url: "https://jsonplaceholder.typicode.com/posts"
  })
    .then(res => res.json())
    .then(studioImages =>
      dispatch({
        type: FETCH_STUDIO_IMAGES,
        payload: studioImages
      })
    );
};

export const saveStudioImages = eventData => dispatch => {
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
        type: SAVE_STUDIO_IMAGES,
        payload: event
      })
    );
};
