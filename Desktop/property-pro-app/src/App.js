import {BrowserRouter as Router,  Route , Routes} from 'react-router-dom';
import SignIn from './pages/Signin/Signin/Signin';
import Signup from './pages/Signin/signup/Signup/Signup';
import Homepage from './pages/Homepage/Homepage';
import Buy from './pages/Buy/Buy';
import Rent from './pages/Rent/Rent';



const App = ()=> {
  return (
    <div className="App">
    <Router>
      <Routes>
        <Route exact path="/" element={<Homepage/>}></Route>
       
        <Route path="/sign-up" element={<Signup/>}>
        
        </Route>
        <Route path="/sign-in" element={<SignIn/>}>
        </Route>  
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
