import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbaar from "./component/Navbarcomp/Navbar";
import Home from "./component/Navbarcomp/Home";
import About from "./component/Navbarcomp/About";
import Contact from "./component/Navbarcomp/Contact";
import Login from "./component/Navbarcomp/Login";
import Carddetails from "./component/Navbarcomp/Homecomp/Carddetails";

function App() {
  return (
    <>
      <Router>
        <Navbaar />
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/about" element={<About />}></Route>
          <Route path="/contact" element={<Contact />}></Route>
          <Route path="/login" element={<Login />}></Route>
          <Route path="/carddetails" element={<Carddetails />}></Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;
