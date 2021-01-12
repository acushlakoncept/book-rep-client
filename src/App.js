import React from 'react';
import './App.css';
import Home from './components/Home';
import AuthPage from './components/AuthPage';
import NavigationBar from './components/NavigationBar';
import { Container } from 'react-bootstrap';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Register from './components/Register';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <NavigationBar />
        <Container className="mt-4">
          <Switch>
             <Route exact path="/" component={Home} />
             <Route exact path="/login" component={AuthPage} />
             <Route exact path="/register" component={Register} />
          </Switch>
 
        </Container>
      </div>
    </BrowserRouter>
  );
}

export default App;
