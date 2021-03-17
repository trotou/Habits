import { Switch } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import LoginPage from "../pages/LoginPage";
import RegisterPage from "../pages/RegisterPage";
import UserPerfilPage from "../pages/UserPerfilPage";
import HomePage from "../pages/HomePage";
import TrailPage from "../pages/TrailPage";
import Route from "./route";
import NotFound from "../pages/NotFoundPage";
import EditableHabitsPage from "../pages/EditableHabitsPage";

const Routes = () => {
  return (
    <AnimatePresence exitBeforeEnter>
      <Switch>
        <Route exact path="/" component={LoginPage} />
        <Route path="/home" component={HomePage} isPrivate />
        <Route path="/register" component={RegisterPage} />
        <Route path="/profile" component={UserPerfilPage} isPrivate />        
        <Route path="/trail" component={TrailPage} isPrivate />                  
        <Route path="/personal" component={EditableHabitsPage} isPrivate />
        <Route component={NotFound} />
      </Switch>
    </AnimatePresence>
  );
};

export default Routes;
