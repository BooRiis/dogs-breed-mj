import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { DogBreed, DogImage } from './dogs-breed.model';

@Injectable()
export class DogsBreedService {
  private apiKey = 'live_SuYPHKLerg5vyOCBxpw08WTn8UWjmClTAyDquG1l3MV3uhuXMXcKAn51T4Un2Q0m';
  private apiUrl = 'https://api.thedogapi.com/v1/breeds';

  constructor(private http: HttpClient) {}

  getBreeds(): Observable<DogBreed[]> {
    return this.http.get<DogBreed[]>(`${this.apiUrl}`, { headers: { 'x-api-key': this.apiKey } });
  }

  getImageUrl(referenceImageId: string): Observable<DogImage> {
    return this.http.get<DogImage>(`https://api.thedogapi.com/v1/images/${referenceImageId}`, {
      headers: { 'x-api-key': this.apiKey },
    });
  }
}
