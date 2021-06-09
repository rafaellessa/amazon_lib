import React from "react";
import logo from "../../assets/logo2.png";
import {
  ContainerHeader,
  ContainerView,
  LogoContainer,
  LogoLib,
  OptionMenuContainer,
  OptionMenuItem
} from "./styles";

interface HeaderProps {
  search?: string;
  onSearch?: () => void;
}

const Header: React.FC<HeaderProps> = () => (
  <ContainerView fluid>
    <ContainerView>
      <ContainerHeader>
        <LogoContainer>
          <LogoLib src={logo} />
        </LogoContainer>
        <OptionMenuContainer>
          <OptionMenuItem
            onClick={() => {
              console.log("clicou");
            }}
          >
            Home
          </OptionMenuItem>
          <OptionMenuItem
            onClick={() => {
              console.log("clicou");
            }}
          >
            Busca
          </OptionMenuItem>
        </OptionMenuContainer>
      </ContainerHeader>
    </ContainerView>
  </ContainerView>
);

export default Header;
