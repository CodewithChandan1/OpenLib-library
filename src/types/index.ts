// API Response Types
export interface Book {
  key: string;
  title: string;
  authors?: string[];
  name?:string[];
  cover_i?: number;
  first_publish_year?: number;
  language?: string[];
  publisher?: string[];
  isbn?: string[];
 
}

export interface Author {
  key: string;
  name: string;
  birth_date?: string;
  death_date?: string;
  bio?: string;
  photos?: number[];
  works?: string[];
}

export interface Subject {
  key: string;
  name: string;
  work_count: number;
  works?: Book[];
}

export interface ReadingList {
  id: string;
  name: string;
  description?: string;
  books: Book[];
  created_at: string;
  updated_at: string;
}