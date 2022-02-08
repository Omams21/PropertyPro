
import {BrowserRouter as Router,  Route , Routes} from 'react-router-dom';
import SignIn from './pages/Signin/Signin/Signin';
import Signup from './pages/Signin/signup/Signup/Signup';

function App() {
  return (
    <div className="App">
    <Router>
      <Routes>
       
        <Route path="/sign-up" element={<Signup/>}>
        
        </Route>
        <Route path="/sign-in" element={<SignIn/>}>
        </Route>

  

     
       
      </Routes>
    </Router>

  </div>
   
  
  );
}

export default App;
