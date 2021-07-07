import React from "react";
import { BrowserRouter, Switch, Route} from "react-router-dom";
import People from "./components/People";
import PeopleDetail from "./components/PeopleDetail";
import Films from "./components/Films";
import FilmsDetail from "./components/FilmsDetail";
import Navbar from "./components/Navbar";

// To Do:
// 
// 4. Once you have that route working, configure another one for `/films/:filmid`. With this route, you should be able to craft a Link for any film you have displayed on `/films` to navigate to `/films/<id>`, where you will list out all of the information pertaining to only that film.
// 5. Repeat step 4 for people & peopleid


const App = () => {


  return (
    <BrowserRouter>
      <Navbar />
      <Switch>
        <Route exact path="/">
          {/* Link to nothing for landing page? Okay with just navbar?*/}
        </Route>
        <Route exact path="/films">
          {/* Link to Films.jsx */}
          <Films />
        </Route>
        <Route exact path="/films/:filmid">
          {/* Link to Films.jsx */}
          <FilmsDetail />
        </Route>
        <Route exact path="/people">
          {/* Link to People.jsx */}
          <People />
        </Route>
        <Route exact path="/people/:peopleid">
          {/* Link to People.jsx */}
          <PeopleDetail />
        </Route>
      </Switch>
    </BrowserRouter>
  );
};

export default App;
