import './App.css';
import { Route } from 'react-router-dom';
import  { Header, TodoList } from './components';
import data from './data.json';

function App() {
  return (
    <div className="App">
      <Route path='/'>
        <Header />
        <TodoList tasks={data} />
      </Route>
    </div>
  );
}

export default App;
