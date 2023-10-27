import { Component, EventEmitter, Input, Output } from '@angular/core';
import { DogBreed, DogImage } from '../../store/dogs-breed.model';
import { UntilDestroy } from '@ngneat/until-destroy';

UntilDestroy();
@Component({
  selector: 'app-dogs-breed-items',
  templateUrl: './dogs-breed-items.component.html',
  styleUrls: ['./dogs-breed-items.component.scss'],
})
export class DogsBreedItemsComponent {
  openedItemIndices: number[] = [2];
  @Input() breeds: DogBreed[] | null | undefined;
  @Output() showMoreClicked: EventEmitter<string> = new EventEmitter<string>();

  onShowMoreClick(index: number, breed: DogBreed) {
    const indexPosition = this.openedItemIndices.indexOf(index);

    if (indexPosition === -1) {
      this.openedItemIndices.push(index);
    } else {
      this.openedItemIndices.splice(indexPosition, 1);
    }

    if (indexPosition === -1 && breed.reference_image_id) {
      this.showMoreClicked.emit(breed.reference_image_id);
    }
  }
}
