import './App.css';
import { Route } from 'react-router-dom';
import  { Header, TodoList, AddTask } from './components';
import data from './data.json';

function App() {
  return (
    <div className="App">
      <Route path='/'>
        <Header />
        <TodoList tasks={data} />
        <AddTask />
      </Route>
    </div>
  );
}

export default App;
