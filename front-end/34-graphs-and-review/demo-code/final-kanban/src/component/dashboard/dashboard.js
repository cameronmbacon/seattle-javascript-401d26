import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import * as sectionActions from '../../action/section';

import SectionForm from '../section-form/section-form';
import Section from '../section/section';
import Header from '../header/header';

import './_dashboard.scss';

//--------------------------------------------------------------
class Dashboard extends React.Component {
  render() {
    // Vinicio - in the component, our state is linked AS PROPS
    const { sections, sectionCreate } = this.props;
    return (
      <main>
        <Header/>
        <nav className="navbar board">
          <SectionForm onComplete={sectionCreate}/>
        </nav>
        <div className="lists">
          {
            sections.sections.map((currentSection, i) => <Section section={currentSection} key={i}/>)
          }
        </div>
      </main>
    );
  }
}

Dashboard.propTypes = {
  sections: PropTypes.object,
  sectionCreate: PropTypes.func,
};
//--------------------------------------------------------------
const mapStateToProps = (state) => {
  // vinicio - the object we return WILL BECOME PROPS for landing
  return {
    sections: state,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    sectionCreate: data => dispatch(sectionActions.create(data)),
  };
};

// Vinicio - this would be what happens behind the scenes
// const middleFunction = connect(mapStateToProp,mapDispatchToProps);
// export default middleFunction(Landing);
//--------------------------------------------------------------
export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);
