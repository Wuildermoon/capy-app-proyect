import { BrowserRouter, Route, Routes } from "react-router-dom";
import Homepage from "../pages/Homepage";
import NotFound from "../pages/NotFound/index.jsx";
import DefaultPage from "../pages/Defaultpage/index.jsx";
import DetailsView from "../pages/DetailView/index.jsx";
import CommingSoon from "../pages/CommingSoon/index.jsx";
import Maps from "../pages/Maps/index.jsx";

const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<DefaultPage />}>
          <Route index element={<Homepage />} />
          <Route path="/events/:id" element={<DetailsView />} />
          <Route path="/tourism/:id" element={<DetailsView />} />
          <Route path="/maps" element={<Maps />} />
          <Route path="/coming_soon" element={<CommingSoon />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

// sombras para el hover de los eventos:
/* article::after {
    content: "";
    width: 100%;
    height: 100%;
    inset: 0;
    position: absolute;
    background: inherit;
    filter: blur(40px) saturate(400%);
    z-index: -1;
  } */

export default AppRoutes;
