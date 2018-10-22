import React from 'react';
import PropTypes from 'prop-types';

const emptyState = {
  title: '',
};

class SectionForm extends React.Component {
  constructor(props) {
    super(props);
    //! Vinicio - UI State
    this.state = this.props.section || emptyState;
  }
  handleChange = (event) => {
    const { value } = event.target;
    this.setState({title: value});
  };

  handleSubmit = (event) => {
    event.preventDefault();
    this.props.onComplete(this.state);
  };

  render() {
    return (
      <form
       onSubmit={this.handleSubmit}>

        <input
          type='text'
          name='title'
          placeholder='title'
          value={this.state.title}
          onChange={this.handleChange}
          />
        <button type='submit'> Create Section </button>

      </form>
    );
  }
};

SectionForm.propTypes = {
  section: PropTypes.object,
  onComplete : PropTypes.func,
};

export default SectionForm;
