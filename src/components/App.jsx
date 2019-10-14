import React from "react";

import Header from "./Header";
import TaskList from "./TaskList";
import { MainFrame } from "./App.style";

export default () => (
  <MainFrame>
    <Header />
    <TaskList />
  </MainFrame>
);
