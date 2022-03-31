import {BrowserRouter as Router, Route} from 'react-router-dom'
import Navbar from './components/layout/Navbar'
import './index.css'

function App() {
  return (
    <Router>
      <div className="flex flex-col justify-between h-screen">    
        <Navbar />
          <main>Main content</main>
      </div>
    </Router>
  );
}

export default App;
