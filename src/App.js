import React from 'react'
import { Switch, Route } from 'react-router-dom'
import JobDetailedPage from './pages/JobDetailedPage';
import StartPage from './pages/StartPage';

//todo
// If the API returns an empty array, make sure to show a message to the users with the following text:"No jobs found
// Write tests to make sure that all the components in your project are working as expected (at least 10 tests)
// Create atleast three components

//VG

// Deploy application to any hosting site (githubpages, netlify, firebase, vercel etc)

function App() {
    
  return (
    <>
    <Switch>
        <Route path="/" exact component={StartPage} />
        <Route path="/jobs/:id" component={JobDetailedPage} />
    </Switch>
    </>
  );
}

export default App;
