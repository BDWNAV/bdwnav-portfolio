import React from "react";
import { Route, Switch } from "react-router-dom";
import Home from "./pages/Home";
import Projects from "./pages/Projects";

class App extends React.Component {
  render() {
    return (
      <main>
        <Switch>
          <Route path="/projects" component={Projects} />
          <Route path="/" component={Home}/>
        </Switch>
      </main>
    )
  }
}

export default App;