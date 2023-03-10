const redux = require("redux");
const reduxLogger = require("redux-logger");
const logger = reduxLogger.createLogger();
const combineReducers = redux.combineReducers;
const applyMiddleware = redux.applyMiddleware;
const createStore = redux.createStore;

// types
const BUY_CAKE = "BUY_CAKE";
const BUY_ICECREAM = "BUY_ICECREAM";

// action creator - a function that returns an action
const buyCake = () => ({
  type: BUY_CAKE,
  info: "First Redux action",
});

const buyIceCream = () => ({
  type: BUY_ICECREAM,
});

// initial state.
// const initialState = {
//   numberOfCakes: 10,
//   numberOfIceCreams: 20,
// };

const initialCakeState = {
  numberOfCakes: 10
}

const initialIceCreamState = {
  numberOfIceCreams: 20
}

// reducer  a function that accepts state and action as arguments and returns the next state of the application
// const reducer = (state = initialState, action) => {
//   switch (action.type) {
//     case BUY_CAKE:
//       return {
//         ...state, // only update the property that needs to be updated.
//         numberOfCakes: state.numberOfCakes - 1,
//       };

//     case BUY_ICECREAM:
//       return {
//         ...state, // only update the property that needs to be updated.
//         numberOfIceCreams: state.numberOfIceCreams - 1,
//       };

//     default:
//       return state;
//   }
// };

const cakeReducer = (state = initialCakeState, action) => {
  switch (action.type) {
    case BUY_CAKE:
      return {
        ...state, // only update the property that needs to be updated.
        numberOfCakes: state.numberOfCakes - 1,
      };

    default:
      return state;
  }
};

const iceCreamReducer = (state = initialIceCreamState, action) => {
  switch (action.type) {
    case BUY_CAKE:
      return {
        ...state, // only update the property that needs to be updated.
        numberOfCakes: state.numberOfIceCreams - 1,
      };

    default:
      return state;
  }
};

const rootReducer = combineReducers({
  cake: cakeReducer,
  iceCream: iceCreamReducer
});

const store = createStore(rootReducer, applyMiddleware(logger));
console.log("Initial state", store.getState());
const unsubscribe = store.subscribe(() => {});

store.dispatch(buyCake());
store.dispatch(buyCake());
store.dispatch(buyCake());
store.dispatch(buyIceCream());
store.dispatch(buyIceCream());
unsubscribe();
