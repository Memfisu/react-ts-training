import React from 'react';
import { useDispatch } from 'react-redux';
import { deleteData } from '../reducers/dataSetter';

interface IProps {
    data: string,
    index: number
}

const TodoItem = ({ data, index }: IProps) => {
  const dispatch = useDispatch();

  const handleClick = () => {
      dispatch(deleteData(index));
  };

  return (
    <div className="todoItem">
      <div>{data}</div>
      <button className="commonButton" onClick={handleClick}>x</button>
    </div>
  );
}

export default TodoItem;
