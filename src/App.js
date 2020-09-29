import React from "react";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import "./App.css";

import Home from "./pages/home";
import Post from "./pages/post";
import NoMatch from "./pages/no-match";
import Create from "./pages/create";

function App() {
  return (
    <Router>
      <nav>
        <Link to="/">
          <h2>Posts</h2>
        </Link>
        <Link to="/create">
          <h2>Create a new post</h2>
        </Link>
      </nav>
      <main>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/create">
            <Create />
          </Route>
          <Route path="/404">
            <NoMatch />
          </Route>
          <Route path="/:slug">
            <Post />
          </Route>
        </Switch>
      </main>
    </Router>
  );
}

export default App;
