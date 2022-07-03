import './App.css';
import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Hero } from './components/Hero/Hero';
import { NavBar } from './components/Navbars/Navbar';
import { Feed } from './components/Feed/Feed';
import Watchlist from './components/Watchlist/Watchlist';

function App() {

  const [user, setUser] = useState(null);
  const logIn = (userLog) => { //Set user log in
    fetch('http://localhost:8000/Users')
    .then(response => {
      return response.json()
    })
    .then(data => {
      const user = data[userLog];
      setUser(user);        
    })
  }

  const logOut = () => {
    setUser(null);
    setData(null);
    setFetchPending(true);
  }

  const [fetchPending, setFetchPending] = useState(true); //used for loading messages

  const [data, setData] = useState(null); //Set movie data

  useEffect(() => {
    if (user) {
       /* ----------------- Set timeout to simulate fetch time ----------------- */
        /* ----------------- Move this to make calls in right places? ----------------- */
      setTimeout(() => {
        fetch('http://localhost:8000/movies')
        .then(response => {
            return response.json();
        })
        .then(data => {
            console.log(data);
            setData(data);
            setFetchPending(false);
        })
      }, 2000);
    }
  }, [user]);
 

  return (
    <Router>
      <div className="App">
          {/* ----------------- Navigation ----------------- */}
        <NavBar user={ user } onClick={ logIn } logOut={ logOut } />
          <div className='topSpacerDiv'>
             {/* --- Spacer div --- */}
          </div>
          {/* ----------------- Content ----------------- */}
        <Switch>
          <Route exact path='/home'>
            <Hero onClick={ logIn } user={ user } />
            <Feed user={ user } data={ data } pending={ fetchPending } />
          </Route>
          <Route exact path='/myWatchlist'>
           <Watchlist user={ user } data={ data } />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
