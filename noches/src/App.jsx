import "./App.css";
import { Boot } from "./boot";
import { Amiguo } from "./compas/compas";

function App() {
  return (
    <div className="boddy">
      <header>
        <span className="title">
          Boludeces
          <span className="  two">para mis Lokitas</span>
        </span>
        <br />
      </header>

      <br />

      <Amiguo />
      <Boot />
    </div>
  );
}

export default App;
