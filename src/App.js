
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, NavLink,Switch,Route } from 'react-router-dom';
import Home from './Home/Home';
import About from './About/About';
import Friends from './Friends/Friends';
import Notfound from './Notfound/Notfound';
import FriendDetails from './friendDetails/FriendDetails';
function App() {
  return (
    <div className="App">
       <BrowserRouter>
            <nav>
              <NavLink to="/home">Home</NavLink>
              <NavLink to="/about">About</NavLink>
              <NavLink to="/friends">Friends</NavLink>
              <NavLink to="/another">Another</NavLink>
            </nav>

         <Switch>

           <Route exact path="/">
              <Home></Home>
           </Route>
           <Route exact path="/home">
              <Home></Home>
           </Route>

           <Route exact path="/about">
              <About></About>
           </Route>

           <Route exact path="/friends">
              <Friends></Friends>
           </Route>

           <Route exact path="/friend/:friendid">
              <FriendDetails></FriendDetails>
           </Route>
           <Route exact path="*">
               <Notfound></Notfound>
           </Route>
           
         </Switch>
       
       
       
       
       </BrowserRouter>
    </div>
  );
}

export default App;
