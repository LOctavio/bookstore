import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Link,
} from 'react-router-dom';
import ReactDOM from 'react-dom';
import { FaUser } from 'react-icons/fa';
import { Provider } from 'react-redux';
import Categories from './redux/categories/categories';
import Books from './components/Books';
import store from './redux/configureStore';
import './App.css';

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <Router>
        <nav className="navbar">
          <h1>Bookstore</h1>
          <ul className="nav-links">
            <li>
              <Link to="/" className="home-link">HOME</Link>
            </li>
            <li>
              <Link to="/categories" className="categories-link">CATEGORIES</Link>
            </li>
          </ul>
          <div className="profile-img">
            <div className="circle">
              <FaUser className="user-icon" />
            </div>
          </div>
        </nav>
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
