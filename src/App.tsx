import "./App.css";
import { BadgeForge } from "./components/BadgeForge";
import { BadgeForgeContextProvider } from "./contexts/BadgeForgeContext";

function App() {
  return (
    <div className="App">
      <BadgeForgeContextProvider>
        <BadgeForge />
      </BadgeForgeContextProvider>
    </div>
  );
}

export default App;
