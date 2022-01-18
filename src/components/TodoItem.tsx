import React, { useCallback, useState } from 'react';
import { useDispatch } from 'react-redux';
import { deleteData } from '../reducers/dataSetter';

interface IProps {
    data: string,
    index: number
}

const TodoItem = ({ data, index }: IProps) => {
  const dispatch = useDispatch();
  const [isCompleted, setCompleted] = useState<boolean>(false);

  const handleClick = useCallback((): void => {
      dispatch(deleteData(index));
  }, [dispatch, index]);

  const handleComplete = useCallback(():void => {
    if (!isCompleted) {
        setCompleted(true);
        // dispatch(); // todo
    }
    else {
        setCompleted(false);
        // dispatch();
    }
  }, [isCompleted]);

  return (
    <div className="todoItem">
      <div onClick={handleComplete} className={isCompleted ? "completed" : ''}>{data}</div>
      <button className="commonButton" onClick={handleClick}>x</button>
    </div>
  );
}

export default TodoItem;
