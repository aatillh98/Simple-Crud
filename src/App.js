import './App.css';
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";
import UserList from './components/UserList';
import AddUser from './components/AddUser';

function App() {
  return (
    <Router>
      <div>
        <Switch>
          <Route path="/">
            <UserList />
          </Route>
          <Route path="/add">
            <AddUser />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;

