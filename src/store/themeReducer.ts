import { toolkitThemeType } from "@/utils/state";
import { createSlice } from "@reduxjs/toolkit";

const initialState: toolkitThemeType = {
  darkmode: false,
};

const themeSlice = createSlice({
  name: "theme",
  initialState,
  reducers: {
    toggleDarkmode: (state) => {
      state.darkmode = !state.darkmode;
    },
  },
});

export const { toggleDarkmode } = themeSlice.actions;
export default themeSlice.reducer;
