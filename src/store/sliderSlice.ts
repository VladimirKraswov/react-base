import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface SliderState {
  currentSlide: number;
}

const initialState: SliderState = {
  currentSlide: 0
};

export const sliderSlice = createSlice({
  name: 'slider',
  initialState,
  reducers: {
    setCurrentSlide: (state, action: PayloadAction<number>) => {
      state.currentSlide = action.payload;
    }
  },
});

// Export actions
export const { setCurrentSlide } = sliderSlice.actions;

// Export reducer
export default sliderSlice.reducer;
