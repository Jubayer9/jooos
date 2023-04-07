import { getShoppingCart } from "../utilities/fakedb";

const cartProductsLoader = async () => {
const loadedProducts = await fetch('products.json');
const products = await loadedProducts.json();
//if cart data is in database , you have to use async await 
const storesCart = getShoppingCart ()
const saveCart =[];
console.log(storesCart)
for(const id in storesCart){
    const addedProduct = products.find(pd => pd.id === id);
    if(addedProduct){
        const quantity= storesCart[id]
        addedProduct.quantity =quantity;
        saveCart.push(addedProduct);
    }
}
// if you need to send tow things
// return [products,saveCart];
//another options
// return {products, cart: saveCart}
return saveCart
}
export default cartProductsLoader