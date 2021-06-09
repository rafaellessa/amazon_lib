import React from "react";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";

import {
  Container,
  ContainerActionArea,
  BookContainer,
  Content,
  ContainerAction,
} from "./styles";

interface BookProps {
  title: string;
  imageUri: string;
}

const Book: React.FC<BookProps> = ({ title, imageUri }) => {
  return (
    <Container>
      <ContainerActionArea>
        <BookContainer image={imageUri} title="Contemplative Reptile" />
      </ContainerActionArea>
      <ContainerAction>
        <Button size="small" color="primary">
          Share
        </Button>
        <Button size="small" color="primary">
          Learn More
        </Button>
      </ContainerAction>
    </Container>
  );
};

export default Book;
