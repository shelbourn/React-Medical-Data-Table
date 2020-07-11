import React from 'react';
import useFetch from "./UseFetch.js"
import logo from './logo.svg';
import './App.css';

function App() {
  const res = useFetch("https://dog.ceo/api/breeds/image/random", {});
  console.log(res.response, res)
  const image = res.response?.message ? res.response.message : null
  if (res.isLoading) {
    return <div>Loading...</div>
  }
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
        </a>
      </header>
      <h2>Matt is a Bitch!</h2>
      <img src={image} />
      <h1>{res.response?.status}!!!</h1>
    </div>
  );
}

export default App;
