import { Outlet } from "react-router-dom";
import Header from "../../layouts/Header";
import MobileNavbar from "../../layouts/MobileNavbar";
import { StyledDefaultpageDiv } from "./Defaultpage.styles.jsx";
import Footer from "../../layouts/Footer/index.jsx";

const DefaultPage = () => {
  return (
    <>
      <StyledDefaultpageDiv>
        <Header />
        <div className="nav-mobile">
          <MobileNavbar />
        </div>
        <main>
          <Outlet />
        </main>
        <Footer />
      </StyledDefaultpageDiv>
    </>
  );
};

export default DefaultPage;
