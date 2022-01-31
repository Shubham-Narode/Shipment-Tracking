import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Activity from "./Component/Activity";
import Details from "./Component/Details";
import Map from "./Component/Services/Map";
import Home from "./Component/Home";

function App() {
  return (
    <>
    <BrowserRouter>
    <Routes>
          <Route  path='/' element={[<Home />]}/>
          <Route  path='/activity' element={[<Home />, <Activity />]}/>
          <Route  path='/map' element={[<Home />, <Map />]}/>
          <Route  path='/details' element={[<Home />, <Details />]}/>
    </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
