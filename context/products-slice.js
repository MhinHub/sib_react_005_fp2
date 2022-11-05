import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    products: [],
    cart: [],
    checkout: [],
    firstRender: true
};

export const ProductsSlice = createSlice({
    name: 'Products',
    initialState,
    reducers: {
        initiateProducts: (state, action) => {
            state.firstRender = false;
            state.products = action.payload;
        },
        updateStock: (state, action) => {
            state.products[action.payload.idx].quantity = action.payload.quantity;
        },
        addCart: (state, action) => {
            let idx = -1;

            const { cartData, qty, isCart } = action.payload;

            const isProductFound = state.cart.some((data, dataIdx) => {
                if (data.id === cartData.id) {
                    idx = dataIdx;
                    return true;
                }
                return false;
            });

            if (isProductFound) {
                if (isCart)
                    qty ? state.cart[idx].cartQuantity = parseInt(qty) : state.cart[idx].cartQuantity = qty;
                else
                    state.cart[idx].cartQuantity += parseInt(qty);
                state.cart[idx].isOverStock = state.cart[idx].quantity < state.cart[idx].cartQuantity;
            } else {
                state.cart.push({ ...cartData, cartQuantity: qty, isOverStock: cartData.quantity < 1 });
            }
        },
        addCheckout: (state) => {
            let idx = -1;
            state.cart.forEach(item => {
                if (item.cartQuantity >= 1) {
                    const isProductFound = state.checkout.some((data, dataIdx) => {
                        if (data.id === item.id) {
                            idx = dataIdx;
                            return true;
                        }
                        return false;
                    });

                    if (isProductFound)
                        state.checkout[idx].sold += parseInt(item.cartQuantity);
                    else
                        state.checkout.push({ ...item, sold: item.cartQuantity });

                    state.products.forEach((product, productIdx) => {
                        if (product.id === item.id)
                            state.products[productIdx].quantity -= item.cartQuantity;
                    })
                }
            })

            state.cart = [];
        },
    }
});

export const { initiateProducts, updateStock, addCart, addCheckout } = ProductsSlice.actions;

export default ProductsSlice.reducer;