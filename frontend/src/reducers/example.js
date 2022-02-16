const exampleReducer = (state = 1, action) => {
  switch (action.type) {
    case "BLAH":
      return state;
    default:
      return state;
  }
};
export default exampleReducer;
