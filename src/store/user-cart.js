import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    isPurchaseModalOpen: false,
    isBought: false,
    chosenProducts: [],
};

const userCart = createSlice({
    name: 'userCart',
    initialState,
    reducers: {
        addProduct(state, action) {
            const isChosenProduct = state.chosenProducts.findIndex(
                (chosenProduct) => chosenProduct.id === action.payload.id
            );
            if (isChosenProduct === -1) {
                state.chosenProducts = [
                    ...state.chosenProducts,
                    action.payload,
                ];
            } else {
                state.chosenProducts[isChosenProduct].quantity += 1;
            }
        },
        togglePurchaseModal(state) {
            state.isPurchaseModalOpen = !state.isPurchaseModalOpen;
        },
        purchaseProduct(state) {
            state.isPurchaseModalOpen = !state.isPurchaseModalOpen;
            state.isBought = !state.isBought;
            state.chosenProducts = [];
        },
        closeSuccessModal(state) {
            state.isBought = !state.isBought;
        },
    },
});

export const {
    addProduct,
    togglePurchaseModal,
    closeSuccessModal,
    purchaseProduct,
} = userCart.actions;

export default userCart;
