import React from 'react';
import { BrowserRouter, HashRouter, MemoryRouter, Route, Link } from 'react-router-dom';

const PageOne = () => {
  return (
    <div>PageOne
      <Link to='/pagetwo'>&nbsp; Go to Page Two</Link>
    </div>
  );
};

const PageTwo = () => {
  return (
    <div>
      PageTwo
      <button>Click Me!</button>
      <Link to='/'>&nbsp; Go to Page One</Link>
    </div>
  );
};

const App = () => {
  return (
    // <div>
    //   <BrowserRouter>
    //     <div>
    //       <Route path="/" exact component={PageOne} />
    //       <Route path="/pagetwo" component={PageTwo} />
    //     </div>
    //   </BrowserRouter>
    // </div>
    
    // <div>
    //   <HashRouter>
    //     <div>
    //       <Route path="/" exact component={PageOne} />
    //       <Route path="/pagetwo" component={PageTwo} />
    //     </div>
    //   </HashRouter>
    // </div>

    <div>
      <MemoryRouter>
        <div>
          <Route path="/" exact component={PageOne} />
          <Route path="/pagetwo" component={PageTwo} />
        </div>
      </MemoryRouter>
    </div>
  );
};

export default App;
