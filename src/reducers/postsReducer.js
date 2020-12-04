// eslint-disable-next-line
export default (state = [], action) => {
  switch (action.type) {
    case "FETCH_POST":
      return action.payload;
    default:
      return state;
  }
};
