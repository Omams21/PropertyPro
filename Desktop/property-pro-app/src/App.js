
import Homepage from './pages/Homepage/Homepage';

import {BrowserRouter as Router,  Route , Routes} from 'react-router-dom';


const App = ()=> {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route exact path="/" element={<Homepage/>}></Route>


        </Routes>
     
      </Router> 

    </div>
  );
}

export default App;
