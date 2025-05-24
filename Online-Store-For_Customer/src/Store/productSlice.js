import { createSlice } from "@reduxjs/toolkit";
const initialProductState = { items: [], status: null, totalQuantity: 0, totalPrice: 0, sameProductprice: 0, size: "" }

const productSlice = createSlice({
    name: "product",
    initialState: initialProductState,
    reducers: {
        addProduct(state, action) {
            const addedItem = action.payload
            // const existingItemSizeIndex = state.items.findIndex((item) => item.size === addedItem.size)
            const existingItemIndex = state.items.findIndex((item) => ((item.id === addedItem.id) && (item.size === addedItem.size)))
            if (existingItemIndex !== -1) {
                state.items[existingItemIndex].quantity += 1;
                state.items[existingItemIndex].totalSameItemPrice += addedItem.price;
            } else {
                state.items.push({ ...addedItem, quantity: 1, totalSameItemPrice: addedItem.price, size: addedItem.size });
            }
            state.totalQuantity += 1;
            state.totalPrice += addedItem.price;
        },

        deleteProduct(state, action) {
            const deletedItem = action.payload
            const existingItemIndex = state.items.findIndex((item) => ((item.id === deletedItem.id) && (item.size === deletedItem.size)))
            state.totalQuantity -= state.items[existingItemIndex].quantity;
            state.totalPrice -= deletedItem.totalSameItemPrice;
            state.items.splice(existingItemIndex, 1)
        },
        removeOneProduct(state, action) {
            const removedProduct = action.payload;
            const existingItemIndex = state.items.findIndex(
                (item) => ((item.id === removedProduct.id) && (item.size === removedProduct.size))
            );

            if (existingItemIndex !== -1) {
                const item = state.items[existingItemIndex];
                if (item.quantity > 1) {
                    item.quantity -= 1;
                    item.totalSameItemPrice -= item.price;
                    state.totalPrice -= item.price;
                    state.totalQuantity--;
                } else {
                    state.totalQuantity -= 1;
                    state.totalPrice -= item.price;
                    state.items.splice(existingItemIndex, 1)
                }
            }
        },

        changeProductSize(state, action) {
            const { id, oldSize, newSize } = action.payload;

            const itemIndex = state.items.findIndex(
                (item) => item.id === id && item.size === oldSize
            );

            if (itemIndex !== -1) {
                const existingItem = state.items[itemIndex];

                const targetIndex = state.items.findIndex(
                    (item) => item.id === id && item.size === newSize
                );

                if (targetIndex !== -1) {
                    state.items[targetIndex].quantity += existingItem.quantity;
                    state.items[targetIndex].totalSameItemPrice += existingItem.totalSameItemPrice;
                    state.items.splice(itemIndex, 1);
                } else {
                    state.items[itemIndex].size = newSize;
                }
            }
        }
    }
})

export const productActions = productSlice.actions;
export default productSlice.reducer;