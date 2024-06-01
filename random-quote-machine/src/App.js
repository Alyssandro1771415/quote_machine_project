import './App.css';
import Wrapper from './components/Wrapper/Wrapper';
import Footer from './components/Footer/Footer';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header Title/Header';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <hr></hr>
      <Wrapper id="wrapper"></Wrapper>
      <hr></hr>
      <Footer></Footer>
    </div>
  );
}

export default App;
