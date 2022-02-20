import './App.css';
import AuthUser from './components/AuthUser';
import Customer from './components/Customer';
import Employee from './components/Employee';
import LoginForm from './components/LoginForm';
import Navbar from './components/Navbar';
import UserList from './components/UserList';
import UserListFetch from './components/UserListFetch';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from 'react-router-dom';
import UserDetails from './components/UserDetails';
import About from './components/About';

const App = () => {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Navigate to="/contact/list" />} />
          <Route path="/contact/list" element={<UserListFetch />} />
          <Route path="/contact/list/:id" element={<UserDetails />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </Router>
    </>
  );
};

export default App;
