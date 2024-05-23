import { configureStore, combineReducers } from '@reduxjs/toolkit';

import sliderReducer from './store/sliderSlice';

// Combine reducers (if you have more than one reducer, add them here)
const rootReducer = combineReducers({
  slider: sliderReducer,
  // other reducers can go here
});

// This type will be useful when accessing the state
export type RootState = ReturnType<typeof rootReducer>;

export const store = configureStore({
  reducer: rootReducer,
});


