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
  const [flyyrs, setFlyyrs] = useState([])

  return (
    <main className="App">
      { user ?
          <>
            <NavBar user={user} setUser={setUser} />
            <Routes>
              {/* Route components in here */}
              <Route path="/" element={<EventBoardPage flyyrs={flyyrs} setFlyyrs={setFlyyrs}/>} />
              <Route path="/flyyr/new" element={<PostFlyyrPage />} />
              <Route path="/profile" element={<ProfileDetailPage />} />
              <Route path="/flyyr/:id" element={<FlyyrDetailPage flyyrs={flyyrs} setFlyyrs={setFlyyrs}/>} />
            </Routes>
          </>
          :
          <AuthPage setUser={setUser} />
      }
    </main>
  );
}
