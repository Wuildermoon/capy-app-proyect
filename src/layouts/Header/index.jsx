import Logo from "../../components/Logo";
import StyledHeader from "./Header.styles";
import Navbar from "../../components/Navbar";
import Optionsbar from "./Optionsbar";

const Header = () => {
  return (
    <StyledHeader>
      <div className="container">
        <Logo />
        <Navbar />
        <Optionsbar />
      </div>
    </StyledHeader>
  );
};

export default Header;
