import { ShelfBooks } from "../screens/Home/models";

export const translateTitle = (title: string) => {
  switch (title) {
    case ShelfBooks.CURRENTLY_READING:
      return "Lendo";
    case ShelfBooks.READ:
      return "Lidos";
    case ShelfBooks.WANT_TO_READ:
      return "Lista de desejos";
  }
};
