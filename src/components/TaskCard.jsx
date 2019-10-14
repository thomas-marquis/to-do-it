import React from "react";
import { string } from "prop-types";

import { CardBase, TaskTitle } from "./TaskCard.style";

const TaskCard = ({ title = "" }) => (
  <CardBase>
    <TaskTitle>{title}</TaskTitle>
  </CardBase>
);

TaskCard.propTypes = {
  title: string
};

export default TaskCard;
