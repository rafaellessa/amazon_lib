import styled from "styled-components";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";

export const Container = styled(Card)`
  max-width: 250px;
  margin-right: 10px;
`;

export const Content = styled(CardContent)``;

export const ContainerActionArea = styled(CardActionArea)``;
export const ContainerAction = styled(CardActions)``;

export const BookContainer = styled(CardMedia)`
  height: 250px;
`;
