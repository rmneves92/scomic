import React from "react";
import { useSelector } from "react-redux";
import { useHistory } from "react-router-dom";

const Header = (props) => {
  const data = useSelector((state) => state.comics.data);

  const history = useHistory();
  return (
    <>
      <button onClick={() => history.push("/")}>Home</button>
      <button onClick={() => history.push("/checkout")}>Checkout</button>
    </>
  );
};

export default Header;
