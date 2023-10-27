import { Component } from '@angular/core';
import { DogsBreedFacade } from '../../store/dogs-breed.facade';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { debounceTime, distinctUntilChanged, map, startWith } from 'rxjs';
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';

@UntilDestroy()
@Component({
  selector: 'app-dogs-breed',
  templateUrl: './dogs-breed-list.component.html',
  styleUrls: ['./dogs-breed-list.component.scss'],
})
export class DogsBreedListComponent {
  searchControl = new FormControl();
  noResultsMessage = false;

  dogBreeds$ = this.breedsFacade.dogsBreed$;
  filteredBreeds$ = this.dogBreeds$.pipe(startWith([]));

  constructor(private breedsFacade: DogsBreedFacade) {}

  ngOnInit() {
    this.breedsFacade.loadBreeds();

    this.searchControl.valueChanges
      .pipe(debounceTime(300), distinctUntilChanged(), untilDestroyed(this))
      .subscribe((searchTerm) => {
        this.filterBreeds(searchTerm);
      });
  }

  onShowMoreClick(referenceImageId: string) {
    this.breedsFacade.loadImage(referenceImageId);
  }

  filterBreeds(searchTerm: string) {
    this.filteredBreeds$ = this.dogBreeds$.pipe(
      map((breeds) => {
        if (!searchTerm) {
          return breeds;
        } else {
          const filteredBreeds = breeds.filter((breed) =>
            breed.name.toLowerCase().includes(searchTerm.toLowerCase())
          );
          this.noResultsMessage = filteredBreeds.length === 0;
          return filteredBreeds;
        }
      })
    );
  }

  onLogout(): void {
    this.breedsFacade.logout();
  }
}
