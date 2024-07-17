export default function Cart({ cartItems, handleRemoveFromCart }) {
  return (
    <div>
      <div>No. of items: {cartItems?.length}</div>
      <br />
      <div>
        {cartItems?.map((item, index) => (
          <div key={index}>
            <h3>{item.name}</h3>
            <button onClick={(e) => handleRemoveFromCart(item.name)}>
              Remove From cart
            </button>
          </div>
        ))}
      </div>
      <br />
    </div>
  );
}
