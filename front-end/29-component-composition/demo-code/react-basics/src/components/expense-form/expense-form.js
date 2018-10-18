import React from 'react';
import PropTypes from 'prop-types';

class ExpenseForm extends React.Component {
  constructor(props) {
    super(props);

    const emptyState = {
      title: '',
      price: 0,
    };

    this.state = this.props.expense ? this.props.expense : emptyState;
  }

  handleChange = (event) => {
    const { name, value } = event.target;
    //! Vinicio - name is going to be the element that trigger the event
    //! Vinicio - value is going to be the new value
    //! Vinicio - name is going to be either 'title' or 'price'
    this.setState({
      [name]: value,
    });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    this.props.handleComplete(this.state);
  };

  render() {
    const buttonText = this.props.expense ? 'Update' : 'Create';
    return (
      <form onSubmit={this.handleSubmit}>
        <input
          type="text"
          name="title"
          placeholder="title"
          value={this.state.title}
          onChange={this.handleChange}
        />
        <input
          type="number"
          name="price"
          placeholder="0"
          value={this.state.price}
          onChange={this.handleChange}
        />
        <button type="submit">{buttonText} Expense</button>
      </form>
    );
  }
}

ExpenseForm.propTypes = {
  handleAddExpense : PropTypes.func,
};


export default ExpenseForm;
