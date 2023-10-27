export interface DogBreedState {
  breeds: DogBreed[];
  imageUrl: DogImage;
  error: string | null;
}

export interface DogBreed {
  weight: {
    imperial: string;
    metric: string;
  };
  height: {
    imperial: string;
    metric: string;
  };
  id: number;
  name: string;
  bred_for: string;
  breed_group: string;
  life_span: string;
  temperament: string;
  origin: string;
  reference_image_id: string;
  image: DogImage;
}

export interface DogImage {
  id: string;
  width: number;
  height: number;
  url: string;
}
