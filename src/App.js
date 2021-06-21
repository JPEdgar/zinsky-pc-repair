import React from "react";

import { Container } from "react-bootstrap";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Navigation from "./components/Navigation";
import SocialMedia from "./components/SocialMedia";
import Footer from "./components/Footer";

import "bootstrap/dist/css/bootstrap.min.css";
// import "bootstrap-social.css"

export default function App() {
  return (
    <Container>
      <Router>
        <Navigation />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/about" component={About} />
          <Route path="/contact" component={Contact} />
        </Switch>
      </Router>
      <SocialMedia />
      <Footer />
    </Container>
  );
}
