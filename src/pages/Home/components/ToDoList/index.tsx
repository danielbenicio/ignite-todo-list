import React from 'react';
import { Task } from '../AddToDo';
import TaskContent from './components/TaskContent';

import {
  Container,
  Content,
  ToDoContainer,
  ToDoListHeader,
  CreatedTasks,

} from './styles';

interface ToDoListProps {
  tasks: Task[];
  onDeleteTasks: Function;
}

const ToDoList: React.FC<ToDoListProps> = ({ tasks, onDeleteTasks }) => (
  <Container>
    <Content>
      <ToDoContainer>
        <ToDoListHeader>
          <CreatedTasks>
            <span>Tarefas criadas</span>
            <div>{tasks.length}</div>
          </CreatedTasks>

        </ToDoListHeader>

        <div>
          {tasks.map((task) => (
            <TaskContent checkboxContent={task} onDeleteTasks={onDeleteTasks} />
          ))}
        </div>
      </ToDoContainer>
    </Content>
  </Container>
);

export default ToDoList;
