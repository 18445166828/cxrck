// exact 路由严格匹配模式
// switch	仅渲染与当前位置匹配的第一个子元素
import React from 'react';
import logo from './logo.svg';
import './App.css';
import {
  BrowserRouter as Router,
  Route,  
  Link,
  Switch,
  Redirect
 } from "react-router-dom";
 import Test1 from "./component/Test1"
 import Test2 from "./component/Test2"

function App() {
  return (
    <div className="App">
     <Router>
       <Link to="/">test1</Link>
       <Link to="/test2">test2</Link>
       <Switch>
       <Route path="/test2" component={Test2}></Route>
       <Route path="/" component={Test1}></Route>
       </Switch>
     </Router>
    </div>
  );
}

export default App;
