import AppRoutes from "./routes/routes";
import GlobalStyles from "./styles/GlobalStyles";
import FontMontserratAlternates from "./styles/FontMontserratAlternates";
import FontQuestrial from "./styles/Questrial";
import GlobalContextProvider from "./contexts/GlobalContext";
import { ThemeProvider } from "./styles/theme/theme";

function App() {
  return (
    <>
      <GlobalContextProvider>
        <ThemeProvider>
          <FontMontserratAlternates />
          <FontQuestrial />
          <GlobalStyles />
          <AppRoutes />
        </ThemeProvider>
      </GlobalContextProvider>
    </>
  );
}

export default App;
