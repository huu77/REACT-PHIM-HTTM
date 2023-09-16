// TaskList.tsx
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../redux/store';
import { addTask, toggleTask } from '../features/tasksSlice'
export interface TypeOfTask {
  id: React.Key | null | undefined; 
  completed: boolean | undefined; 
  text: string | number | boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | Iterable<React.ReactNode> | React.ReactPortal | null | undefined;

}
const TaskList: React.FC = () => {
  const tasks = useSelector((state: RootState) => state.tasks.tasks);
  const dispatch = useDispatch();

  const handleAddTask = (text: string) => {
    dispatch(addTask(text));
  };

  const handleToggleTask = (taskId: any) => {
    dispatch(toggleTask(taskId));
  };

  return (
    <div className='w-screen mt-20'>
      <h1 className='mt-20'>Task List</h1>
      <ul>
        {tasks.map((task:TypeOfTask) => (
          <li key={task.id} className='text-3xl font-bold underline'>
            <input
              type="checkbox"
              checked={task.completed}
              onChange={() => handleToggleTask(task.id)}
            />
            {task.text}
          </li>
        ))}
      </ul>
      <input
        type="text"
        placeholder="Add a new task"
        onKeyDown={(e) => {
          if (e.key === 'Enter' && e.currentTarget.value.trim() !== '') {
            handleAddTask(e.currentTarget.value.trim());
            e.currentTarget.value = '';
          }
        }}
      />
    </div>
  );
};

export default TaskList;
