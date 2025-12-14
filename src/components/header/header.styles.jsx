import { Link, NavLink } from "react-router-dom";
import styled from "styled-components";

import Logo from "../../assets/react.svg?react";

export const StyledHeader = styled.header`
  display: flex;
  justify-content: space-between;
`;

export const LogoContainerLink = styled(Link)`
  margin-left: 16px;
`;

export const StyledLogo = styled(Logo)`
  width: 50px;
  height: 50px;
`;

export const NavigationList = styled.ul`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 30px;
  margin: 0;
  padding: 16px 0;
`;

export const NavigationLink = styled(NavLink)`
  text-transform: uppercase;
  cursor: pointer;
`;
