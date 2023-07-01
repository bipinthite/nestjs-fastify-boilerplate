export interface Category {
  name: string;
  id: number;
}

export enum Status {
  AVAILABLE = 'available',
  PENDING = 'pending',
  SOLD = 'sold',
}

export interface Pet {
  readonly category: Category;
  readonly id: number;
  readonly name: string;
  readonly photoUrls: string[];
  readonly status: Status;
  readonly tags: string[];
}
