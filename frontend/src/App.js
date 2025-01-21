import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import StudentPage from './components/StudentPage';
import FacultyPage from './components/FacultyPage';

function App() {
  return (
    <Router>
      <div className="App">
        <h1>Gate Pass Management System</h1>
        <Switch>
          <Route path="/student" component={StudentPage} />
          <Route path="/faculty" component={FacultyPage} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
