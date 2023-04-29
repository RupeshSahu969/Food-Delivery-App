import Home from "./Screens/Home";
import {
  BrowserRouter as Router,
  Route,
  Link,
  Routes
} from "react-router-dom";
import Login from "./Screens/Login";
// import "../node_modules/bootstrap/dist/css/bootstrap-dark-5.min.css"

import "../node_modules/bootstrap/dist/js/bootstrap.bundle"
import "../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js"


function App() {
  return (
    <>
      <Router>
        <Routes>
        <Route path="/"  element={<Home/>} />
        <Route path="/login"  element={<Login/>} />
        </Routes>
        
      </Router>
    </>
  );
}

export default App;
