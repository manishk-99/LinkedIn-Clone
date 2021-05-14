import {HashRouter, Switch, Route} from "react-router-dom"
import "./App.css";
import Login from "./components/Login"

export default function App() {
  return (
    <div className="App">
      <HashRouter>
        <Switch>
          <Route exact path="/">
            <Login />
          </Route>
        </Switch>
      </HashRouter>
    </div>
  );
}
