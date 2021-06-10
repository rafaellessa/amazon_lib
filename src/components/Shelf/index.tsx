import React, { useEffect } from "react";
import { Book } from "../../models/Book";
import { translateTitle } from "../../utils/util";
import BookContainer from "../../components/Book";

import { BookContainerView, Container, TitleContainer } from "./styles";

interface ShelfProps {
  books: Book[];
  title: string;
  showDialog: () => void;
  selectedBook: (book: Book) => void;
}

const Shelf: React.FC<ShelfProps> = ({
  books,
  title,
  showDialog,
  selectedBook,
}) => {
  useEffect(() => {
    console.log("Montou");
  }, []);

  return (
    <Container>
      <TitleContainer>{translateTitle(title)}</TitleContainer>
      <BookContainerView>
        {books.map((book) => (
          <BookContainer
            showDialog={showDialog}
            book={book}
            selectedBook={selectedBook}
          ></BookContainer>
        ))}
      </BookContainerView>
    </Container>
  );
};

export default Shelf;
