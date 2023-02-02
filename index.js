const BUY_CAKE = "BUY_CAKE";

// action creator - a function that returns an action
const buyCake = () => ({
  type: BUY_CAKE,
  info: "First Redux action",
});

// initial state.
const initialState = {
  numberOfCakes: 10,
};

// reducer  a function that accepts state and action as arguments and returns the next state of the application
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case BUY_CAKE:
      return {
				...state, // only update the property that needs to be updated.
        numberOfCakes: state.numberOfCakes - 1,
      };

		default: return state;
  }
};
