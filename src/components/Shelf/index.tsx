import React, { useEffect } from "react";
import { Book } from "../../models/Book";
import { ShelfBooks } from "../../screens/Home/models";
import BookContainer from "../../components/Book";

import { BookContainerView, Container, TitleContainer } from "./styles";

interface ShelfProps {
  books: Book[];
  title: string;
  showDialog: () => void;
}

const Shelf: React.FC<ShelfProps> = ({ books, title, showDialog }) => {
  useEffect(() => {
    console.log("Montou");
  }, []);

  const translateTitle = (title: string) => {
    switch (title) {
      case ShelfBooks.CURRENTLY_READING:
        return "Lendo";
      case ShelfBooks.READ:
        return "Lidos";
      case ShelfBooks.WANT_TO_READ:
        return "Lista de desejos";
    }
  };

  return (
    <Container>
      <TitleContainer>{translateTitle(title)}</TitleContainer>
      <BookContainerView>
        {books.map((book) => (
          <BookContainer
            showDialog={showDialog}
            key={book.id}
            title={book.title}
            imageUri={book.imageLinks.smallThumbnail}
          ></BookContainer>
        ))}
      </BookContainerView>
    </Container>
  );
};

export default Shelf;
