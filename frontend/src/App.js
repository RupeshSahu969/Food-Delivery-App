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
import Signup from "./Screens/Signup";
import Navbar from "./Components/Navbar";


function App() {
  return (
    <>
   
      <Router>
      {/* <Navbar/> */}
        <Routes>
        <Route path="/"  element={<Home/>} />
        <Route path="/login"  element={<Login/>} />
        <Route path="/signup"  element={<Signup/>} />
        </Routes>
        
      </Router>
    </>
  );
}

export default App;
