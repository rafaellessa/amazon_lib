import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Avatar from "@material-ui/core/Avatar";
import Dialog from "@material-ui/core/Dialog";
import DialogTitle from "@material-ui/core/DialogTitle";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import styled from "styled-components";
import theme from "../../utils/theme";

export const Container = styled(Dialog)``;

export const ContainerTitle = styled(DialogTitle)``;

export const ContainerList = styled(List)``;

export const ContainerItem = styled(ListItem)``;

export const ShelfIcon = styled(FontAwesomeIcon)`
  font-size: 20px;
  color: ${theme.colors.secondary};
`;

export const ListShelfIcon = styled(ListItemAvatar)``;

export const ContainerIcon = styled(Avatar)`
  background-color: ${theme.colors.primary};
  color: ${theme.colors.primary};
`;
