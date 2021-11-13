import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./pages/Home/Home/Home";
import Explore from "./pages/Explore/Explore/Explore";
import Login from "./pages/Login/Login/Login";
import Registration from "./pages/Login/Registration/Registration";
import Dashboard from "./pages/Dashboard/Dashboard/Dashboard";
import AuthProvider from "./context/AuthProvider/AuthProvider";
import PrivateRoute from "./pages/Login/PrivateRoute/PrivateRoute";
import OrderForm from "./pages/Order/OrderForm/OrderForm";

function App() {
  return (
    <div>
      <AuthProvider>
        <Router>
          <Switch>
            <Route path="/login">
              <Login></Login>
            </Route>
            <PrivateRoute path="/dashboard">
              <Dashboard></Dashboard>
            </PrivateRoute>
            <PrivateRoute path="/placeorder/:id">
              <OrderForm></OrderForm>
            </PrivateRoute>
            <Route path="/register">
              <Registration></Registration>
            </Route>
            <Route path="/explore">
              <Explore></Explore>
            </Route>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/home">
              <Home />
            </Route>
          </Switch>
        </Router>
      </AuthProvider>
    </div>
  );
}

export default App;
