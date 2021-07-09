import { render, screen } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import App from './App';
import TodoList from './components/TodoList';



test('renders To-do header', () => {
  render(<Router><App /></Router>);
  const headerText = screen.getByText(/to-do list/i);
  expect(headerText).toBeInTheDocument();
});


test('renders tasks to page', () => {
  render(<TodoList tasks={[{id: 1, task:"test task"}]} />)
  const testTask = screen.getByText(/test task/i)
  expect(testTask).toBeInTheDocument();
})