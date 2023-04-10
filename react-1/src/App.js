import Navbar from "./Components/navbar";
import Main from "./Components/main";
import { useState } from "react";


function App() {
  const [lightMode, setLightMode] = useState(false)

  function toggleLightMode() {
    return setLightMode(prevLightMode => !prevLightMode)
  }
  return (    
    <div className="App">      
      <Navbar lightMode={lightMode} toggleLightMode={toggleLightMode} />
      <Main lightMode={lightMode} />      
    </div>
  );
}

export default App;
