import React, { useEffect, useState } from "react";

import { ContainerFluid, ContainerView } from "./styles";
import { getAll, update } from "../../services/api/api";
import Header from "../../components/Header";
import { Book } from "../../models/Book";
import { Shelf } from "../../models/Shelf";
import ShelfContainer from "../../components/Shelf";
import Dialog from "../../components/Dialog";
import { factoryShelf } from "./models";

const Home: React.FC = () => {
  const [books, setBooks] = useState<Book[]>([]);
  const [shelfs, setShelfs] = useState<Shelf[]>();
  const [showDialog, setShowDialog] = useState(false);
  const [selectedValue, setSelectedValue] = useState("");
  const [bookSelected, setBookSelected] = useState<Book>();
  const [shelfSource, setShelfSource] = useState("");
  const [shelfDestination, setShelfDestination] = useState("");

  useEffect(() => {
    fetchBooks();
  }, []);

  useEffect(() => {
    parseBooksShelf();
  }, [books]);

  useEffect(() => {
    console.log("Livro selecionado", bookSelected);
  }, [bookSelected]);

  useEffect(() => {
    if (shelfDestination && bookSelected) {
      updateBooks(bookSelected, shelfDestination);
      fetchBooks();
    }
  }, [shelfDestination]);

  useEffect(() => {
    console.log("shelf Source", shelfSource);
  }, [shelfSource]);

  function handleShowDialog(shelf: any) {
    console.log("Sera: /?", shelf);
    setShowDialog(true);
  }

  function handleClose(value: string) {
    setShelfDestination(value);
    setShowDialog(false);
  }

  function handleSelectedBook(book: Book) {
    setBookSelected(book);
    setShelfSource(book.shelf);
  }

  async function fetchBooks() {
    setBooks(await getAll());
  }

  async function updateBooks(book: Book, shelf: string) {
    console.log("Vai atualizar os caras? ", book, shelf);
    await update(book, shelf);
  }

  const parseBooksShelf = () => {
    const shelfsTemp = factoryShelf();
    const shelfAux: Shelf[] = [];
    Object.values(shelfsTemp).map((item) => {
      const booksAux = books.filter((book) => book.shelf === item);

      const shelfFiltered = {
        title: item,
        books: booksAux,
      };
      shelfAux.push(shelfFiltered);
      setShelfs(shelfAux);
    });
  };

  return (
    <ContainerFluid fluid>
      <Header />
      {shelfs?.map((shelf) => (
        <section key={shelf.title}>
          <ContainerView>
            <ShelfContainer
              showDialog={() => handleShowDialog(shelf)}
              selectedBook={(book) => handleSelectedBook(book)}
              key={shelf.title}
              title={shelf.title}
              books={shelf.books}
            />
          </ContainerView>
        </section>
      ))}
      <Dialog
        open={showDialog}
        onClose={handleClose}
        selectedValue={selectedValue}
      />
    </ContainerFluid>
  );
};

export default Home;
