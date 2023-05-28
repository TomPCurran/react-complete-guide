import React from 'react';
import Chart from '../Chart/Chart';

const ExpensesChart = (props) => {
  const chartDataPoints = [
    { key: 0, label: 'Jan', value: 0 },
    { key: 1, label: 'Feb', value: 0 },
    { key: 2, label: 'Mar', value: 0 },
    { key: 3, label: 'Apr', value: 0 },
    { key: 4, label: 'May', value: 0 },
    { key: 5, label: 'Jun', value: 0 },
    { key: 6, label: 'Jul', value: 0 },
    { key: 7, label: 'Aug', value: 0 },
    { key: 8, label: 'Sep', value: 0 },
    { key: 9, label: 'Oct', value: 0 },
    { key: 10, label: 'Nov', value: 0 },
    { key: 11, label: 'Dec', value: 0 },
  ];

  for (const expense of props.expenses) {
    const expenseMonth = expense.date.getMonth();
    chartDataPoints[expenseMonth].value += expense.amount;
  }
  return <Chart dataPoints={chartDataPoints} />;
};

export default ExpensesChart;

/*
  for (const expense in props.expenses) {
    const expenseMonth = expense.date.getMonth(); // Starts at 0;
    const 

    chartDataPoints[expenseMonth].value += expense.amount;
  }
  return <Chart dataPoints={chartDataPoints} />;
*/
