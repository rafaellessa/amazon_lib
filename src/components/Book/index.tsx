import { faEllipsisV } from "@fortawesome/free-solid-svg-icons";
import { Book as IBook } from "../../models/Book";
import React from "react";
import {
  ActionIcon,
  BookContainer,
  Container,
  ContainerAction,
  ContainerActionArea,
} from "./styles";

interface BookProps {
  book: IBook;
  showDialog: () => void;
  selectedBook: (book: IBook) => void;
}

const Book: React.FC<BookProps> = ({ book, showDialog, selectedBook }) => {
  return (
    <Container>
      <ContainerActionArea>
        <BookContainer image={book.imageLinks.thumbnail} title={book.title} />
      </ContainerActionArea>
      <ContainerAction>
        <a
          onClick={() => {
            selectedBook(book);
            showDialog();
          }}
        >
          <ActionIcon icon={faEllipsisV} />
        </a>
      </ContainerAction>
    </Container>
  );
};

export default Book;
