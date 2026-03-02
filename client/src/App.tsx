import { Route, Switch } from "wouter";
import Home from "./pages/Home";

function App() {
  return (
    <Switch>
      <Route path={"/"} component={Home} />
      <Route>{() => { window.location.replace("/berri.html"); return null; }}</Route>
    </Switch>
  );
}

export default App;
