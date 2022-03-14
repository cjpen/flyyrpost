import { Link } from 'react-router-dom';
import "./NavBar.css"
import * as userService from '../../utilities/users-service';
import Logo from '../../assets/FlyyrPostLogo.png'


export default function NavBar({ user, setUser }) {
  function handleLogOut() {
    userService.logOut();
    setUser(null);
  }

  return (
    <nav>
      <Link to="/"><img className='nav-icons' src={Logo} alt='home'/></Link>
      &nbsp; | &nbsp;
      <Link to="/profile">profile</Link>
      &nbsp; | &nbsp;
      <Link to="/flyyr/new">Post Flyyr!</Link>
      &nbsp; | &nbsp;
      <span>Welcome, {user.name}</span>
      &nbsp; | &nbsp;
      <Link onClick={handleLogOut} to="">Log Out</Link>
    </nav>
  );
}