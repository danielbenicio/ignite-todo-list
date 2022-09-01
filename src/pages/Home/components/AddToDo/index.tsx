import React, { useState } from 'react';
import Button from '../../../../components/Button';
import Input from '../../../../components/Input';
import ToDoList from '../ToDoList';

import { Container, AddToDoContainer } from './styles';

export interface Task {
  id: number;
  title: string;
  isComplete: boolean;
}

const AddToDo: React.FC = () => {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [newTaskText, setNewTaskText] = useState<string>('');

  const handleAddTask = (event: any) => {
    setNewTaskText(event.target.value);
  };

  const handleSubmit = (event: any) => {
    event?.preventDefault();
    const randomNumber = Math.floor(Math.random() * 1000);

    const newTask: Task = {
      id: randomNumber,
      title: `${newTaskText}`,
      isComplete: false,
    };

    setTasks((prevState) => [...prevState, newTask]);
    setNewTaskText('');
  };

  const onDeleteTasks = (taskToDelete: number) => {
    setTasks((prevState) => prevState.filter((task) => task.id !== taskToDelete));
  };

  return (
    <>
      <Container>
        <form onSubmit={handleSubmit}>
          <AddToDoContainer>
            <Input value={newTaskText} onChange={handleAddTask} placeholder="Adicione uma nova tarefa" size={39.875} />
            <Button type="submit" disabled={newTaskText.length === 0}>Criar</Button>
          </AddToDoContainer>
        </form>
      </Container>
      <ToDoList tasks={tasks} onDeleteTasks={onDeleteTasks} />
    </>
  );
};

export default AddToDo;
