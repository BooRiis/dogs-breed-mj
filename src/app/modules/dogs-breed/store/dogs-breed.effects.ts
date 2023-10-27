import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, mergeMap, tap } from 'rxjs/operators';
import { DogsBreedService } from './dogs-breed.service';
import * as DogActions from './dogs-breed.actions';
import { of } from 'rxjs';
import { Router } from '@angular/router';
import { DogImage } from './dogs-breed.model';

@Injectable()
export class DogsBreedEffects {
  loadBreeds$ = createEffect(() =>
    this.actions$.pipe(
      ofType(DogActions.loadBreeds),
      mergeMap(() => {
        return this.dogsBreedService.getBreeds().pipe(
          map((breeds) => DogActions.breedsLoaded({ breeds })),
          catchError((error) => of(DogActions.loadBreedsFailed({ error })))
        );
      })
    )
  );

  loadImage$ = createEffect(() =>
    this.actions$.pipe(
      ofType(DogActions.loadImage),
      mergeMap(({ reference_image_id }) => {
        return this.dogsBreedService.getImageUrl(reference_image_id).pipe(
          map((imageData) => {
            const imageUrl: DogImage = {
              id: imageData.id,
              width: imageData.width,
              height: imageData.height,
              url: imageData.url,
            };
            return DogActions.setImageUrl({ imageUrl });
          }),
          catchError((error) => of(DogActions.loadBreedsFailed({ error })))
        );
      })
    )
  );

  logout$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(DogActions.logout),
        tap(() => {
          localStorage.removeItem('token');
          this.router.navigate(['/login']);
        })
      ),
    { dispatch: false }
  );
  
  constructor(
    private readonly actions$: Actions,
    private dogsBreedService: DogsBreedService,
    private router: Router
  ) {}
}
