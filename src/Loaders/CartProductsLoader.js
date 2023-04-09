import { getShoppingCart } from "../../utilities/fakedb";

const cartProductLoader = async () => {
  const loadProducts = await fetch('products.json');
  const products = await loadProducts.json();

  // if cart data is in database, you have to use async await
  const storedCart = getShoppingCart();

  const savedCart = [];
  // console.log(storedCart);
  for (const id in storedCart) {
    const addedProduct = products.find(pd => pd.id === id);
    if (addedProduct){
      const quantity = storedCart[id];
      addedProduct.quantity = quantity;
      savedCart.push(addedProduct);
    }
  }

  return savedCart;

  //if you need to two things
  // return [products,savedCart];
  //another option 
  // return {products, cart: savedCart}

}
export default cartProductLoader;