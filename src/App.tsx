import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from "./home";
import Contact from "./contact";
import Lesson from "./lessons"; 

const App = () => {
  return(
    <Router>
      <div>
        <Routes>
          <Route  path="/home" element={<Home />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/lesson" element={<Lesson />} />
        </Routes>
      </div>
    </Router>
  )
}

export default App