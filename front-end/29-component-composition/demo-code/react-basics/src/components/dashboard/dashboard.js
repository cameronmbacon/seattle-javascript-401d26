import React from 'react';
import ExpenseForm from "../expense-form/expense-form";
import uuid from 'uuid/v4';
import ExpenseItem from '../expense-item/expense-item';


class Dashboard extends React.Component {
  constructor(props) {
    super(props);

    this.state = {};
    this.state.expenses = [];
    //! Vinicio - expenses are going to be objects with 3 properties
    //! 1 - id
    //! 2 - title
    //! 3 - price
  }

  renderExpenses = () => {
    return (
      <ul>
        {
          this.state.expenses.map((currentExpense) => {
            return  <ExpenseItem
              expense={currentExpense}
              handleRemoveExpense = {this.handleRemoveExpense}
            />
          })
        }
      </ul>
    );
  };

  handleRemoveExpense = (expenseToRemove) => {
    // Here, 'this' is the dashboard
    console.log(this);
    console.log('I am calling my callback RIGHT MEOW!!!');
    this.setState((previousState) => ({
      expenses: previousState.expenses.filter(currentExpense => currentExpense.id !== expenseToRemove.id), // ! = =
    }));
  };

  handleAddExpense = (expense) => {
    // Vinicio - over here, I'm going to assume the expense is coming with
    // a title and a price
    expense.createdOn = new Date();
    expense.id = uuid();
    return this.setState((previousState) => {
     return {
       expenses: [...previousState.expenses, expense],
     }
    });
  };

  handleUpdateExpens = (expensetoUpdate) => {

  };

  calculateTotalPrice = () => {
    return this.state.expenses.reduce((sum, currentExpense) => {
      return sum + Number(currentExpense.price);
    },0);
  };

  render() {
    return (
     <section>
       <h2>Dashboard</h2>
       <p>Add new Expense</p>
       <ExpenseForm handleComplete={this.handleAddExpense}/>
       <p>Here is a list of all your expenses so far:</p>
       { this.renderExpenses() }
       <p>Your total debt is : $ {this.calculateTotalPrice() } </p>
     </section>
    );
  }
}
/* THOUGHT PROCESS:
  1 - Who holds the main (relevant) state of the application
       - The one that holds the main state, will usually define functions to update state.
       - handleAdd, handleRemove, handleUpdate
  2 - Who triggers state changes (usually, child classes)
       - The one that trigger state changes will receive handlers as props.

 */

export default Dashboard;
