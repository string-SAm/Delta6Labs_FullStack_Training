export const increment = () => ({
    type: 'INCREMENT'
  });
  
  export const decrement = () => ({
    type: 'DECREMENT'
  });
  
  // Asynchronous action creator using Redux Thunk
  export const incrementAsync = () => {
    return dispatch => {
      setTimeout(() => {
        dispatch(increment());
      }, 1000);
    };
  };