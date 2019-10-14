import { string } from "prop-types";
import styled from "styled-components";

import { grey, white, lightBrown } from "../constants/colors";

export const CardBase = styled.div({
  with: "100%",
  paddingRight: "20px",
  paddingLeft: "20px",
  boxShadow: `1px 1px 2px ${grey}`,
  display: "flex",
  justifyContent: "left",
  alignItems: "center",
  marginBottom: "10px",
  backgroundColor: white,
  ":hover": {
    cursor: "pointer"
  }
});

export const TaskTitle = styled.p({
  display: "block",
  fontWeight: "bold",
  marginLeft: "20px"
});

export const CardCheckBox = styled.input.attrs({ type: "checkbox" })({
  borderRadius: "6px",
  width: "21px",
  height: "21px",
  background: white,
  transition: "all 150ms",
  ":focus": {
    boxShadow: `0 0 5px 2px ${lightBrown}`
  }
});

export const CheckIconSvg = styled.svg.attrs({ viewBox: "0 0 24 24" })({
  fill: "none",
  stroke: white,
  strokeWidth: "2px"
});

export const CheckIconLine = styled.polyline.attrs({
  points: "20 6 9 17 4 12"
});
