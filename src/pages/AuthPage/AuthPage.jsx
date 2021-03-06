import { useState } from 'react';
import SignUpForm from '../../components/SignUpForm/SignUpForm';
import LoginForm from '../../components/LoginForm/LoginForm';
import Logo from '../../assets/FlyyrPostLogo.png'
import './AuthPage.css'

export default function AuthPage({ setUser }) {
  const [showLogin, setShowLogin] = useState(true);

  return (
    <main>
      <div className='logo'>
        <img className='logo' src={Logo} alt="FlyyrPost Logo" />
      </div>
      <div>
        <h2>Celebrate the Graphic Designer in all of us on FlyyrPost!</h2>
      </div>
      <button onClick={() => setShowLogin(!showLogin)}>{showLogin ? 'Sign Up' : 'Log In'}</button>
      { showLogin ?
        <LoginForm setUser={setUser} />
        :
        <SignUpForm setUser={setUser} />
      }
    </main>
  );
}