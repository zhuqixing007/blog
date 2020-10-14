import React from "react";
import { BrowserRouter as Router, Switch, Route} from "react-router-dom"
import Home from "./pages/home/home";
import Categories from "./pages/categories/categories";
import Archives from "./pages/archives/archives";
import Tags from "./pages/tags/tags";
import About from "./pages/about/about";
import Admin from "./pages/admin/admin";
import Detail from "./pages/detail/detail";
import {Provider} from "react-redux"
import {store} from "./redux/store";
import All from "./pages/admin/all";
import New from "./pages/admin/new";
import Upload from "./pages/admin/upload";

function App() {
  return (
      // 这里定义了一个路由，即网站的根目录
      <Provider store={store}>
          <Router>
              <Switch>
                  <Route exact path={"/"} component={Home}/>
                  <Route path={"/categories"} component={Categories}/>
                  <Route path={"/archives"} component={Archives}/>
                  <Route path={"/tags"} component={Tags}/>
                  <Route path={"/about"} component={About}/>
                  <Route path={"/detail"} component={Detail}/>
                  <Route exact path={"/admin"} component={Admin}/>
                  <Route exact path={"/admin/all"} component={All}/>
                  <Route exact path={"/admin/new"} component={New}/>
                  <Route exact path={"/admin/editor"} component={New}/>
                  <Route exact path={"/admin/upload"} component={Upload}/>
              </Switch>
          </Router>
      </Provider>
  );
}

export default App;
