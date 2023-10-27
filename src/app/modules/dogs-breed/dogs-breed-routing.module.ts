import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DogsBreedListComponent } from './view/dogs-breed-list/dogs-breed-list.component';

const routes: Routes = [{path: '', component: DogsBreedListComponent}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DogsBreedRoutingModule { }