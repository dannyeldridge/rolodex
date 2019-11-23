import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { AuthProvider } from './auth';
import PrivateRoute from './PrivateRoute'
import Home from './Home'
import Login from './Login'
import SignUp from './SignUp'
import styled from 'styled-components'
import ContactApp from './ContactApp'
import Test from './Test'

const StyledWrapper = styled.div`
  background: #DFD6BA;
  text-align: center;
  min-height: 100vh;
`
function App() {
  return (
    <AuthProvider>
      <Router>
        <StyledWrapper>
          {/* <PrivateRoute exact path='/' component={ContactApp} /> */}
          <Route exact path='/test' component={Test} />
          <Route exact path='/login' component={Login} />
          <Route exact path='/signup' component={SignUp} />
        </StyledWrapper>
      </Router>
    </AuthProvider>
  );
}

export default App;
