import React from "react";
import { BrowserRouter as Router, Switch, Route} from "react-router-dom"
import Home from "./pages/home/home";
import Categories from "./pages/categories/categories";
import Archives from "./pages/archives/archives";
import Tags from "./pages/tags/tags";
import About from "./pages/about/about";
import Admin from "./pages/admin/admin";

function App() {
  return (
      // 这里定义了一个路由，即网站的根目录
      <Router>
        <Switch>
          <Route exact path={"/"} component={Home}/>
          <Route path={"/categories"} component={Categories}/>
          <Route path={"/archives"} component={Archives}/>
          <Route path={"/tags"} component={Tags}/>
          <Route path={"/about"} component={About}/>
          <Route path={"/admin"} component={Admin}/>
        </Switch>
      </Router>
  );
}

export default App;
