import styled from "styled-components";

import { darkBrow, white, darkGrey } from "../constants/colors";

export const HeaderBar = styled.div({
  height: "60px",
  width: "100%",
  backgroundColor: darkBrow,
  display: "flex",
  position: "fixed",
  top: 0,
  left: 0,
  boxShadow: `0px 1px 3px ${darkGrey}`,
  justifyContent: "left",
  alignItems: "center"
});

export const AppName = styled.p({
  color: white,
  fontSize: "200%",
  fontWeight: "bold",
  margin: "0 0 0 20px",
  display: "block"
});
