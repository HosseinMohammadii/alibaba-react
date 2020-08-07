import React from 'react';

import Home from './components/Home';
import Hotel from './components/Hotel';
import Header from './components/Header';
import Footer from './components/Footer';
import SignUpAndSignIn from './components/SignUpAndSignIn';
import { Switch, Route, Redirect } from "react-router-dom";
import ErrorPage from "./components/ErrorPage";

function App() {
  return (
    <>
      <Header />


      <Switch>
        <Route exact path="/" render={() => (<Redirect to="/home" />)} />
        <Route exact path="/home" component={Home} />
        <Route exact path="/hotel/:id" component={Hotel} />
        <Route exact path="/login" component={SignUpAndSignIn} />
        <Route exact path="/error/403" render={() => (<ErrorPage status={403} message={'شما به این محتوا دسترسی ندارید :)'} />)} />
        <Route render={() => (<ErrorPage status={404} message={'صفحه مورد نظر شما وجود ندارد!'} />)} />
      </Switch>

      <Footer />
    </>
  );
}

export default App;
