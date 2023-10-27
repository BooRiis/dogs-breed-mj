import { Injectable } from '@angular/core';
import { Store, select } from '@ngrx/store';
import * as DogsBreedActions from './dogs-breed.actions';
import { DogBreed, DogBreedState, DogImage } from './dogs-breed.model';
import {
  selectBreeds,
  selectDogsBreedError,
  selectImageUrl,
} from './dogs-breed.selectors';
import { logout } from './dogs-breed.actions';

@Injectable()
export class DogsBreedFacade {
  dogsBreed$ = this.store.pipe(select(selectBreeds));
  imageUrl$ = this.store.pipe(select(selectImageUrl));
  error$ = this.store.pipe(select(selectDogsBreedError));

  constructor(private readonly store: Store<DogBreedState>) {}

  loadBreeds() {
    this.store.dispatch(DogsBreedActions.loadBreeds());
  }

  logout(): void {
    this.store.dispatch(logout());
  }

  loadImage(reference_image_id: string) {
    this.store.dispatch(DogsBreedActions.loadImage({ reference_image_id }));
  }

  setImageUrl(imageUrl: DogImage) {
    this.store.dispatch(DogsBreedActions.setImageUrl({ imageUrl }));
  }
}
