import React, { useState } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import MainTemplate from '../components/templates/MainTemplate/MainTemplate';
import AddUser from './AddUser';
import TableView from './TableView';
import data from '../data/userData';

const Root = () => {
  // const [userData, setUserData] = useState(data);
  // const [userInput, setUserInput] = useState({});
  //
  // const handleChange = (e) => {
  //   console.log(e);
  //   const { target } = e;
  //   setUserInput({
  //     [target.name]: target.value,
  //   });
  // };

  return (
    <Router>
      <MainTemplate>
        <Switch>
          <Route path="/add-user">
            <AddUser />
          </Route>
          <Route path="/">
            <TableView data={data} />
          </Route>
        </Switch>
      </MainTemplate>
    </Router>
  );
};

export default Root;
