import { BadgeForge } from "./components/BadgeForge";
import { BadgeForgeContextProvider } from "./contexts/BadgeForgeContext";
import GlobalStyle from "./static/styles/global"

function App() {
  return (
    <div className="App">
      <GlobalStyle />
      <BadgeForgeContextProvider>
        <BadgeForge />
      </BadgeForgeContextProvider>
    </div>
  );
}

export default App;
