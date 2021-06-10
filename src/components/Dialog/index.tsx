import { faBook } from "@fortawesome/free-solid-svg-icons";
import ListItemText from "@material-ui/core/ListItemText";
import React from "react";
import { factoryShelf } from "../../screens/Home/models";
import { translateTitle } from "../../utils/util";
import {
  Container,
  ContainerIcon,
  ContainerItem,
  ContainerList,
  ContainerTitle,
  ListShelfIcon,
  ShelfIcon,
} from "./styles";

export interface SimpleDialogProps {
  open: boolean;
  selectedValue: string;
  onClose: (value: string) => void;
}

const Dialog: React.FC<SimpleDialogProps> = ({
  open,
  selectedValue,
  onClose,
}) => {
  const shelfs = factoryShelf();

  const handleClose = () => {
    onClose(selectedValue);
  };

  const handleListItemClick = (value: string) => {
    console.log("Shelf clicado", value);
    onClose(value);
  };

  return (
    <Container
      onClose={handleClose}
      aria-labelledby="simple-dialog-title"
      open={open}
    >
      <ContainerTitle id="simple-dialog-title">
        Deseja mover pra qual pratileira?
      </ContainerTitle>
      <ContainerList>
        {Object.values(shelfs).map((shelf) => (
          <ContainerItem
            button
            onClick={() => handleListItemClick(shelf)}
            key={shelf}
          >
            <ListShelfIcon>
              <ContainerIcon>
                <ShelfIcon icon={faBook} />
              </ContainerIcon>
            </ListShelfIcon>
            <ListItemText primary={translateTitle(shelf)} />
          </ContainerItem>
        ))}
      </ContainerList>
    </Container>
  );
};

export default Dialog;
