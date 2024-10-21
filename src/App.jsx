import AppRoutes from "./routes/routes";
import { ThemeProvider } from "./styles/theme/theme";
import FontMontserratAlternates from "./styles/FontMontserratAlternates";
import FontQuestrial from "./styles/Questrial";
import GlobalStyles from "./styles/GlobalStyles";
import GlobalContextProvider from "./contexts/GlobalContext";
import { Suspense } from "react";

function App() {
  return (
    <>
      <GlobalContextProvider>
        <ThemeProvider>
          <FontMontserratAlternates />
          <FontQuestrial />
          <GlobalStyles />
            <Suspense fallback="Loading">
              <AppRoutes />
            </Suspense>
        </ThemeProvider>
      </GlobalContextProvider>
    </>
  );
}

export default App;
