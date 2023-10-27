import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DogsBreedListComponent } from './dogs-breed-list.component';

describe('DogsBreedListComponent', () => {
  let component: DogsBreedListComponent;
  let fixture: ComponentFixture<DogsBreedListComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DogsBreedListComponent],
    });
    fixture = TestBed.createComponent(DogsBreedListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
