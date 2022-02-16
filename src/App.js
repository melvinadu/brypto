import React, { useEffect, useState } from 'react';
import './App.css';

import axios from 'axios'
import Token from "./components/Token/Token"

import Navbar from './components/Navbar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages';
import About from './pages/about';
import Events from './pages/events';
import AnnualReport from './pages/annual';
import Teams from './pages/team';
import Blogs from './pages/blogs';
import SignUp from './pages/signup';

function App() {
  const [tokens,setTokens] = useState([])
  const [search,setSearch] = useState('')
  useEffect(() => {
    axios.get('https://api.coingecko.com/api/v3/coins/markets?vs_currency=INR&order=market_cap_desc&per_page=100&page=1&sparkline=false')
    .then(res=>{
       setTokens(res.data)
       console.log(res.data)
    }).catch(error=>console.log(error))
  }, [])
  const handleChange = e =>{
    setSearch(e.target.value)
  }
  const filteredTokens = tokens.filter(token=>
    token.name.toLowerCase().includes(search.toLowerCase())
    )
  return (
    <>
    <Router>
      <Navbar />
      <Routes>
        <Route path='/' exact component={Home} />
        <Route path='/about' component={About} />
        <Route path='/events' component={Events} />
        <Route path='/annual' component={AnnualReport} />
        <Route path='/team' component={Teams} />
        <Route path='/blogs' component={Blogs} />
        <Route path='/sign-up' component={SignUp} />
      </Routes>
    </Router>
    
    <div className="token-app">
      <div className="token-search">
        {/* <h1 className="token-text">Search your desired token</h1> */}
        <form action="">
          <input type="text" className="token-input" placeholder="Provide the token name" onChange={handleChange}/>

        </form>

      </div>
      {filteredTokens.map(token=>{
        return(
          <Token 
          key={token.id} 
          name={token.name} 
          image={token.image} 
          symbol={token.symbol}
          marketcap={token.market_cap}
          price={token.current_price}
          pricechange={token.price_change_percentage_24h}
          volume={token.total_volume}
          />
        );
      })}



    </div>
    </>
  );
}

export default App;

