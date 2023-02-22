import logo from './logo.svg';
import './App.css';
import Header from './components/header';
import Banner from './components/banner';
import Footer from './components/footer';
import Joke from './components/joke';

function App() {
  return (
    <div className='app'>
      <Header />
      <Banner />
      <div className="body">
        <Joke data="daksdhksajhdaksjhdak" />
      </div>
      <Footer/>
    </div>
  );
}

export default App;
