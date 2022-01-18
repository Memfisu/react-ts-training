import React, { FC } from 'react';
import TodoItem from './TodoItem';
import { useSelector } from 'react-redux';
import { dataListSelector } from '../selectors/selectors';
import { IData } from '../interfaces/interfaces';

const TodoList: FC = () => {
  const list = useSelector(dataListSelector);

  return (
    <div className="todoList">
        {list?.map((item:IData , index: number) => <TodoItem key={index} data={item.data} index={index} />)}
    </div>
  );
}

export default TodoList;
