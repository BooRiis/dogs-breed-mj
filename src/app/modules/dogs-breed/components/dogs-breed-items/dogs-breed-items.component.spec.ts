import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DogsBreedItemsComponent } from './dogs-breed-items.component';

describe('DogsBreedItemsComponent', () => {
  let component: DogsBreedItemsComponent;
  let fixture: ComponentFixture<DogsBreedItemsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DogsBreedItemsComponent]
    });
    fixture = TestBed.createComponent(DogsBreedItemsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
