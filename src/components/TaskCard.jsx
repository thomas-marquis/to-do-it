import React from "react";
import { string } from "prop-types";

import {
  CardBase,
  TaskTitle,
  CardCheckBox,
  CheckIconSvg,
  CheckIconLine
} from "./TaskCard.style";

const TaskCard = ({ title = "" }) => (
  <CardBase>
    <CardCheckBox />
    <TaskTitle>{title}</TaskTitle>
  </CardBase>
);

TaskCard.propTypes = {
  title: string
};

export default TaskCard;
