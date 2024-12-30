const OPEN_LIBRARY_API = 'https://openlibrary.org';

export const api = {
  searchBooks: async (query: string) => {
    const response = await fetch(`${OPEN_LIBRARY_API}/search.json?q=${encodeURIComponent(query)}`);
    return response.json();
  },

  getBook: async (workId: string) => {
    const response = await fetch(`${OPEN_LIBRARY_API}/works/${workId}.json`);
    return response.json();
  },

  getAuthor: async (authorId: string) => {
    const response = await fetch(`${OPEN_LIBRARY_API}/authors/${authorId}.json`);
    return response.json();
  },

  getSubject: async (subject: string) => {
    const response = await fetch(`${OPEN_LIBRARY_API}/subjects/${subject}.json`);
    return response.json();
  },

getCover: (coverId: number, size: 'S' | 'M' | 'L' = 'M') => {
  return `https://covers.openlibrary.org/b/id/${coverId}-${size}.jpg`;
}

};
