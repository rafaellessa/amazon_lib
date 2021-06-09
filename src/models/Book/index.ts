export interface Book {
  id: string;
  imageLinks: {
    smallThumbnail: string;
    thumbnail: string;
  };
  infoLink: string;
  pageCount: number;
  shelf: string;
  title: string;
  publishedDate: string;
  description: string;
}
