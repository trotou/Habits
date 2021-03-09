import { Switch, Route } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import Home from "../components/Home";
import Usuarios from "../components/Usuarios";
import RegisterPage from "../pages/RegisterPage";

const Routes = () => {
  return (
    <AnimatePresence exitBeforeEnter>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/user">
          <Usuarios />
        </Route>
        <Route path="/register">
          <RegisterPage />
        </Route>
      </Switch>
    </AnimatePresence>
  );
};

export default Routes;
