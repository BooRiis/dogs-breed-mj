import { createReducer, on } from '@ngrx/store';
import { DogBreedState, DogImage } from './dogs-breed.model';
import * as DogActions from './dogs-breed.actions';

export const DOGS_BREED = 'dogsBreed';

export const initialState: DogBreedState = {
  breeds: [],
  imageUrl: {} as DogImage,

  error: null,
};

export const reducer = createReducer(
  initialState,
  on(DogActions.breedsLoaded, (state, { breeds }) => ({ ...state, breeds })),
  on(DogActions.loadBreedsFailed, (state, { error }) => ({ ...state, error })),
  on(DogActions.loadImage, (state) => ({ ...state })),
  on(DogActions.setImageUrl, (state, { imageUrl }) => ({ ...state, imageUrl }))
);
