import { BrowserRouter } from "react-router-dom";
import Navbar from "./components/Navbar";
import Feed from "./components/Feed";


function App() {
  return (
    <BrowserRouter>
      <Navbar/>
      <Feed/>
    </BrowserRouter>
  );
}

export default App;
