import 'bootstrap/dist/css/bootstrap.min.css';
import './Header.css';
import ravenImg from './raven.png';

function Header() {
  return (
    <div className='container'>
        <img src={ravenImg}></img>
        <h1 style={{color: 'white'}}>Quote Machine Generation</h1>
        <img src={ravenImg}></img>
    </div>
  );
}

export default Header;
