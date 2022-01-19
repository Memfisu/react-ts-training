import React, { useCallback } from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {changeStatus, deleteData} from '../reducers/dataSetter';
import {dataListSelector} from "../selectors/selectors";
import {IData} from "../interfaces/interfaces";

interface IProps {
    data: string,
    id: number
}

const TodoItem = ({ data, id }: IProps) => {
  const dispatch = useDispatch();
  const currentItem = useSelector(dataListSelector).find((item: IData) => item.id === id);
  const isCompleted = currentItem ? currentItem.completed : false;

  const handleClick = useCallback((): void => {
      dispatch(deleteData(id));
  }, [dispatch, id]);

  const handleComplete = useCallback(():void => {
    dispatch(changeStatus(id));
  }, [dispatch, id]);

  return (
    <div className="todoItem">
      <div onClick={handleComplete} className={isCompleted ? "completed" : ''}>{data}</div>
      <button className="commonButton" onClick={handleClick}>x</button>
    </div>
  );
}

export default TodoItem;
