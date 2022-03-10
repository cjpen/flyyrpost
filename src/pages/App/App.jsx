import { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.css';
import NavBar from '../../components/NavBar/NavBar';
import AuthPage from '../AuthPage/AuthPage';
import EventBoardPage from '../EventBoardPage/EventBoardPage';
import ProfileDetailPage from '../ProfileDetailPage/ProfileDetailPage';
import PostFlyyrPage from '../PostFlyyrPage/PostFlyyrPage';
import FlyyrDetailPage from '../FlyyrDetailPage/FlyyrDetailPage';
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
              <Route path="/" element={<EventBoardPage />} />
              <Route path="/flyyr/new" element={<PostFlyyrPage />} />
              <Route path="/profile" element={<ProfileDetailPage />} />
              <Route path="/:id" element={<FlyyrDetailPage />} />
            </Routes>
          </>
          :
          <AuthPage setUser={setUser} />
      }
    </main>
  );
}
