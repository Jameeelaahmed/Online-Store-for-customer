import { createSlice } from "@reduxjs/toolkit";
const initialProductState = { items: [], status: null, totalQuantity: 0, totalPrice: 0, sameProductprice: 0, size: "" }

const productSlice = createSlice({
    name: "product",
    initialState: initialProductState,
    reducers: {
        addProduct(state, action) {
            const addedItem = action.payload
            const existingItemSizeIndex = state.items.findIndex((item) => item.size === addedItem.size)
            const existingItemIndex = state.items.findIndex((item) => item.id === addedItem.id)
            if (existingItemSizeIndex !== -1 && existingItemIndex !== -1) {
                state.items[existingItemSizeIndex].quantity += 1;
                state.items[existingItemSizeIndex].totalSameItemPrice += addedItem.price;
            } else {
                state.items.push({ ...addedItem, quantity: 1, totalSameItemPrice: addedItem.price, size: addedItem.size });
            }
            state.totalQuantity += 1;
            state.totalPrice += addedItem.price;
        },

        deleteProduct(state, action) {
            const deletedItem = action.payload
            const existingItemIndex = state.items.findIndex((item) => item.id === deletedItem.id)
            state.totalQuantity -= state.items[existingItemIndex].quantity;
            state.totalPrice -= deletedItem.totalSameItemPrice;
            state.items.splice(existingItemIndex, 1)
        },
        removeOneProduct(state, action) {
            const removedProduct = action.payload;
            const existingItemIndex = state.items.findIndex((item) => item.id === removedProduct.id)
            if (existingItemIndex !== -1) {
                if (state.items[existingItemIndex].quantity > 1) {
                    state.items[existingItemIndex].totalSameItemPrice -= state.items[existingItemIndex].price;
                    state.items[existingItemIndex].quantity -= 1;
                    state.totalPrice -= state.items[existingItemIndex].price;
                    state.totalQuantity--;
                } else {
                    state.items.splice(existingItemIndex, 1)
                    return;
                }
            }
        }
    }
})

export const productActions = productSlice.actions;
export default productSlice.reducer;