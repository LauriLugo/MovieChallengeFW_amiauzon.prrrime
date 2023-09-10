import HomePage from "./home_page/home_page";
import LogoPage from "./logo_page/logo_page";
import PlayPage from "./play_page/play_page";
import { useState } from "react";

function App() {
  const [logo, setLogo] = useState(true);
  // esperar 5 segundos para mostrar home-page 
  setTimeout(() => {
    setLogo(false);
  }, 5000);

  if (logo) {
    return (
      <LogoPage />
    ); 
  } else {
    return (
      <HomePage/>
    );
  }

}

export default App;