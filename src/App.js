import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';


import Contact from './components/Hcontact.jsx';
import Signup from './components/Hsignup.jsx';
import Login from './components/Hlogin.jsx';
import Echos from './components/Hechos.jsx';
import Test from './components/Test.jsx';
import Create from './components/Hcreatepost.jsx'
import Echo from './components/Hecho.jsx';
import Profile from './components/sub/profile.jsx'



const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Echos />} />
        <Route path="/echos" element={<Echos />} />
         <Route path="login" element={<Login />} />
         <Route path="signup" element={<Signup />} />
         <Route path="contact" element={<Contact />} />
         <Route path="/homepage" element={<Test />} />
         <Route path="/createpost" element={<Create />} />
         <Route path="/echo" element={<Echo />} />
         <Route path="/profile" element={<Profile />} />
        
      </Routes>
    </Router>
  );
};

export default App;