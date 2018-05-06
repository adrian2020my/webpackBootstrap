import React, { Component } from 'react';
import {Route, Switch, BrowserRouter} from 'react-router-dom';
import HomeUploadView from './components/HomeUploadView.jsx'
import logo from './logo.svg';
import './App.css';
import {Provider } from 'react-redux';
import {createStore, applyMiddleware} from 'redux';
import ReduxThunk from 'redux-thunk'
import './css/test.scss';
import './css/custom.scss';
import 'bootstrap';


let store = createStore(
    applyMiddleware(ReduxThunk)
);

class App extends Component {
  render() {
    return (
        <Provider store={store}>
          <BrowserRouter>
            <Switch>
              <Route exact path="/" component={HomeUploadView}/>
            </Switch>
          </BrowserRouter>
        </Provider>
    );
  }
}

export default App;
