import { Link } from "react-router-dom";

import StyledH1 from "./Logo.styles";

const Logo = () => {
  return (
    <Link to="/">
      <StyledH1>Capy</StyledH1>
    </Link>
  );
};

export default Logo;
