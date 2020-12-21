import React, { Component } from 'react';
import {Switch, Route, Redirect, BrowserRouter} from 'react-router-dom';
import UploadFile from './components/UploadFile';
import FormData from './components/FormData';
import SignDocument from './components/SignDocument';

class App extends Component{

  render(){
    return (
        <BrowserRouter>
          <div>
          <Switch>
              <Route path="/UploadFile" component={UploadFile} />
              <Route path="/FormData" component={FormData} />
              <Route path="/SignDocument" component={SignDocument} />
              <Redirect to="UploadFile" />
            </Switch>
          </div>
        </BrowserRouter>
    );
  }
}

export default App;
