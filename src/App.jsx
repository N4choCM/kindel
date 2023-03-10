import { detalleCard } from "./data/info.js";

import CarouselApp from "./components/CarouselApp";
import NavBar from "./components/NavBar";
import CardApp from "./components/CardApp.jsx";
import { useState } from "react";
import FooterApp from "./components/FooterApp.jsx";

function App() {
  const [darkMode, setDarkMode] = useState(false)

  const cambiarModoOscuro = () => {
    setDarkMode(!darkMode)
  }

  return (
    <div className={darkMode ? "bg-secondary" : ""}>
      {/* Agregar los componentes  */}
      <NavBar cambiarModoOscuro={cambiarModoOscuro} darkMode={darkMode}/>
      <CarouselApp />
      <div className="container">
        <div className="row my-5">
          {detalleCard.map((item, index) => (
            <CardApp key={index} item={item} darkMode={darkMode} />
          ))}
        </div>
      </div>
      <FooterApp cambiarModoOscuro={cambiarModoOscuro} darkMode={darkMode} />
    </div>
  );
}

export default App;
