const selectedCityReducer = (state, action) => {
  if (state === undefined) {
  // Reducer initialisation
  return [];
  }

  switch (action.type) {
    case 'SELECT_CITY':
      return action.payload;
    default:
      return state;
  }
};

export default selectedCityReducer;
