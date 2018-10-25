import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import SectionForm from '../section-form/section-form';
import * as sectionActions from '../../action/section';

import CardForm from '../card-form/card-form';
import Card from '../card/card';
// TODO: Making Card Component to import here
import * as cardActions from '../../action/card';

import './_section.scss';

class Section extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      editing: false,
    };
  }

  handleUpdateRequest = () => {
    this.setState({editing: true});
  };

  handleUpdateSectionAndHideForm = (section) => {
    this.setState({editing: false});
    this.props.sectionUpdate(section);
  };

  render() {
    const {
      cards,
      cardCreate,
      section,
      key,
      sectionRemove,
    } = this.props;

    const sectionCards = cards[section.id];

    const editingJSX = <SectionForm section={section} onComplete={this.handleUpdateSectionAndHideForm}/>;
    const renderJSX = this.state.editing ? editingJSX : <React.Fragment>
      { section.title }
      <button onClick={() => sectionRemove(section)}> X </button>
    </React.Fragment>;

    return (
      <div className='list' key={key}>
        <header onDoubleClick={this.handleUpdateRequest}>
          { renderJSX }
        </header>
        <ul>
          { sectionCards.map(card => <Card card={card} key={card.id} />) }
        </ul>
        <footer>
          <CardForm section={section} onComplete={cardCreate} />
        </footer>
      </div>
    );
  }
}

Section.propTypes = {
  cards: PropTypes.object,
  cardCreate: PropTypes.func,
  section: PropTypes.object,
  key: PropTypes.number,
  sectionRemove: PropTypes.func,
  sectionUpdate: PropTypes.func,
};

const mapStateToProps = state => ({
  cards: state.cards,
});

const mapDispatchToProps = (dispatch) => {
  return {
    cardCreate: data => dispatch(cardActions.createAction(data)),
    sectionRemove: data => dispatch(sectionActions.remove(data)),
    sectionUpdate: data => dispatch(sectionActions.update(data)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Section);

