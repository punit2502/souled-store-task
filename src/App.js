import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Header from "./components/Header/Header";
import Home from "./components/Home/Home";
import Footer from "./components/Footer/Footer";
import Explore from "./components/Explore/Explore";
import HomeOld from "./components/Home/Home-old";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/old" component={HomeOld} />
        <Route exact path="/explore" component={Explore} />
      </Switch>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
