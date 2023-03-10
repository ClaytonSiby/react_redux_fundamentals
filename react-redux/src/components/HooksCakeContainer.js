import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { buyCake } from '../redux';

function HooksCakeContainer() {
  // access the app store with useSelector
  const numberOfCakes = useSelector((state) => state.cake.numberOfCakes);

  // useDispatch hook returns a reference to the dispatch function from the redux store
  const dispatch = useDispatch();

  return (
    <div>
        <h2>Number of Cakes - { numberOfCakes } </h2>
        <button onClick={() => dispatch(buyCake())}>Buy Cake</button>
    </div>
  )
}

export default HooksCakeContainer;