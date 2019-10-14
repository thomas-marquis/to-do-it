import styled from "styled-components";

import { darkGrey } from "../constants/colors";

export const CardBase = styled.div({
  with: "100%",
  paddingRight: "20px",
  paddingLeft: "20px",
  boxShadow: `1px 1px 3px ${darkGrey}`,
  display: "flex",
  justifyContent: "space-between",
  marginBottom: "10px"
});

export const TaskTitle = styled.p({
  display: "block",
  fontWeight: "bold"
});
