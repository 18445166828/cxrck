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

 const Foo=({match})=>{
  //  console.log(match);
   return (
  <h1>hello{match.params.id}</h1>
   )
 }
function App() {
  return (
    <div className="App">
     <Router>
       <Link to="/54321">test1</Link>
       <Link to="/test2">test2</Link>
       <Link to="/foo/123456">foo</Link>
       <Switch>
       <Route path="/foo/:id" component={Foo}></Route>
       <Route path="/test2" component={Test2}></Route>
       <Route path="/:id" component={Test1}></Route>
       </Switch>
     </Router>
    </div>
  );
}

export default App;
