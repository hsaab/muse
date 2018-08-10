let first = {
  artists: null,
  email: null,
  location: null
}

const reducer = (state = first, action) => {
  let newState = Object.assign({}, state);
  switch (action.type) {
    case "ADDARTISTS":
      let plan = action.plan;
      newState[plan.link] = plan;
      return newState;
    default:
      return state;
  }
};

export default reducer;
