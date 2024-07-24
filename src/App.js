import ChatScreen from "./Pages/ChatScreen";
import Home from "./Pages/Home";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
function App() {
  return (
    <div className='App'>
      <div className='App-header '>
        <Router >
        {/* <Navbar /> */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/chat" element={<ChatScreen />} />
        </Routes>
        </Router>
      </div>
    </div>
  );
}

export default App;
