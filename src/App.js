//import React from 'react' // need for react version under 17
import Navbar from './Navbar';
import Home from './Home';
import Create from './Create';

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'; // BrowserRouter is a component that we wrap around our application. It is a component that we import from react-router-dom. It is a component that we wrap around our a
import BlogDetails from './BlogDetails';
import NotFound from './NotFound';

function App() {
  return (
    <Router> {/* we wrap the entire application in the Router component*/}
      <div className="App">
          <Navbar />  
          <div className="content">
            <Switch> 
              <Route exact path="/">
                <Home />
              </Route> 
              <Route path="/create">
                <Create />
              </Route> 
              <Route path="/blogs/:id"> {/* the :id is a route parameter. It is a variable that we can use to match any value in the url.*/}
                <BlogDetails />
              </Route> 
              <Route path="*"> {/* the * is a wildcard. It will match any route that hasn't been matched so far.*/} 
                <NotFound />
              </Route>
            </Switch>
          </div>
      </div>
    </Router>
  );
};

export default App;

// eslint-disable-next-line no-lone-blocks
{/* Switch will only show the first route that matches the path. 
If we don't use the Switch component, it will show all the routes that match the path*/}

// eslint-disable-next-line no-lone-blocks
{/*  Routh: the path prop is the path that we want to match. 
The component prop is the component that we want to render when the path matches. 
The path prop is a string that we can use to match the url. 
The component prop is the component that we want to render when the path matches.*/}