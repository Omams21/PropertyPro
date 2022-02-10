
import Homepage from './pages/Homepage/Homepage';
import Buy from './pages/Buy/Buy';
import Rent from './pages/Rent/Rent';

import {BrowserRouter as Router,  Route , Routes} from 'react-router-dom';


const App = ()=> {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route exact path="/" element={<Homepage/>}></Route>

          <Route path="/buy" element={<Buy/>}>
          </Route>

          <Route path="/rent" element={<Rent/>}>
          </Route>

        </Routes>
     
      </Router> 

    </div>
  );
}

export default App;
