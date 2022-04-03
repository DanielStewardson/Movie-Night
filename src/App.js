import './App.css';
import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Hero } from './components/Hero/Hero';
import { NavBar } from './components/Navbars/Navbar';
import { MainMenuNav } from './components/Navbars/MainMenuNav';
import { AccountNavBar } from './components/Navbars/AccountNavBar';
import { SearchBar } from './components/SearchBar/Searchbar';
import { Feed } from './components/Feed/Feed';
import Watchlist from './components/Watchlist/Watchlist';

function App() {
  const [loggedIn, setLoggedIn] = useState(false); //Check logged in

  const [user, setUser] = useState(null);
  const logIn = (userLog) => {
    setLoggedIn(!loggedIn);
    console.log(userLog);
    // fetch('http://localhost:8000/Users')
    // .then(response => {
    //   return response.json()
    // })
    // .then(data => {
    //   const user = data[userLog];
    //   console.log(user);
    //   console.log(userLog);
    //   setUser(user);        
    // })
  }

  const [accountNav, setAccountNav] = useState(false); //Is account side nav active
  const accNavActive = () => {
    setAccountNav(!accountNav);
  }

  const [mainNav, setMainNav] = useState(false); //Is main side nav active
  const mainNavActive = () => {
    setMainNav(!mainNav);
  }


  return (
    <Router>
      <div className="App">
          {/* ----------------- Navigation ----------------- */}
        <NavBar loggedIn={ loggedIn } onClick={ logIn } onMainClick={ mainNavActive } onAccClick={ accNavActive } />
        <SearchBar />
          <div className='topSpacerDiv'></div> {/* --- Spacer div --- */}
        <MainMenuNav isActive={ mainNav } />
        <AccountNavBar isActive={ accountNav } />
          {/* ----------------- Content ----------------- */}
        <Switch >
          <Route exact path='/'>
            <Hero onClick={ logIn } loggedIn={ loggedIn } />
            <Feed loggedIn={ loggedIn } />
          </Route>
          <Route exact path='/myWatchlist'>
            <Watchlist user={ user } />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
