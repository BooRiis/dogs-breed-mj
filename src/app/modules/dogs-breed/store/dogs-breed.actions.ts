import { createAction, props } from '@ngrx/store';
import { DogBreed, DogImage } from './dogs-breed.model';

export const loadBreeds = createAction('[Dog] Load Breeds');
export const breedsLoaded = createAction(
  '[Dog] Breeds Loaded',
  props<{ breeds: DogBreed[] }>()
);
export const loadBreedsFailed = createAction(
  '[Dog] Load Breeds Failed',
  props<{ error: any }>()
);

export const loadImage = createAction(
  '[Dog] Load Image',
  props<{ reference_image_id: string }>()
);
export const setImageUrl = createAction(
  '[Dog] Set Image URL',
  props<{ imageUrl: DogImage }>()
);

export const logout = createAction('[Auth] Logout');
