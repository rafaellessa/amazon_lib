import React from "react";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import { faUser, faCog, faEllipsisV } from "@fortawesome/free-solid-svg-icons";

import {
  Container,
  ContainerActionArea,
  BookContainer,
  Content,
  ContainerAction,
  ActionIcon,
} from "./styles";

interface BookProps {
  title: string;
  imageUri: string;
  showDialog: () => void;
}

const Book: React.FC<BookProps> = ({ title, imageUri, showDialog }) => {
  return (
    <Container>
      <ContainerActionArea>
        <BookContainer image={imageUri} title={title} />
      </ContainerActionArea>
      <ContainerAction>
        <a onClick={showDialog}>
          <ActionIcon icon={faEllipsisV} />
        </a>
      </ContainerAction>
    </Container>
  );
};

export default Book;
