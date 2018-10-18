import React from 'react';
import PropTypes from 'prop-types';
import ExpenseForm from '../expense-form/expense-form';

// renderExpenses = () => {
//   return (
//     <ul>
//       {
//         this.state.expenses.map((currentExpense) => {
//           return <li key={currentExpense.id}>
//
//           </li>
//         })
//       }
//     </ul>
//   );
// };

// this.props.handleRemoveExpense
// Callback :), No arguments :(

// this.props.handleRemoveExpense(this.props.expense);
// Arguments :) , No Callback :(

// this.props.handleRemoveExpense.bind(null, this.props.expense);
// Arguments :), Callback :)
class ExpenseItem extends React.Component {
  // 1 - Do I need state?
  //    NO. I don't need a constructor.
  render() {
    const { title, price } = this.props.expense;
    return (
      <li>
        {title} : $ {price}
        <button onClick={this.props.handleRemoveExpense.bind(null,
          this.props.expense)}> Delete Expense n_n</button>
        <ExpenseForm expense={this.props.expense}/>
      </li>
    );
  }
}

ExpenseItem.propTypes = {
  expense: PropTypes.object,
  handleRemoveExpense: PropTypes.func,
};

export default ExpenseItem;
