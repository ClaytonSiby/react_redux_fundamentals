import React from "react";
import { connect } from "react-redux";
import { buyCake } from "../redux";

function CakeContainer(props) {
  return (
    <div>
      <h2>Number of Cakes: { props.numberOfCakes }</h2>
      <button onClick={ props.buyCake }>Buy Cake</button>
    </div>
  );
}

const mapStateToProps = (state) => ({
  numberOfCakes: state.cake.numberOfCakes,
});

const mapDispatchToProps = (dispatch) => ({
	buyCake: () => dispatch(buyCake())
});

export default connect(mapStateToProps, mapDispatchToProps)(CakeContainer);
