import { UnknownAction } from '@reduxjs/toolkit';
import counterReducer from './sliderSlice';
import { setCurrentSlide } from './sliderSlice';

describe('counterReducer', () => {
    it('should handle initial state', () => {
        expect(counterReducer(undefined, {} as UnknownAction)).toEqual({ currentSlide: 0 });
    });

    it('should handle setCurrentSlide', () => {
        expect(counterReducer({ currentSlide: 0 }, setCurrentSlide(1))).toEqual({ currentSlide: 1 });
    });
});
