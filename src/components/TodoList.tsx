import React, { FC } from 'react';
import TodoItem from './TodoItem';
import { useSelector } from 'react-redux';
import { dataListSelector, filteredData } from '../selectors/selectors';
import { IData } from '../interfaces/interfaces';

interface ICounter {
  completed: number,
  uncompleted: number
}

const TodoList: FC = () => {
  const filteredList = useSelector(filteredData);
  const list = useSelector(dataListSelector);

  const counter = list.reduce((acc: ICounter, item: IData): ICounter => {
    if (item.completed) acc.completed++;
    else acc.uncompleted++;
    return acc;
  }, { completed: 0, uncompleted: 0 });

  return (
    <div className="todoList">
      <div>{`Completed: ${counter.completed}`}</div>
      <div>{`Uncompleted: ${counter.uncompleted}`}</div>
      {filteredList?.map((item:IData) => <TodoItem key={item.id} data={item.data} id={item.id} />)}
    </div>
  );
}

export default TodoList;
