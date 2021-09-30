import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import MainTemplate from '../components/templates/MainTemplate/MainTemplate';
import AddUser from './AddUser';
import TableView from './TableView';

const Root = () => {
  return (
    <Router>
      <MainTemplate>
        <Switch>
          <Route path="/add-user">
            <AddUser />
          </Route>
          <Route path="/">
            <TableView />
          </Route>
        </Switch>
      </MainTemplate>
    </Router>
  );
};

export default Root;
