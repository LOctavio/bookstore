import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Link,
} from 'react-router-dom';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import Categories from './redux/categories/categories';
import Books from './components/Books';
import store from './redux/configureStore';

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <Router>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/categories">categories</Link>
          </li>
        </ul>
        <Switch>
          <Route exact path="/">
            <Books />
          </Route>
          <Route path="/categories">
            <Categories />
          </Route>
        </Switch>
      </Router>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root'),
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
