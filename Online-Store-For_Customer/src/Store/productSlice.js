import { createSlice } from "@reduxjs/toolkit";
const initialProductState = { items: [], status: null }

const productSlice = createSlice({
    name: "product",
    initialState: initialProductState,
    reducers: {
        addProduct(state, action) {
            const addedItem = action.payload
            const existingItemIndex = state.items.findIndex((item) => item.id === addedItem.id)
            if (existingItemIndex !== -1) {
                state.items[existingItemIndex].quantity += 1;
            } else {
                state.items.push({ ...addedItem, quantity: 1 });
            }
        },
        deleteProduct(state, action) {
            const deletedItem = action.payload
            const existingItemIndex = state.items.findIndex((item) => item.id === deletedItem.id)
            state.items.splice(existingItemIndex, 1)
        },
        removeOneProduct(state, action) {
            const removedProduct = action.payload;
            const existingItemIndex = state.items.findIndex((item) => item.id === removedProduct.id)

            if (existingItemIndex !== -1) {

                if (existingItemIndex.quantity === 1) {
                    state.items.splice(existingItemIndex, 1)
                } else {
                    state.items[existingItemIndex].quantity -= 1;
                }
            }
        }
    }
})

export const productActions = productSlice.actions;
export default productSlice.reducer