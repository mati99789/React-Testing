import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import MainTemplate from '../components/templates/MainTemplate/MainTemplate';
import AddUser from './AddUser';
import TableView from './TableView';

import TableHandlerProvider from '../providers/TableHandlerProvider';

const Root = () => {
  return (
    <Router>
      <TableHandlerProvider>
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
      </TableHandlerProvider>
    </Router>
  );
};

export default Root;
