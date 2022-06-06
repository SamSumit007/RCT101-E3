import React, { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";
import { CartContext } from "../../context/CartContext";
// use react-router Link or NavLink


const Navbar = () => {
  const { isAuth, logout } = useContext(AuthContext);
  const { cartItemsCount } = useContext(CartContext);
  const navigate = useNavigate();
  const handleLoginClick = () => {
  
    if (isAuth) {
      logout();
    
    } else {
      
      navigate("/login");
    }
  };
  return (
    <div data-cy="navbar"  style={{
      padding: "10px", display: "flex",
      gap: "20px", justifyContent: "space-between",}}>
      <Link data-cy="navbar-home-link" to="/">Logo</Link>
      <span data-cy="navbar-cart-items-count">{/* count here */}
      Cart: {cartItemsCount && `(${cartItemsCount})`}</span>
      <button data-cy="navbar-login-logout-button" onClick={handleLoginClick}>
      {isAuth ? "Logout" : "Login"}
      </button>
    </div>
  );
};

export default Navbar;
