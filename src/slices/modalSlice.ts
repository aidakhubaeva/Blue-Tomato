import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

const initialState = {
    isOpen: false,
    selectedId: null as number | null,
};

const modalSlice = createSlice({
    name: 'modal',
    initialState,
    reducers: {
        openModal: (state, action: PayloadAction<number>) => {
            state.isOpen = true;
            state.selectedId = action.payload;
        },
        closeModal: (state) => {
            state.isOpen = false;
            state.selectedId = null;
        },
    },
});

export const { openModal, closeModal } = modalSlice.actions;
export default modalSlice.reducer;