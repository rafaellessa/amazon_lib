export enum ShelfBooks {
  WANT_TO_READ = "wantToRead",
  CURRENTLY_READING = "currentlyReading",
  READ = "read",
}

export const factoryShelf = () => {
  return {
    want_to_read: ShelfBooks.WANT_TO_READ,
    currently_reading: ShelfBooks.CURRENTLY_READING,
    read: ShelfBooks.READ,
  };
};
