import "./App.css";
import Navbar from "./Components/Navbar";
import Home from "./Pages/Home";
function App() {
  return (
    <div className='App'>
      <div className='App-header '>
        <Navbar />
        <Home />
      </div>
    </div>
  );
}

export default App;
