import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import * as sectionActions from '../../action/section-actions';
import SectionForm from "../section-form/section-form";

class Dashboard extends React.Component {
  render() {
    console.log(this.props);
    return (
      <div>
        <SectionForm onComplete={this.props.sectionCreate}/>
        <p> { this.props.sections.map(currentSection =>
          <p key={currentSection.id}>{currentSection.title}</p>)} </p>
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
  return { // This return over here, will become Dashboard.props
    sections: state,
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
