import React, { useState } from 'react';
import { Trash } from 'phosphor-react';

import {
  Container,
  TaskCheckContainer,
  TrashButton,
} from './styles';

import Checkbox from '../../../../../../components/Checkbox';

interface TaskContentProps {
  checkboxContent: { id: number; title: string; isComplete: boolean;};
  onDeleteTasks: Function;
}

const TaskContent: React.FC<TaskContentProps> = ({ checkboxContent, onDeleteTasks }) => {
  const [checked, setChecked] = useState('');

  const handleActiveCheckbox = (e: any) => {
    const CheckThis = e.target.ariaChecked;
    if (CheckThis === 'false') {
      setChecked('is');
    } else if (CheckThis === 'true') {
      setChecked('');
    }
  };

  const handleRemoveTask = () => {
    onDeleteTasks(checkboxContent.id);
  };

  return (
    <Container>
      <TaskCheckContainer>
        <Checkbox onClick={handleActiveCheckbox} isDone={checked}>
          {checkboxContent.title}
        </Checkbox>
      </TaskCheckContainer>
      <TrashButton onClick={handleRemoveTask}>
        <Trash size={24} />
      </TrashButton>
    </Container>
  );
};

export default TaskContent;
