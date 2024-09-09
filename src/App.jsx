import AppRoutes from "./routes/routes";
import GlobalStyles from "./styles/GlobalStyles";
import FontMontserratAlternates from "./styles/FontMontserratAlternates";
import FontQuestrial from "./styles/Questrial";
import GlobalContextProvider from "./contexts/GlobalContext";

function App() {
  return (
    <>
      <GlobalContextProvider>
        <FontMontserratAlternates />
        <FontQuestrial />
        <GlobalStyles />
        <AppRoutes />
      </GlobalContextProvider>
    </>
  );
}

export default App;
