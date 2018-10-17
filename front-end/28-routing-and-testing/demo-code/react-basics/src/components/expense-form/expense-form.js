import React from 'react';
import Dashboard from "../dashboard/dashboard";
import PropTypes from 'prop-types';

class ExpenseForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      title: '',
      price: 0,
    };
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
    this.props.handleAddExpense(this.state);
  };

  render() {
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
        <button type="submit">Create Expense</button>
      </form>
    );
  }
}

ExpenseForm.propTypes = {
  handleAddExpense : PropTypes.func,
};


export default ExpenseForm;
