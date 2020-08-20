import React from "react";
import { Router, Switch, Route} from "react-router-dom"
import { createBrowserHistory } from "history";
import Home from "./pages/home";

const history = createBrowserHistory(); // 创建浏览器历史记录
function App() {
  return (
      // 这里定义了一个路由，即网站的根目录
      <Router history={history}>
        <Switch>
          <Route exact path={"/"} component={Home}/>
        </Switch>
      </Router>
  );
}

export default App;
