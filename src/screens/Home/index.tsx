import React, { useEffect, useState } from "react";

import { ContainerFluid, ContainerView } from "./styles";
import { getAll } from "../../services/api/api";
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

  useEffect(() => {
    fetchBooks();
  }, []);

  useEffect(() => {
    parseBooksShelf();
  }, [books]);

  useEffect(() => {
    console.log("Shelfs no effect: ", shelfs);
  }, [shelfs]);

  function handleShowDialog() {
    setShowDialog(true);
  }

  function handleClose(value: string) {
    setShowDialog(false);
  }

  async function fetchBooks() {
    setBooks(await getAll());
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
              showDialog={handleShowDialog}
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
