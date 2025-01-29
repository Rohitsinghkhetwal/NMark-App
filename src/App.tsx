import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import "./App.css";
import Home from "./Components/Home";
import Dashboard from "./Components/Dashboard";
import Work from "./Components/Work";
import Sidebar from "./Components/Sidebar";

function App() {
  return (

   <Router>
    <div className="flex">
      <Sidebar/>
      <div className="flex-1 p-6">
        <Routes>
          <Route>
            <Route path="/" element={<Home/>}/>
            <Route path="/Home" element={<Dashboard/>}/>
            <Route path="recent" element={<Work/>}/>

          </Route>

        </Routes>

      </div>


    </div>

  </Router>
  )
}

export default App;
