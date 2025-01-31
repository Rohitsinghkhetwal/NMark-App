import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import "./App.css";
import Dashboard from "./Components/Dashboard";
import Sidebar from "./Components/Sidebar";
import Hotels from "./Components/Hotels";

function App() {
  return (

   <Router>
    <div className="flex">
      <Sidebar/>
      <div className="flex-1 p-6">
        <Routes>
          <Route>
            <Route path="/" element={<Dashboard/>}/>
            <Route path="/Home" element={<Hotels/>}/>

          </Route>

        </Routes>

      </div>


    </div>

  </Router>
  )
}

export default App;
