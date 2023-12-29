import React, { createContext, useEffect, useState } from 'react';
import './App.css';
import FullscreenHeader from './components/fullscreenHeader/FullscreenHeader';
import SmallscreenHeader from './components/smallscreenHeader/SmallscreenHeader';
import CardList from './components/cardList/CardList';
import { SizeContextProvider } from './components/context/SizeContext';

function App() {

  const getCurrentDimension = () => ({
    width: window.innerWidth,
    height: window.innerHeight,
  });

  const [screenSize, setScreenSize] = useState(getCurrentDimension());

  useEffect(() => {
    const updateDimension = () => {
      setScreenSize(getCurrentDimension());
    };
    window.addEventListener("resize", updateDimension);

    return () => {
      window.removeEventListener("resize", updateDimension);
    };
  }, [screenSize]);


  const [comments, setComments] = useState([])

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/comments')
      .then((res) => res.json())
      .then((data) => setComments(data.slice(0, 10)))
      .catch((err) => console.log(err))
  }, [])

  const backgroundImage = screenSize.width > 1200 ? "linear-gradient(to bottom right, #040404, #0443F2,#CFCFCF) " : "linear-gradient(to bottom right, #040404, #DC143C,#CFCFCF) "


  return (
    <SizeContextProvider value={screenSize}>
      <div className="App" style={{ backgroundImage: backgroundImage }}>
        {screenSize.width > 1200 ? <FullscreenHeader /> : <SmallscreenHeader />}
        <CardList comments={comments} />
      </div>
    </SizeContextProvider>
  );
}

export default App;
