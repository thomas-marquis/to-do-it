import React from "react";

import TaskCard from "./TaskCard";
import { TaskListBlock, TaskItem } from "./TaskList.style";

const data = [
  "payer mes impots",
  "faire mes compte de fin de mois",
  "prendre rendez-vous chez des courtiers",
  "passer faire des petites courses apres le boulot",
  "m'acheter de nouvelles chaussures de course"
];

const TaskList = () => (
  <TaskListBlock>
    {data.map(title => (
      <TaskItem>
        <TaskCard title={title} />
      </TaskItem>
    ))}
  </TaskListBlock>
);

export default TaskList;
