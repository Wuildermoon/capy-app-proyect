import PropTypes from "prop-types";
import StyledTicketSelectorDiv, {
  CounterButton,
} from "./TicketSelector.styles";
import Plus_Icon from "../../assets/icons/plus";
import Minus_Icon from "../../assets/icons/minus";
import Info_Icon from "../../assets/icons/info";
import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";

const TicketSelector = ({ ticketName, price }) => {
  const { t } = useTranslation("ticket-selector"); // Cargamos las traducciones específicas del componente
  const [quantity, setQuantity] = useState(1);
  const [numericPrice, setNumericPrice] = useState(0);
  const [fee, setFee] = useState(0);
  const [total, setTotal] = useState(0);

  const isPriceFree = price === "Gratis" || price === "Free";

  // Actualizar el numericPrice y recalcular el fee y el total
  useEffect(() => {
    if (isPriceFree) {
      setNumericPrice(0);
      setFee(0);
      setTotal(0);
    } else {
      const parsedPrice = parseFloat(price);
      setNumericPrice(parsedPrice);

      // Calcular el fee como el 10% del total base (precio * cantidad)
      const calculatedFee = parsedPrice * quantity * 0.1;
      setFee(calculatedFee);

      // Calcular el total incluyendo el fee
      const calculatedTotal = parsedPrice * quantity + fee;
      setTotal(calculatedTotal.toFixed(3));
    }
  }, [price, quantity, fee, isPriceFree]);

  const decreaseQuantity = () => {
    setQuantity((prev) => Math.max(1, prev - 1));
  };

  const increaseQuantity = () => {
    setQuantity((prev) => prev + 1);
  };

  const handleCheckout = () => {
    isPriceFree
      ? alert(t("attendance-confirmed"))
      : alert(
          `${t("ticket")}: ${ticketName}, ${t("quantity")}: ${quantity}, ${t(
            "total",
          )}: $${total} COP`,
        );
  };

  return (
    <StyledTicketSelectorDiv>
      <div className="content">
        <div className="ticket-container">
          <div className="ticket-header">
            <span className="ticket-name">{ticketName}</span>
            <div className="counter">
              <CounterButton
                className="counter-button"
                onClick={decreaseQuantity}
              >
                <Minus_Icon />
              </CounterButton>
              <span className="counter-quantity">{quantity}</span>
              <CounterButton
                className="counter-button"
                increase
                onClick={increaseQuantity}
              >
                <Plus_Icon size={16} />
              </CounterButton>
            </div>
          </div>
          <div className="ticket-price">
            <span className="price">
              {isPriceFree ? t("free") : `$${numericPrice.toFixed(3)}`}
            </span>
            <span className="info-icon" data-tooltip={t("tooltip-base-price")}>
              <Info_Icon />
            </span>
          </div>
        </div>
      </div>
      <div className="checkout">
        <button className="checkout-button" onClick={() => handleCheckout()}>
          {isPriceFree ? t("confirm-attendance") : `${t("pay")} $${total} COP`}
        </button>
      </div>
    </StyledTicketSelectorDiv>
  );
};

TicketSelector.propTypes = {
  ticketName: PropTypes.string.isRequired,
  price: PropTypes.string.isRequired,
};

export default TicketSelector;
