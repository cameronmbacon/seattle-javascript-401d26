import React from 'react';
import { connect } from 'react-redux';
import * as cardActions from '../../action/card-actions';

class Section extends React.Component {

};

const mapStateToProps = () => {};

const mapDispatchToProps = (dispatch) => {
  return {
    cardCreate: card => dispatch(cardActions.create(card)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Section);
