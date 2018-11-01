import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import * as sectionActions from '../../action/section-actions';
import SectionForm from "../section-form/section-form";
import Section from '../section/section';

class Dashboard extends React.Component {
  render() {
    return (
      <div>
        <SectionForm onComplete={this.props.sectionCreate}/>
        { this.props.sections.map((currentSection, i) => <Section
          section={currentSection} key={i}/>)}
      </div>
    );
  }
}

Dashboard.propTypes = {
  sectionCreate: PropTypes.func,
  sections: PropTypes.array,
};

const mapStateToProps = (state) => {
  //! Vinicio - Here, state comes from the store
  // {sections: ..., cards : ...}
  return { // This return over here, will become Dashboard.props
    sections: state.sections,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    sectionCreate: (section) => {
      dispatch(sectionActions.create(section));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);
