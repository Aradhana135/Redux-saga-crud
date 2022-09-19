import React, {  useEffect } from "react";
import AddDetails from "../../src/components/feautures/AddDetails";
import EditDetails from "../../src/components/feautures/EditDetails";
import Users from "../components/feautures/Users";
import ViewDetails from "./feautures/ViewDetails";

import { Switch } from "react-router-dom";
import { Route } from "react-router-dom";
import {
  actionCreators as usersActions,
} from "../redux/users/actions";
import { useDispatch } from "react-redux";

const App = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(usersActions.list());
  }, [dispatch]);

  return (
    <Switch>
      <Route path={"/add"} component={AddDetails} />
      <Route path={"/viewuser/:id"} component={ViewDetails} />
      <Route path={"/edituser/:id"} component={EditDetails} />
      <Route path={"/"} component={Users} />
    </Switch>
  );
};

export default App;
