import { useState } from 'react';
import './App.css';
import Footer from './components/organisms/Footer/Footer';
import SideBar from './components/organisms/SideBar/SideBar';
import Home from './components/pages/Home/Home';
import Header from './components/organisms/Header/Header';

const App = () => {

  const [folded, setFolded] = useState(true);
  console.log(folded)

  const handleSideBarChange = ( newState ) => {
    setFolded( newState )
  }

  return (
    <>
      <SideBar
        sideBarWidthChange = { handleSideBarChange }
      />
      <Header
        folded = { folded }
      />
      <Home
        folded = { folded  }
      />
      <Footer
        folded = { folded }
      />
    </>
  );
}
 
export default App;