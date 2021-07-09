import './App.css';
import { Route } from 'react-router-dom';
import  Header from './components/Header';
import TodoList from './components/TodoList';

function App() {
  return (
    <div className="App">
      <Route path='/'>
        <Header />
        <TodoList tasks={["test"]} />
      </Route>
    </div>
  );
}

export default App;
