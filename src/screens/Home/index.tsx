import React, { useEffect, useState } from "react";

import { ContainerFluid, ContainerView } from "./styles";
import { getAll } from "../../services/api/api";
import Header from "../../components/Header";
import { Book } from "../../models/Book";
import { Shelf } from "../../models/Shelf";
import ShelfContainer from "../../components/Shelf";
import { factoryShelf } from "./models";

const Home: React.FC = () => {
  const [books, setBooks] = useState<Book[]>([]);
  const [shelfs, setShelfs] = useState<Shelf[]>();
  useEffect(() => {
    fetchBooks();
  }, []);

  useEffect(() => {
    parseBooksShelf();
  }, [books]);

  useEffect(() => {
    console.log("Shelfs no effect: ", shelfs);
  }, [shelfs]);

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
              key={shelf.title}
              title={shelf.title}
              books={shelf.books}
            />
          </ContainerView>
        </section>
      ))}
    </ContainerFluid>
  );
};

export default Home;
