import { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.css';
import NavBar from '../../components/NavBar/NavBar';
import AuthPage from '../AuthPage/AuthPage';
import EventBoard from '../EventBoard/EventBoard';
import ProfileDetail from '../ProfileDetail/ProfileDetail';
import FlyyrDetail from '../FlyyrDetail/FlyyrDetail';
import { getUser } from '../../utilities/users-service';

export default function App() {
  const [user, setUser] = useState(getUser());

  return (
    <main className="App">
      { user ?
          <>
            <NavBar user={user} setUser={setUser} />
            <Routes>
              {/* Route components in here */}
              <Route path="/" element={<EventBoard />} />
              <Route path="/profile" element={<ProfileDetail />} />
              <Route path="/:id" element={<FlyyrDetail />} />
            </Routes>
          </>
          :
          <AuthPage setUser={setUser} />
      }
    </main>
  );
}
