import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from "./home";
import Contact from "./contact";

const App = () => {
  return(
    <Router>
      <div>
        <Routes>
          <Route  path="/" element={<Home />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
    </Router>
  )
}

export default App