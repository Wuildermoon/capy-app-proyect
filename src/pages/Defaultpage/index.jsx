import { Outlet } from "react-router-dom";
import Header from "../../layouts/Header";
import MobileNavbar from "../../layouts/MobileNavbar";
import { StyledMain, StyledDefaultpageDiv } from "./Defaultpage.styles.jsx";

const DefaultPage = () => {
  return (
    <>
      <StyledDefaultpageDiv>
        <Header />
        <div className="nav-mobile">
          <MobileNavbar />
        </div>
      </StyledDefaultpageDiv>
      <StyledMain>
        <Outlet />
      </StyledMain>
    </>
  );
};

export default DefaultPage;
