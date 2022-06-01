// index.jsx is the entry point of the app

import React from 'react';
import ReactDOM from 'react-dom';
import Container from 'react-bootstrap/Container';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import { devToolsEnhancer } from 'redux-devtools-extension';
import moviesApp from './reducers/reducers';
// since MainView was exported as a default component no curly braces are needed
import MainView from './components/main-view/main-view';


// Import statement to indicate that we need to bundle `./index.scss`
import './index.scss';

// create store
const store = createStore(moviesApp, devToolsEnhancer());

// Main component (will eventually use all the others)
// all the components inside the Provider have access to the store
class MyFlixApplication extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <Container>
          <MainView />
        </Container>
      </Provider>
    );
  }
}

// Find the root of our app
const container = document.getElementsByClassName('app-container')[0];

// Tell React to render our app in the root DOM element
ReactDOM.render(React.createElement(MyFlixApplication), container);