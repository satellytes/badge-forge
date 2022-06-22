import { ThemeProvider } from "styled-components";
import { BadgeForge } from "./components/BadgeForge";
import { BadgeForgeContextProvider } from "./contexts/BadgeForgeContext";
import GlobalStyle from "./static/styles/global";
import { Theme } from "./theme/theme";

function App() {
  return (
    <div className="App">
      <ThemeProvider theme={Theme}>
        <GlobalStyle />
        <BadgeForgeContextProvider>
          <BadgeForge />
        </BadgeForgeContextProvider>
      </ThemeProvider>
    </div>
  );
}

export default App;
