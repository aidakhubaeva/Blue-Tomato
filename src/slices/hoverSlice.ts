import { createSlice } from "@reduxjs/toolkit";

interface HoverState {
    isHovered: boolean;
}

const initialState: HoverState = {
    isHovered: false,
};

const hoverSlice = createSlice({
    name: "hover",
    initialState,
    reducers: {
        setHoverTrue: (state) => {
            state.isHovered = true;
        },
        setHoverFalse: (state) => {
            state.isHovered = false;
        },
    },
});

export const { setHoverTrue, setHoverFalse } = hoverSlice.actions;
export default hoverSlice.reducer;
