import { useState } from 'react';
import './App.css';
import Footer from './components/organisms/Footer/Footer';
import SideBar from './components/organisms/SideBar/SideBar';
import Home from './components/pages/Home/Home';

const App = () => {

  const [folded, setFolded] = useState(false)

  const handleSideBarChange = ( newState ) => {
    setFolded( newState )
  }

  return (
    <>
      <SideBar
        sideBarWidthChange = { handleSideBarChange }
      />
      <Home
        folded = { folded  }
      />
      <Footer/>
    </>
  );
}
 
export default App;