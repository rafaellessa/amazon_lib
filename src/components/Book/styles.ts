import styled from "styled-components";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import theme from "../../utils/theme";

export const Container = styled(Card)`
  max-width: 200px;
  min-width: 200px;
  margin-right: 10px;
`;

export const Content = styled(CardContent)``;

export const ContainerActionArea = styled(CardActionArea)``;
export const ContainerAction = styled(CardActions)`
  display: flex;
  justify-content: center;
`;

export const BookContainer = styled(CardMedia)`
  height: 250px;
`;

export const ActionIcon = styled(FontAwesomeIcon)`
  font-size: 20px;
  color: ${theme.colors.secondary};
`;
