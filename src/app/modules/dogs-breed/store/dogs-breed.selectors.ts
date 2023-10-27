import { createFeatureSelector, createSelector } from '@ngrx/store';
import { DogBreedState } from './dogs-breed.model';
import { DOGS_BREED } from './dogs-breed.reducer';

export const selectDogsBreedState =
  createFeatureSelector<DogBreedState>(DOGS_BREED);

export const selectBreeds = createSelector(
  selectDogsBreedState,
  (state) => state.breeds
);
export const selectError = createSelector(
  selectDogsBreedState,
  (state) => state.error
);
export const selectImageUrl = createSelector(
  selectDogsBreedState,
  (state) => state.imageUrl
);

export const selectDogsBreedError = createSelector(
  selectDogsBreedState,
  (state: DogBreedState) => state.error
);
