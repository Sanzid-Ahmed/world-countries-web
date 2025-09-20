import './App.css'
import React, { Suspense } from 'react';
import Countries from './Components/Countries/Countries'

const countries = fetch("https://openapi.programming-hero.com/api/all")
.then(response => response.json());

function App() {
  return (
    <>
    <Suspense fallback= {<h1>Loading.....</h1>}>
      <Countries countries = {countries}></Countries>
    </Suspense>
      
    </>
  )
}

export default App



// Test => 
/*
    1. fetch why here?

*/




// New learn => 
/*
    1. Suspense = It is loading. 
    2. I need to import Suspance. 
*/




// Steps => 
/*
  1. 
*/