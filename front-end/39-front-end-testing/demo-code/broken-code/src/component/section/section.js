import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import * as cardActions from '../../action/card-actions';
import CardForm from '../card-form/card-form';
import Card from '../card/card';

class Section extends React.Component {
  render() {
    const sectionCards = this.props.cards[this.props.section.id]; //O(1)
    return (
      <div>
        {
          sectionCards.map((currentCard, i) => <Card card={currentCard} key={i}/>)
        }
      <CardForm section={this.props.section} onComplete={this.props.cardCreate}/>
      </div>
    );
  }
}

Section.propTypes = {
  section: PropTypes.object,
  cardCreate: PropTypes.func,
  cards: PropTypes.object,
};

const mapStateToProps = state => ({
  cards: state.cards,
});

const mapDispatchToProps = (dispatch) => {
  return {
    cardCreate: card => dispatch(cardActions.create(card)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Section);
