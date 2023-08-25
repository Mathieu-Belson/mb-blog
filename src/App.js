//import React from 'react' // need for react version under 17
import Navbar from './Navbar';
import Home from './Home';

function App() {
  return (
    <div className="App">
        <Navbar />   {/*component added with self close tag */}
        <div className="content">
          <Home />
        </div>
    </div>
  );
};

export default App;
