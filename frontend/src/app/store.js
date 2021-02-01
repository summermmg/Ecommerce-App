import { configureStore} from '@reduxjs/toolkit';
import productsReducer from '../features/products/productsSlice' 
import productReducer from '../features/product/productSlice' 
import cartReducer from '../features/cart/cartSlice'

export default configureStore({
  reducer: {
    products: productsReducer,
    product: productReducer,
    cart: cartReducer,
  },
});
