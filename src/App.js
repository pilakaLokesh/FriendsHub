import React, { useEffect, useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.css';
import Home from './Home';
import UserAuth from './UserAuth';
import PersonDetails from './PersonDetails';
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from './firebase';

function App() {
  const [presentUser, setPresentUser] = useState(null);

  useEffect(() => {
    document.title = "Porn Rangers";

    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setPresentUser({
          uid: user.uid,
          email: user.email,
        });
      } else {
        setPresentUser(null);
      }
    });

    return () => unsubscribe();
  }, []);

  return (
    <div className="App">
      <center>
        <Routes>
          <Route path="/login" element={<UserAuth />} />
          <Route path="/" element={presentUser ? <Home presentUser={presentUser} /> : <UserAuth />} />
          <Route path="/details/:id" element={<PersonDetails />} />
        </Routes>
      </center>
    </div>
  );
}

export default App;
