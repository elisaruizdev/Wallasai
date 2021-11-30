import "./App.css";
import React, { useState } from "react";
import { Route, Switch, BrowserRouter as Router } from "react-router-dom";
import { Home, Login, Profile, Register, Bonsais, Cactus, CarnivorousPlants, Trees,DetailPlant, TipsArbol, TipsBonsai, TipsCactus } from "./pages";
import { Nav, Footer } from "./layouts";
import { AuthRoute, LoginModal,RegisterModal, SearchModal } from "./components";

export const UserContext = React.createContext(null);

function App() {
  const [user, setUser] = useState(null);
  const authenticated = user != null;

  const saveUser = (user) => {
    setUser(user);

  };
  return (
    <div className="App">
      
      <Router>
        <UserContext.Provider value={{ user, saveUser }}>
          <Nav/>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/login" component={Login} />
            <Route path="/register" component={Register} />
            <Route path="/bonsais" component={Bonsais} />
            <Route path="/cactus" component={Cactus} />
            <Route path="/carnivorousplants" component={CarnivorousPlants} />
            <Route path="/trees" component={Trees} />
            <Route path="/loginmodal" component={LoginModal} />
            <Route path="/registermodal" component={RegisterModal} />
            <Route path="/searchmodal" component={SearchModal} />
            <Route path="/tipscactus" component={TipsCactus} />
            <Route path="/tipsbonsai" component={TipsBonsai} />
            <Route path="/tipsarbol" component={TipsArbol} />
            <Route path="/detail" component={DetailPlant} />
           
            <AuthRoute
              authenticated={authenticated}
              path="/profile"
              render={(props) => <Profile user={user} {...props} />}
            />
          </Switch>
          <Footer/>
        </UserContext.Provider>
      </Router>
    </div>
  );
}

export default App;
