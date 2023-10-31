import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from "./home";
import Contact from "./contact";
import Translate from "./translate"; 
import Lesson from './lesson';
import Shop from './shop'

const App = () => {
  return(
    <Router>
      <div>
        <Routes>
          <Route  path="/" element={<Home />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/translate" element={<Translate />} />
          <Route path="/lesson" element={<Lesson />} />
          <Route path="/shop" element={<Shop />} />
        </Routes>
      </div>
    </Router>
  )
}

export default App