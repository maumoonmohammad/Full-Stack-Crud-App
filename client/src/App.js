import Navbar from './components/navbar';
import './App.css'
import Home from './components/Home';
import Createpost from './components/Createpost';
import Allposts from './components/Allposts';
import Error from './components/Error';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

function App() {
  return (
    <div className="App">
      <Router>

        <Navbar />

        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/createpost' element={<Createpost />} />
          <Route path='/allposts' element={<Allposts />} />
          <Route path='*' element={<Error />} />
          
        </Routes>

      </Router>


    </div>

  );
}

export default App;
