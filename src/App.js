import './App.css';
import Header from './components/header';
import Banner from './components/banner';
import Footer from './components/footer';
import Joke from './components/joke';
import { useEffect, useState } from 'react';
import { useCookies } from 'react-cookie';
import axios from 'axios';

function App() {
  const [cookies, setCookie] = useCookies(['current-joke']);
  const [currentJoke, setCurrentJoke] = useState({
    content: '', id: null,
  });

  useEffect(()=> {
    if (!cookies['current-joke']){
      setCookie('current-joke', 1);
    }
  },[])

  useEffect(()=>{
    if (cookies['current-joke']){
      axios.get(`${process.env.REACT_APP_API_URL}/jokes/${cookies['current-joke']}`)
        .then(res=> {
          const { data } = res;
          console.log(data);
          if (data.length > 0){
            setCurrentJoke(data[0]);
          }else{
            setCurrentJoke({
              content: "That's all the jokes for today! Come back another day!",
              id: null,
            })
          }
        })
        .catch(err =>{
          console.error(err);
        });
    }
  },[cookies])

  const handleLike = () => {
    axios.put(`${process.env.REACT_APP_API_URL}/jokes/${currentJoke.id}/like`)
      .then(res=> {
        setCookie('current-joke', currentJoke.id + 1);
      })
      .catch(err =>{
        console.error(err);
      });
  }

  const handleDislike = () => {
    axios.put(`${process.env.REACT_APP_API_URL}/jokes/${currentJoke.id}/dislike`)
      .then(res=> {
        setCookie('current-joke', currentJoke.id + 1);
      })
      .catch(err =>{
        console.error(err);
      });
  }

  return (
    <div className='app'>
      <Header />
      <Banner />
      <div className="body">
        <Joke data={currentJoke} onLike={handleLike} onDislike={handleDislike} />
      </div>
      <Footer/>
    </div>
  );
}

export default App;
