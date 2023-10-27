import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DogsBreedListComponent } from './view/dogs-breed-list/dogs-breed-list.component';
import { DogsBreedItemsComponent } from './components/dogs-breed-items/dogs-breed-items.component';
import { DogsBreedRoutingModule } from './dogs-breed-routing.module';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import * as fromDogsBreedReducer from './store/dogs-breed.reducer';
import { DogsBreedEffects } from './store/dogs-breed.effects';
import { DogsBreedService } from './store/dogs-breed.service';
import { DogsBreedFacade } from './store/dogs-breed.facade';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    DogsBreedRoutingModule,
    ReactiveFormsModule,
    StoreModule.forFeature(fromDogsBreedReducer.DOGS_BREED, fromDogsBreedReducer.reducer),
    EffectsModule.forFeature([DogsBreedEffects]),
  ],
  declarations: [DogsBreedListComponent, DogsBreedItemsComponent],
  exports: [DogsBreedListComponent],
  providers: [
    DogsBreedService,
    DogsBreedFacade
  ]
})
export class DogsBreedModule {}
