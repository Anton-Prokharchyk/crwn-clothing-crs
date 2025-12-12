import { useContext } from "react";
import { CartContext } from "../../contexts/cart/cart.context";
import "./checkout-item.styles.scss";

export const CheckoutItem = ({ cartItem }) => {
  const { name, imageUrl, price, quantity } = cartItem;
  const { deleteItemFromCart, removeItemFromCart, addItemToCart } =
    useContext(CartContext);
  const handleDeleteItem = () => deleteItemFromCart(cartItem);
  const handleRemoveItem = () => removeItemFromCart(cartItem);
  const handleAddItem = () => addItemToCart(cartItem);
  return (
    <div className="checkout-item-container">
      <div className="image-container">
        <img src={imageUrl} alt={name} />
      </div>
      <span className="name">{name}</span>
      <span className="price">${price}</span>
      <span className="quantity">
        <div onClick={handleRemoveItem} className="arrow">
          &#10094;
        </div>
        <span className="value">{quantity}</span>
        <div onClick={handleAddItem} className="arrow">
          &#10095;
        </div>
      </span>
      <span onClick={handleDeleteItem} className="remove-button">
        &#10005;
      </span>
    </div>
  );
};
