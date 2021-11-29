import React from 'react';
import { BrowserRouter as Router, Switch , Route } from 'react-router-dom';
import './App.css';
import Header from './Header';
import Home from './Home';
import Checkout from './Checkout';
import Login from './Login';
import {useStateValue} from './StateProvider';
import { auth } from './firebase';
import { useEffect } from 'react';

function App() {

  const[{user},dispatch] =useStateValue();
  
  useEffect(() => {

    //only run ones the component loads.....
   const unsubscribe = auth.onAuthStateChanged((authUser)=>{
     
      if(authUser){
         //the user is logged in / the user was logged in
         dispatch({
            type: "SET_USER",
            user:authUser


         });
      }
         else {
           //the user is logged out

           dispatch({
            type: "SET_USER",
            user:null,


         });



      }
    });
    return()=>{
      //any clean up operations go in here
      unsubscribe();
    }
    
  }, [])

  console.log("USER IS>>>",user);










  return (
    <Router>
      <div className="app"> 

      <Switch>
          <Route path ="/checkout">
           <Checkout/>
          </Route>

          <Route path = "/login">
           <Login/>
          </Route>

          <Route path ="/">
            <Header />
            <Home/>
          </Route>

       </Switch>

      </div>

    </Router>
  );
}

export default App;
