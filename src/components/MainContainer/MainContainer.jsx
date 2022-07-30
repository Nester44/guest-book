/* eslint-disable react/prop-types */
import React from 'react';
import { connect } from 'react-redux';
import BadResponse from '../BadResponse/BadResponse';

const MainContainer = (props) => {
  if (props.serverProblem) return <BadResponse />;
  return  (
    <div className="AppWrapper">
      {props.children}
    </div>
  );
};

const mapStateToProps = (state) => ({
  serverProblem: state.app.serverProblem
});

export default connect(mapStateToProps)(MainContainer);
