import styled from "styled-components";
import theme from "../../utils/theme";
export const Container = styled.div`
  width: 100%;
  height: 400px;
  padding: 20px;
`;

export const TitleContainer = styled.span`
  font-family: ${theme.fonts.font_family};
  font-size: ${theme.fonts.x_large};
  font-weight: 700;
`;

export const BookContainerView = styled.div`
  display: flex;
  flex: 1;
`;
