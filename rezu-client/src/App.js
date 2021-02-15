import React from 'react'
import InputReview from './components/InputReview'
import ListReview from './components/ListReview'
import Header from './components/Header'
import './App.css';

function App() {
  return (
    <>
      <Header />
    <div className="container">
      <InputReview />
      <ListReview />
    </div>
    </>
  );
}

export default App;
